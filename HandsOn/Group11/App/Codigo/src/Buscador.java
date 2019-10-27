import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextField;

public class Buscador extends JFrame {

	private JPanel contentPane;
	private JTextField textField;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					frame = new Buscador();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */

	private static Buscador frame;
	private JTextField nameField;
	private JTextField mailField;
	private JPasswordField passwordField;
	private JPasswordField passwordFieldV;
	private JLabel lblRotulo;
	private JLabel lblDireccion;
	private JLabel lblCP;
	private JLabel lblRegistro;
	private JButton btnRegistrarse;


	/**
	 * Create the frame.
	 */
	public Buscador() {
		setTitle("Full Station");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(500, 100, 600, 350);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		//Poner rotulo
		JComboBox<String> comboBox1 = new JComboBox<String>();
		contentPane.add(comboBox1);
		comboBox1.setBounds(170,70,350,20);
		comboBox1.addItem("");
		comboBox1.addItem("SHELL");
		comboBox1.addItem("CARREFOUR");
		comboBox1.addItem("BP");
		comboBox1.addItem("CEPSA");
		comboBox1.addItem("BALLENOIL");
		comboBox1.addItem("REPSOL");
		comboBox1.addItem("GALP");
		comboBox1.addItem("REPOSTA");
		comboBox1.addItem("ALCAMPO");
		comboBox1.addItem("SETOR");
		comboBox1.addItem("PETROPRIX");
		lblRotulo = new JLabel("Rotulo: ");
		contentPane.add(lblRotulo);
		lblRotulo.setBounds(50,70,100,20);

		//Poner Direccion
		JComboBox<String> comboBox2 = new JComboBox<String>();
		contentPane.add(comboBox2);
		comboBox2.setBounds(170,100,350,20);
		comboBox2.addItem("");
		comboBox2.addItem("AVENIDA VALDELAPARRA");
		comboBox2.addItem("CARRETERA M-603");
		comboBox2.addItem("CARRETERA A-1");
		comboBox2.addItem("CALLE VALGRANDE");
		comboBox2.addItem("AVENIDA MONTE DE VALDELATAS");
		comboBox2.addItem("CALLE MARQUES DE LA VALDAVIA");
		comboBox2.addItem("CARRETERA BARAJAS");
		comboBox2.addItem("AVENIDA EUROPA");
		comboBox2.addItem("AVENIDA DE ESPANA");
		comboBox2.addItem("PASEO ALCOBENDAS");
		comboBox2.addItem("CARRETERA ANTIGUA NACIONAL I");
		comboBox2.addItem("AVENIDA MARQUES DE LA VALDAVIA");
		comboBox2.addItem("BOULEVARD SALVADOR ALLENDE");
		comboBox2.addItem("CALLE FRANCISCO GERVAS");
		comboBox2.addItem("AVENIDA OLIMPICA");
		comboBox2.addItem("PLAZA MORALEJA");
		comboBox2.addItem("AVENIDA FUENTENUEVA");
		comboBox2.addItem("CARRETERA N-1");
		comboBox2.addItem("CARRETERA BURGOS");
		comboBox2.addItem("AVENIDA EINSTEIN");
		comboBox2.addItem("AVENIDA TENERIFE");
		comboBox2.addItem("PASEO EUROPA");
		comboBox2.addItem("AVENIDA DE LOS PIRINEOS");
		comboBox2.addItem("GLORIETA ANTONIO GAUDI");
		comboBox2.addItem("AVENIDA FUENTE NUEVA");
		comboBox2.addItem("AUTOVIA NACIONAL I");
		lblDireccion = new JLabel("Direccion: ");
		contentPane.add(lblDireccion);
		lblDireccion.setBounds(50,100,100,20);

		//Poner CP
		JComboBox<String> comboBox3 = new JComboBox<String>();
		contentPane.add(comboBox3);
		comboBox3.setBounds(170,130,350,20);
		comboBox3.addItem("");
		comboBox3.addItem("28100");
		comboBox3.addItem("28108");
		comboBox3.addItem("28109");
		comboBox3.addItem("28700");
		lblCP = new JLabel("Codigo Postal: ");
		contentPane.add(lblCP);
		lblCP.setBounds(50,130,100,20);

		//Etiqueta titulo
		lblRegistro = new JLabel("Full Station");
		contentPane.add(lblRegistro);
		lblRegistro.setBounds(255,30,100,20);

		contentPane.setSize(400,400);
		contentPane.setVisible(true);
		contentPane.setLayout(null);

		btnRegistrarse = new JButton("Buscar");
		contentPane.add(btnRegistrarse, BorderLayout.EAST);
		btnRegistrarse.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				int cont = 0;
				String rotulo = (String)comboBox1.getSelectedItem();
				String direccion = (String)comboBox2.getSelectedItem();
				String cp = (String)comboBox3.getSelectedItem();

				Resultado.rotulo = rotulo;
				Resultado.direccion = direccion;
				Resultado.cp = cp;
				if(rotulo.equals("")) cont++;
				if(direccion.equals("")) cont++;
				if(cp.equals("")) cont++;
				if(cont==3) JOptionPane.showMessageDialog(null,"Seleccione al menos 1 opcion","Mensaje de Error",JOptionPane.ERROR_MESSAGE);
				else {
					ArrayList<Site> sitios = Init.sentencia(rotulo, direccion, cp);
					if(sitios.isEmpty()) JOptionPane.showMessageDialog(null,"No hay coincidencias","Mensaje de Error",JOptionPane.ERROR_MESSAGE);
					else {
						Resultado.lista = sitios;
						Resultado.num = sitios.size();
						frame.setVisible(false);
						Resultado.main(null);
					}
				}
			}
		});
		btnRegistrarse.setForeground(new Color(0, 0, 0));
		btnRegistrarse.setBackground(new Color(240, 240, 240));
		btnRegistrarse.setBounds(215, 240, 150, 30);
		contentPane.add(btnRegistrarse);

	}
}
