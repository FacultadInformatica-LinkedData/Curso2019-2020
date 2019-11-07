import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JScrollPane;
import javax.swing.JButton;

public class Resultado extends JFrame {

	private JPanel contentPane;
	public static String nombre;
	public static String distrito;
	public static String barrio;
	public static String calle;
	public static String cp;
	public static int num;
	public static Resultado frame;
	public static ArrayList<Site> lista;
	private JLabel lblRegistro;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					frame = new Resultado();
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
	public Resultado() {
		setTitle("Resultados");
		int alt = 60+40*(num+1);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(500, 100, 500, alt);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		lblRegistro = new JLabel("RESULTADOS:    "+num);
		contentPane.add(lblRegistro, BorderLayout.CENTER);
		lblRegistro.setBounds(169,20,200,20);
		
		Iterator<Site> it = lista.iterator();
		if(num >= 1) {
			Site aux = it.next();
			JLabel label = new JLabel(aux.nombre);
			label.setBounds(25, 60, 300, 14);
			contentPane.add(label);
			
			JButton btnSelect = new JButton("Select");
			btnSelect.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect.setBounds(360, 60, 89, 23);
			contentPane.add(btnSelect);
		} if(num >= 2) {
			Site aux = it.next();
			JLabel label1 = new JLabel(aux.nombre);
			label1.setBounds(25, 100, 300, 14);
			contentPane.add(label1);
			
			JButton btnSelect1 = new JButton("Select");
			btnSelect1.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect1.setBounds(360, 100, 89, 23);
			contentPane.add(btnSelect1);
		} if(num >= 3) {
			Site aux = it.next();
			JLabel label2 = new JLabel(aux.nombre);
			label2.setBounds(25, 140, 300, 14);
			contentPane.add(label2);

			JButton btnSelect2 = new JButton("Select");
			btnSelect2.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect2.setBounds(360, 140, 89, 23);
			contentPane.add(btnSelect2);
		} if(num >= 4) {
			Site aux = it.next();
			JLabel label3 = new JLabel(aux.nombre);
			label3.setBounds(25, 180, 300, 14);
			contentPane.add(label3);

			JButton btnSelect3 = new JButton("Select");
			btnSelect3.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect3.setBounds(360, 180, 89, 23);
			contentPane.add(btnSelect3);
		} if(num >= 5) {
			Site aux = it.next();
			JLabel label4 = new JLabel(aux.nombre);
			label4.setBounds(25, 220, 300, 14);
			contentPane.add(label4);

			JButton btnSelect4 = new JButton("Select");
			btnSelect4.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect4.setBounds(360, 220, 89, 23);
			contentPane.add(btnSelect4);
		} if(num >= 6) {
			Site aux = it.next();
			JLabel label5 = new JLabel(aux.nombre);
			label5.setBounds(25, 260, 300, 14);
			contentPane.add(label5);

			JButton btnSelect5 = new JButton("Select");
			btnSelect5.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect5.setBounds(360, 260, 89, 23);
			contentPane.add(btnSelect5);
		} if(num >= 7) {
			Site aux = it.next();
			JLabel label6 = new JLabel(aux.nombre);
			label6.setBounds(25, 300, 300, 14);
			contentPane.add(label6);

			JButton btnSelect6 = new JButton("Select");
			btnSelect6.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect6.setBounds(360, 300, 89, 23);
			contentPane.add(btnSelect6);
		} if(num >= 8) {
			Site aux = it.next();
			JLabel label7 = new JLabel(aux.nombre);
			label7.setBounds(25, 340, 300, 14);
			contentPane.add(label7);

			JButton btnSelect7 = new JButton("Select");
			btnSelect7.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect7.setBounds(360, 340, 89, 23);
			contentPane.add(btnSelect7);
		} if(num >= 9) {
			Site aux = it.next();
			JLabel label8 = new JLabel(aux.nombre);
			label8.setBounds(25, 380, 300, 14);
			contentPane.add(label8);

			JButton btnSelect8 = new JButton("Select");
			btnSelect8.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect8.setBounds(360, 380, 89, 23);
			contentPane.add(btnSelect8);
		} if(num >= 10) {
			Site aux = it.next();
			JLabel label9 = new JLabel(aux.nombre);
			label9.setBounds(25, 420, 300, 14);
			contentPane.add(label9);

			JButton btnSelect9 = new JButton("Select");
			btnSelect9.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelect9.setBounds(360, 420, 89, 23);
			contentPane.add(btnSelect9);
		} if(num >= 11) {
			Site aux = it.next();
			JLabel labe0l = new JLabel(aux.nombre);
			labe0l.setBounds(25, 460, 300, 14);
			contentPane.add(labe0l);

			JButton btnSelec0t = new JButton("Select");
			btnSelec0t.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelec0t.setBounds(360, 460, 89, 23);
			contentPane.add(btnSelec0t);
		} if(num >= 12) {
			Site aux = it.next();
			JLabel labe1l = new JLabel(aux.nombre);
			labe1l.setBounds(25, 500, 300, 14);
			contentPane.add(labe1l);

			JButton btnSelec1t = new JButton("Select");
			btnSelec1t.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelec1t.setBounds(360, 500, 89, 23);
			contentPane.add(btnSelec1t);
		} if(num >= 13) {
			Site aux = it.next();
			JLabel labe2l = new JLabel(aux.nombre);
			labe2l.setBounds(25, 540, 300, 14);
			contentPane.add(labe2l);

			JButton btnSelec2t = new JButton("Select");
			btnSelec2t.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelec2t.setBounds(360, 540, 89, 23);
			contentPane.add(btnSelec2t);
		} if(num >= 14) {
			Site aux = it.next();
			JLabel labe3l = new JLabel(aux.nombre);
			labe3l.setBounds(25, 580, 300, 14);
			contentPane.add(labe3l);

			JButton btnSelec3t = new JButton("Select");
			btnSelec3t.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelec3t.setBounds(360, 580, 89, 23);
			contentPane.add(btnSelec3t);
		} if(num >= 15) {
			Site aux = it.next();
			JLabel labe4l = new JLabel(aux.nombre);
			labe4l.setBounds(25, 620, 300, 14);
			contentPane.add(labe4l);

			JButton btnSelec4t = new JButton("Select");
			btnSelec4t.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelec4t.setBounds(360, 620, 89, 23);
			contentPane.add(btnSelec4t);
		} if(num >= 16) {
			Site aux = it.next();
			JLabel labe5l = new JLabel(aux.nombre);
			labe5l.setBounds(25, 660, 300, 14);
			contentPane.add(labe5l);

			JButton btnSelec5t = new JButton("Select");
			btnSelec5t.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelec5t.setBounds(360, 660, 89, 23);
			contentPane.add(btnSelec5t);
		} if(num >= 17) {
			Site aux = it.next();
			JLabel labe6l = new JLabel(aux.nombre);
			labe6l.setBounds(25, 700, 300, 14);
			contentPane.add(labe6l);

			JButton btnSelec6t = new JButton("Select");
			btnSelec6t.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					Seleccion.sitio = aux;frame.setVisible(false);Seleccion.main(null);
				}
			});
			btnSelec6t.setBounds(360, 700, 89, 23);
			contentPane.add(btnSelec6t);
		}
		
		JButton btnVolver = new JButton("Volver");
		btnVolver.setBounds(404, 11, 70, 29);
		btnVolver.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				frame.setVisible(false);
				Buscador.main(null);
			}
		});
		contentPane.add(btnVolver);
	}
}
