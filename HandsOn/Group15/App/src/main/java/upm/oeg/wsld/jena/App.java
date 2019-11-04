package upm.oeg.wsld.jena;
import java.awt.EventQueue;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.Font;
import java.awt.Image;

import javax.swing.JButton;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class App {
	
	private JFrame frmMapaMadrid;
	private JTextArea cuadroResultados;
	
	/*********************************/
	/**************MAIN***************/
	/*********************************/
	public static void main( String[] args )
	{
		EventQueue.invokeLater(new Runnable() {
		public void run() {
			try {
				App window = new App();
				window.frmMapaMadrid.setVisible(true);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		});
    }
	
	/*********************************/
	/***********CONSTRUTOR************/
	/*********************************/
	public App() {
		initialize();
	}
	
	/*********************************/
	/***********INITIALIZE************/
	/*********************************/
	private void initialize() {
		frmMapaMadrid = new JFrame();
		frmMapaMadrid.setResizable(false);
		frmMapaMadrid.setTitle("Air Quality Madrid");
		frmMapaMadrid.setBounds(100, 100, 1100, 650);
		frmMapaMadrid.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmMapaMadrid.getContentPane().setLayout(null);
		frmMapaMadrid.setLayout(null);

		JLabel imagenMapaMadrid = new JLabel();
		imagenMapaMadrid.setBounds(25, 25, 800, 550);
		imagenMapaMadrid.setIcon(new ImageIcon(new javax.swing.ImageIcon(getClass().getResource("/resources/mapaMadridHD.jpg")).getImage().getScaledInstance(680, 580, Image.SCALE_SMOOTH)));
		//imagenMapaMadrid.setIcon(new ImageIcon(App.class.getResource("/resources/mapaMadridHD.jpg")));
		frmMapaMadrid.getContentPane().add(imagenMapaMadrid);
		
		cuadroResultados = new JTextArea();
		cuadroResultados.setEditable(false);
		cuadroResultados.setColumns(10);
		cuadroResultados.setBounds(750, 25, 250, 300);
		frmMapaMadrid.getContentPane().add(cuadroResultados);
		
		JLabel fraseResultados = new JLabel("RESULTADOS:");
		fraseResultados.setBounds(750, 11, 92, 14);
		fraseResultados.setFont(new Font("Tahoma", Font.BOLD, 11));
		frmMapaMadrid.getContentPane().add(fraseResultados);
		
		JButton estacionPrueba = new JButton("Estacion");
		estacionPrueba.setBounds(400, 300, 32, 32);
		estacionPrueba.setFocusPainted(false);
		estacionPrueba.setIcon(new ImageIcon(App.class.getResource("/resources/iconoEstacion.jpg")));
		frmMapaMadrid.getContentPane().add(estacionPrueba);
		estacionPrueba.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
					cuadroResultados.setText("Hola mundo");
					
			}
		} );

	}	
}
