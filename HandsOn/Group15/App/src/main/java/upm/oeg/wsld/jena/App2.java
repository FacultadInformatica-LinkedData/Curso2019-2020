package upm.oeg.wsld.jena;

import java.awt.Desktop;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Scanner;
import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Literal;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Property;
import org.apache.jena.rdf.model.RDFNode;
import org.apache.jena.rdf.model.Statement;
import org.apache.jena.rdf.model.StmtIterator;
import org.apache.jena.util.FileManager;
import org.apache.jena.util.iterator.ExtendedIterator;

public class App2 {
	
	public static final String ns = "http://www.airQualityMadrid.com/ontology#";
	
	/*Primer menú*/
	private static final int INIT = 0;
	private static final int RED = 1;
	private static final int ESTACION = 2;
	private static final int TIPO = 3;
	private static final int CONTAMINANTE = 4;
	private static final int EXIT = 5;
	private static final int ESTACION2 = 6;
	private static final int TIPO2 = 7;
	
	/*rdfEstaciones.ttl*/
	public static OntModel model1 = null;
	public static OntModel mInf1 = null;
	
	/*rdfDatosEstaciones-with-links.ttl*/
	public static OntModel model2 = null;
	public static OntModel mInf2 = null;
		
	
	private static void gui(int option, String estacion, int tipo) {
		switch(option) {
		case INIT:
			System.out.println("Bienvenido a Air Quality Madrid. ¿Qué quieres hacer?");
			System.out.println("[1] Consultar la red de estaciones existente");
			System.out.println("[2] Consultar la información y los datos medidos de una estación");
			System.out.println("[3] Consultar todas las estaciones de un determinado tipo");
			System.out.println("[4] Consultar todos los agentes contaminantes medidos y lás técnicas de medición utilizadas");
			System.out.println("[5] Salir");
			break;
		case RED:
			System.out.println("Estas son las estaciones que conforman la red en Madrid...");
			break;
		case ESTACION2:
			System.out.println("Los datos y mediciones de la estación " + estacion + " son los siguientes: ");
			break;
		case ESTACION:
			System.out.println("Introduce el nombre de la estacion: ");
			break;
		case TIPO2:
			if(tipo == 1) {
				System.out.println("Estas son las estaciones de tipo Urbana tráfico:\n");
			}
			if(tipo == 2) {
				System.out.println("Estas son las estaciones de tipo Urbana fondo:\n");
			}
			if(tipo == 3) {
				System.out.println("Estas son las estaciones de tipo Suburbana:\n");
			}
			break;
		case TIPO:
			System.out.println("Selecciona el tipo de estación");
			System.out.println("[1] Urbana tráfico");
			System.out.println("[2] Urbana fondo");
			System.out.println("[3] Suburbana");
			System.out.println("[4] Volver");
			break;
		case CONTAMINANTE:
			System.out.println("Agentes contaminantes y técnicas de medición en la red de estaciones de Madrid: ");
			break;
		default:
			System.out.println("Opción incorrecta");
		}
	}
	
	public static boolean openWebpage(URI uri) {
		Desktop desktop = Desktop.isDesktopSupported() ? Desktop.getDesktop() : null;
		if (desktop != null && desktop.isSupported(Desktop.Action.BROWSE)) {
			try {
				desktop.browse(uri);
				return true;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	public static boolean openWebpage(URL url) {
		try {
			return openWebpage(url.toURI());
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		return false;
	} 
	
	/*SACA TODAS LAS ESTACIONES Y SU INFORMACION (de rdfEstaciones.ttl)*/
	private static void queryRedEstaciones() {
		String query =	"PREFIX owl: <http://www.w3.org/2002/07/owl#>\r\n" +
						"PREFIX aqm: <http://www.airQualityMadrid.com/ontology#>\r\n" + 
						"PREFIX sosa: <http://www.w3.org/ns/sosa/>\r\n" + 
						"PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>\r\n" +
						"SELECT ?station ?nombre ?direccion ?tipo ?lat ?long WHERE {\r\n" + 
						"\t\t?station a sosa:Sensor .\r\n" +
						"\t\t?station aqm:nombre ?nombre .\r\n" +
						"\t\t?station aqm:direccion ?direccion .\r\n" +
						"\t\t?station aqm:tipo ?tipo .\r\n" +
						"\t\t?station geo:lat ?lat .\r\n" +
						"\t\t?station geo:long ?long .\r\n" +
						"}";
		
		Query queryTest = QueryFactory.create(query);
		QueryExecution qexec1 = QueryExecutionFactory.create(queryTest, model1);
		ResultSet results1 = qexec1.execSelect();
			
		while(results1.hasNext()) {
			QuerySolution binding1 = results1.next();
			RDFNode station = binding1.get("station");
			RDFNode nombre = binding1.get("nombre");
			RDFNode direccion = binding1.get("direccion");
			Literal latitud = binding1.getLiteral("lat");
			Literal longitud = binding1.getLiteral("long");
			RDFNode tipo = binding1.getLiteral("tipo");
			System.out.println("\n---------------------------------------------------------------------");
			System.out.println(station.toString());
			System.out.println("\n\tNombre de la estación: " + nombre.toString());
			System.out.println("\tLocalizada en: " + direccion.toString() + " con latitud " + latitud.getFloat() + " y longitud " + longitud.getFloat());
			System.out.println("\tDe tipo: " + tipo.toString());
		}
		System.out.println("\n");
		System.out.println("La query generada -> \n" + query);
		System.out.println("\n");
	}
	
	
	/*SACA TODAS LAS ESTACIONES DE UN DETERMINADO TIPO (de rdfEstaciones.ttl)*/
	public static void queryTipo(int tipo) {
		String tipoString = "";
		if(tipo == 1){
			tipoString = "Urbana tráfico";
		}
		if(tipo == 2){
			tipoString = "Urbana fondo";
		}
		if(tipo == 3) {
			tipoString = "Suburbana";
		}
		
		String query =	"PREFIX owl: <http://www.w3.org/2002/07/owl#>\r\n" +
						"PREFIX aqm: <http://www.airQualityMadrid.com/ontology#>\r\n" + 
						"PREFIX sosa: <http://www.w3.org/ns/sosa/>\r\n" + 
						"SELECT ?station ?nombre WHERE {\r\n" + 
						"\t\t?station a sosa:Sensor .\r\n" +
						"\t\t?station aqm:nombre ?nombre .\r\n" +
						"\t\t?station aqm:tipo ?tipo .\r\n" +
						"FILTER (regex(str(?tipo), \""+ tipoString +"\")) ." +
						"}";
		
		Query queryTest = QueryFactory.create(query);
		QueryExecution qexec1 = QueryExecutionFactory.create(queryTest, model1);
		ResultSet results1 = qexec1.execSelect();
		
		while(results1.hasNext()) {
			QuerySolution binding1 = results1.next();
			RDFNode nombre = binding1.get("nombre");
			System.out.println("\t" + nombre.toString());
		}
		System.out.println("\n");
		System.out.println("La query generada -> \n" + query);
		System.out.println("\n");
	}
	
	/*SACA TODA LA INFO Y MEDICIONES DE UNA ESTACION DADA*/
	public static void queryEstacion(String nombreEstacion) {
		String query =	"PREFIX owl: <http://www.w3.org/2002/07/owl#>\r\n" +
						"PREFIX aqm: <http://www.airQualityMadrid.com/ontology#>\r\n" + 
						"PREFIX sosa: <http://www.w3.org/ns/sosa/>\r\n" + 
						"SELECT ?station WHERE {\r\n" + 
						"\t\t?station a sosa:Sensor .\r\n" +
						"\t\t?station aqm:nombre ?nombre .\r\n" +
						"\t\tFILTER (regex(str(?nombre), \""+ nombreEstacion +"\")) ." +
						"}";
		
		Query queryTest = QueryFactory.create(query);
		QueryExecution qexec1 = QueryExecutionFactory.create(queryTest, model1);
		ResultSet results1 = qexec1.execSelect();//La query siempre saca un resultado (si es que existe)
		if(results1.hasNext()) {
			QuerySolution binding1 = results1.next();
			RDFNode station = binding1.get("station");
			String codEstacion = station.toString().substring(station.toString().length() - 8);
			Calendar rightNow = Calendar.getInstance();
			int hour = rightNow.get(Calendar.HOUR_OF_DAY);
			int hourPlus = hour + 1;
			String query2 =	"PREFIX owl: <http://www.w3.org/2002/07/owl#>\r\n" +
							"PREFIX aqm: <http://www.airQualityMadrid.com/ontology#>\r\n" + 
							"PREFIX sosa: <http://www.w3.org/ns/sosa/>\r\n" + 
							"PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\r\n" +
							"SELECT ?measurement ?unidad ?hasSimpleResult ?madeBySensor ?observedProperty ?resultTime ?usedProcedure WHERE {\r\n" + 
							"\t\t?measurement a sosa:Observation .\r\n" +
							"\t\t?measurement aqm:unidad ?unidad .\r\n" +
							"\t\t?measurement sosa:hasSimpleResult ?hasSimpleResult .\r\n" +
							"\t\t?measurement sosa:madeBySensor ?madeBySensor .\r\n" +
							"\t\t?measurement sosa:observedProperty ?observedProperty .\r\n" +
							"\t\t?measurement sosa:resultTime ?resultTime .\r\n" +
							"\t\t?measurement sosa:usedProcedure ?usedProcedure .\r\n" +
							"\t\tFILTER (regex(str(?madeBySensor), \""+ codEstacion +"\") && ?resultTime >= xsd:dateTime(\"2019-10-02T" + hour + ":00:00\") && ?resultTime < xsd:dateTime(\"2019-10-02T" + hourPlus + ":00:00\")) ." +
							"}";
			
			Query queryTest2 = QueryFactory.create(query2);
			QueryExecution qexec2 = QueryExecutionFactory.create(queryTest2, model2);
			ResultSet results2 = qexec2.execSelect();
			
			LocalDateTime now = LocalDateTime.now();
			System.out.print("Datos a las ");
			System.out.printf("%02d:%02d:%02d", now.getHour(), now.getMinute(), now.getSecond());
			System.out.print("\n");
			while(results2.hasNext()) {
				QuerySolution binding2 = results2.next();
				RDFNode measurement = binding2.get("measurement");
				RDFNode unidad = binding2.get("unidad");
				Literal hasSimpleResult = binding2.getLiteral("hasSimpleResult");
				RDFNode madeBySensor = binding2.get("madeBySensor");
				RDFNode observedProperty = binding2.get("observedProperty");
				Literal resultTime = binding2.getLiteral("resultTime");
				RDFNode usedProcedure = binding2.get("usedProcedure");
				System.out.println("\tMedición de " + observedProperty.toString() + " es de " + hasSimpleResult.toString().replace("^^http://www.w3.org/2000/01/rdf-schema#Literal", "") + unidad.toString() + ", se usó la técnica " + usedProcedure.toString());
			}
			System.out.println("\nLa query generada -> \n" + query2);
			System.out.println("\n");
		}
		else {
			System.out.println("Nombre de estación incorrecto");
		}
	}
	
	public static void queryContaminantes() {
		String query =	"PREFIX owl: <http://www.w3.org/2002/07/owl#>\r\n" +
						"PREFIX aqm: <http://www.airQualityMadrid.com/ontology#>\r\n" + 
						"PREFIX sosa: <http://www.w3.org/ns/sosa/>\r\n" + 
						"SELECT ?observableProperty ?contaminante WHERE {\r\n" + 
						"\t\t?observableProperty a sosa:ObservableProperty .\r\n" +
						"\t\t?observableProperty owl:sameAs ?contaminante .\r\n" +
						"}";
		
		Query queryTest1= QueryFactory.create(query);
		QueryExecution qexec1 = QueryExecutionFactory.create(queryTest1, model2);
		ResultSet results1 = qexec1.execSelect();
		
		while(results1.hasNext()) {
			QuerySolution binding1 = results1.next();
			
			RDFNode contaminante = binding1.get("contaminante");
			URL url = null;
			try {
				url = new URL(contaminante.toString());
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
			openWebpage(url);
		}
		System.out.println("Abriendo recursos de wikidata asociados...");
		System.out.println("\n");
		System.out.println("La query generada -> \n" + query);
	}
	
	public static void main(String[] args) {
		
		try {
		/* Inicio configuración del modelo 1 */
		String filename1 = "resources/rdfEstaciones.ttl";
		model1 = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM);
		mInf1 = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM_RDFS_INF, model1);
		InputStream in1 = FileManager.get().open(filename1);

		if (in1 == null) {
			throw new IllegalArgumentException("File: "+ filename1 +" not found");
		}

		model1.read(filename1);
		/* Fin configuración del modelo 1 */
		
		/* Inicio configuración del modelo 2 */
		String filename2 = "resources/rdfDatosEstaciones-with-links.ttl";
		model2 = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM);
		mInf2 = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM_RDFS_INF, model1);
		InputStream in2 = FileManager.get().open(filename2);

		if (in2 == null) {
			throw new IllegalArgumentException("File: "+ filename2 +" not found");
		}

		model2.read(filename2);
		/* Fin configuración del modelo 2 */
		
		/* INICIO DEL CLIENTE, LÓGICA DE LA APP Y QUERIES */
		Scanner reader = new Scanner(System.in);
		String estacion = "";
		int tipo;
		while(true) {
			gui(INIT, "", 0);
			int numeroEscogido = reader.nextInt();
			if(numeroEscogido == RED) {
				gui(RED, "", 0);
				queryRedEstaciones();
			}
			else if(numeroEscogido == ESTACION) {
				gui(ESTACION, "", 0);
				reader.nextLine();
				estacion = reader.nextLine();
				gui(ESTACION2, estacion, 0);
				queryEstacion(estacion);
			}
			else if(numeroEscogido == TIPO) {
				gui(TIPO, "", 0);
				tipo = reader.nextInt();
				gui(TIPO2, "", tipo);
				queryTipo(tipo);
			}
			else if(numeroEscogido == CONTAMINANTE) {
				gui(CONTAMINANTE, "", 0);
				queryContaminantes();
			}
			else if(numeroEscogido == EXIT) {
				System.out.println("DIN del hilo...");
				System.exit(0);
				break;
			}
		}
		}
		catch(Exception exc) {
			System.out.println("Opción incorrecta");
			String[] argumentos = null;
			System.out.flush();
			main(argumentos);
		}
		/*FIN DEL CLIENTE*/
	}

}
