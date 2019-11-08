package codigo;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Graphics;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

public class DataFrame extends JFrame {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					//					DataFrame frame = new DataFrame();
					//					frame.setVisible(true);

				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public DataFrame(String nombre) {
		iniciarComponentes(nombre);
		setVisible(true);
	}

	public void iniciarComponentes(String nombre){

		//ventana
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(450, 250, 600, 350);
		setTitle("Distrito de " + nombre);
		setMinimumSize(new Dimension(250,250));

		//panel
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(null);
		contentPane.setBackground(Color.WHITE);
		setContentPane(contentPane);

		//etiquetas de texto
		JLabel et1=new JLabel("Población: ");
		et1.setFont(new Font("arial",Font.PLAIN,20));
		et1.setBounds(70, 70, 100, 30);
		contentPane.add(et1);

		JLabel et2=new JLabel("Área: ");
		et2.setFont(new Font("arial",Font.PLAIN,20));
		et2.setBounds(70, 90, 100, 30);
		contentPane.add(et2);

		JLabel et3=new JLabel("Codigo Postal: ");
		et3.setFont(new Font("arial",Font.PLAIN,20));
		et3.setBounds(70, 110, 140, 30);
		contentPane.add(et3);
		
		JLabel et4=new JLabel("Nº de accidentes: ");
		et4.setFont(new Font("arial",Font.PLAIN,20));
		et4.setBounds(70, 130, 160, 30);
		contentPane.add(et4);
		
		JLabel et6=new JLabel("Nº accidentes por población: ");
		et6.setFont(new Font("arial",Font.PLAIN,20));
		et6.setBounds(70, 150, 300, 30);
		contentPane.add(et6);
	
	}

	public void escribirPoblacion(String poblacion){

		JLabel etPoblacion=new JLabel(poblacion);
		etPoblacion.setFont(new Font("arial",Font.PLAIN,20));
		etPoblacion.setBounds(170, 70, 100, 30);
		contentPane.add(etPoblacion);

	}

	public void escribirArea(String area){

		JLabel etArea=new JLabel(area);
		etArea.setFont(new Font("arial",Font.PLAIN,20));
		etArea.setBounds(170, 90, 200, 30);
		contentPane.add(etArea);

	}

	public void escribirCP(String cp){

		JLabel etCP=new JLabel(cp);
		etCP.setFont(new Font("arial",Font.PLAIN,20));
		etCP.setBounds(240, 110, 200, 30);
		contentPane.add(etCP);

	}
	
	public void escribirNAccidentes(int n_accidentes){
		JLabel etNAccidentes=new JLabel((String.valueOf(n_accidentes)));
		etNAccidentes.setFont(new Font("arial",Font.PLAIN,20));
		etNAccidentes.setBounds(230,130,90,30);
		contentPane.add(etNAccidentes);
		
	}
	
	public void calculoAP(double resultado_AP) {

		JLabel etAP=new JLabel(String.valueOf(resultado_AP));
		etAP.setFont(new Font("arial",Font.PLAIN,20));
		etAP.setBounds(340, 150, 1000, 30);
		contentPane.add(etAP);

	}
}
