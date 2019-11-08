package codigo;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.InputStream;
import java.util.LinkedList;
import javax.swing.ImageIcon;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import javax.swing.border.EmptyBorder;

import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.ResIterator;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.rdf.model.Statement;
import org.apache.jena.util.FileManager;
import org.apache.jena.vocabulary.OWL;
import org.eclipse.rdf4j.query.QueryLanguage;
import org.eclipse.rdf4j.query.TupleQuery;
import org.eclipse.rdf4j.query.TupleQueryResult;
import org.eclipse.rdf4j.repository.RepositoryConnection;
import org.eclipse.rdf4j.repository.sparql.SPARQLRepository;


public class MainFrame extends JFrame {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private int seleccion;
	private RepositoryConnection sparqlConnection;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					//Lectura de fichero rdf y creacion del modelo
					String file="AccidentesBicicletas_2019-csv.rdf";
					Model model = ModelFactory.createDefaultModel();
					InputStream in = FileManager.get().open(file);
					if (in == null)
						throw new IllegalArgumentException("File: "+file+" not found");
					model.read(in, null);

					//Creacion del array de distritos para llamar al constructor de MainFrame
					LinkedList<String> lista=new LinkedList<String>();
					ResIterator it = model.listSubjectsWithProperty(OWL.sameAs);
					while(it.hasNext()){
						lista.add(it.next().getLocalName());
					}
					String [] distritos=new String[lista.size()];
					for(int i=0;i<distritos.length;i++){
						distritos[i]=lista.get(i).toString();
					}
					MainFrame frame = new MainFrame(distritos, model);


					//					while(frame.getSeleccion()==-1){
					//						System.out.println("hola");
					//					}
					//					System.out.println(distritos[frame.getSeleccion()]);
					//					System.out.println(model.getResource(distritos[frame.getSeleccion()]).getPropertyResourceValue(OWL.sameAs));
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	public int getSeleccion() {
		return seleccion;
	}

	public void setSeleccion(int seleccion) {
		this.seleccion = seleccion;
	}

	/**
	 * Create the frame.
	 */
	public MainFrame(String[] distritos, Model model) {
		this.sparqlConnection=conectarWikidata();
		iniciarComponentes(distritos, model);
		setVisible(true);

	}

	private void iniciarComponentes(String[] distritos, Model model){
		//frame
		setSize(700, 550);
		setTitle("App");
		setLocationRelativeTo(null);
		setMinimumSize(new Dimension(250,250));
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		//panel
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(null);
		contentPane.setBackground(Color.WHITE);
		setContentPane(contentPane);


		//label texto
		JLabel et1=new JLabel("Seleccione un distrito", SwingConstants.CENTER);
		et1.setBounds(50,360,300,40);
		et1.setFont(new Font("arial",Font.PLAIN,30));
		contentPane.add(et1);

		//label imagen
		ImageIcon imagen = new ImageIcon("escudo_ciudad_de_madrid.jpg");
		JLabel et2=new JLabel();
		et2.setIcon(new ImageIcon(imagen.getImage().getScaledInstance(300, 300, Image.SCALE_SMOOTH)));
		et2.setBounds(190, 10, 300, 300);
		contentPane.add(et2);

		//botones
		JComboBox<String> listaDesplegable=new JComboBox<String>(distritos);
		listaDesplegable.setBounds(370, 365, 280, 30);
		listaDesplegable.setFont(new Font("arial",Font.PLAIN,20));
		contentPane.add(listaDesplegable);

		ActionListener accion=new ActionListener() {

			@Override 
			public void actionPerformed(ActionEvent ae){
				int n=listaDesplegable.getSelectedIndex();
				seleccion=n;		//dentro del array de distritos, en que posicion esta la seleccion del usuario
				Resource dist=model.getResource("http://www.semanticweb.org/group19/ontology/" + distritos[seleccion]);	//obtenemos uri del distrito en nuestro rdf
				String dist_wikidata=dist.getPropertyResourceValue(OWL.sameAs).getLocalName();	//obtenemos la uri del distrito seleccionado en wikidata

				DataFrame linked=new DataFrame(distritos[seleccion]);		//ventana que albergará los datos del distrito

				String queryPoblacion="SELECT ?poblacion  " +
						"WHERE { " +
						"wd:" + dist_wikidata + " wdt:P1082 ?poblacion }";


				TupleQuery tupleQueryPoblacion = sparqlConnection.prepareTupleQuery(QueryLanguage.SPARQL, queryPoblacion);
				TupleQueryResult resultPoblacion=tupleQueryPoblacion.evaluate();
				String pob=resultPoblacion.next().getValue("poblacion").stringValue();
				linked.escribirPoblacion(pob);

				String queryArea="SELECT ?area  " +
						"WHERE { " +
						"wd:" + dist_wikidata + " wdt:P2046 ?area }";

				TupleQuery tupleQueryArea = sparqlConnection.prepareTupleQuery(QueryLanguage.SPARQL, queryArea);
				TupleQueryResult resultArea=tupleQueryArea.evaluate();
				linked.escribirArea(resultArea.next().getValue("area").stringValue());

				String queryCP="SELECT ?CP  " +
						"WHERE { " +
						"wd:" + dist_wikidata + " wdt:P281 ?CP }";

				TupleQuery tupleQueryCP = sparqlConnection.prepareTupleQuery(QueryLanguage.SPARQL, queryCP);
				TupleQueryResult resultCP=tupleQueryCP.evaluate();
				while(resultCP.hasNext()){
					linked.escribirCP(resultCP.next().getValue("CP").stringValue());	
				}

				int contador=0;
				ResIterator accidentes_distrito=model.listSubjectsWithProperty(model.getProperty
						("http://www.semanticweb.org/group19/ontology/hasAgeRange"));
				while (accidentes_distrito.hasNext()){
					Resource next=accidentes_distrito.next();
					//					System.out.println(next.getLocalName());
					if(next.getPropertyResourceValue
							(model.getProperty("http://www.semanticweb.org/group19/ontology/hasDistrict")).
							getLocalName().equals(distritos[seleccion]))
						contador++;
				}
				linked.escribirNAccidentes(contador);
				
				linked.calculoAP((double)contador/Integer.valueOf(pob));

				String queryFronteras="SELECT ?fronteras  " +
						"WHERE { " +
						"wd:" + dist_wikidata + " wdt:P47 ?fronteras }";
				TupleQuery tupleQueryFronteras = sparqlConnection.prepareTupleQuery(QueryLanguage.SPARQL, queryFronteras);
				TupleQueryResult resultFronteras=tupleQueryFronteras.evaluate();

				String [] fronteras=new String[10];
				int contador_frontera=0;
				while(resultFronteras.hasNext()){
					fronteras[contador_frontera]=resultFronteras.next().getValue("fronteras").stringValue();
					contador_frontera++;
				}
			}
		};
		listaDesplegable.addActionListener(accion);
	}

	public RepositoryConnection  conectarWikidata(){
		SPARQLRepository sparqlRepository = new SPARQLRepository("https://query.wikidata.org/sparql");
		RepositoryConnection sparqlConnection = sparqlRepository.getConnection();
		return sparqlConnection;
	}
}
