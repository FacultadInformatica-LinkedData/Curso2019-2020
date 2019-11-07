import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JTextPane;

public class Seleccion extends JFrame {

	private JPanel contentPane;
	public static Site sitio;
	public static Seleccion frame;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					frame = new Seleccion();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 * @throws IOException 
	 */
	public Seleccion() throws IOException {
		setTitle(sitio.getNombre());
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(500, 100, 500, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);

		JButton btnVolver = new JButton("Volver");
		btnVolver.setBounds(404, 11, 70, 29);
		btnVolver.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				frame.setVisible(false);
				Resultado.main(null);
			}
		});
		contentPane.add(btnVolver);

		JLabel lblHola = new JLabel(sitio.getNombre());
		lblHola.setBounds(21, 18, 373, 14);
		contentPane.add(lblHola);

		JButton btnNewButton = new JButton();
		ImageIcon map = new ImageIcon(getClass().getResource("/icons/map.png"));
		btnNewButton.setIcon(map);
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				openWebPage(sitio.getCoord());
			}
		});
		btnNewButton.setBounds(435, 60, 27, 27);
		contentPane.add(btnNewButton);

		JButton button = new JButton();
		ImageIcon site = new ImageIcon(getClass().getResource("/icons/site.png"));
		button.setIcon(site);
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				openWebPage(sitio.getContent());
			}
		});
		button.setBounds(435, 98, 27, 27);
		contentPane.add(button);

		JButton button_1 = new JButton();
		ImageIcon webD = new ImageIcon(getClass().getResource("/icons/webD.png"));
		button_1.setIcon(webD);
		button_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				openWebPage(sitio.getDistritoURL());
			}
		});
		button_1.setBounds(435, 136, 27, 27);
		contentPane.add(button_1);

		if(!sitio.getNombre().equals("Centro Sociocultural Rafael de Leon ")) {
			JButton button_2 = new JButton();
			ImageIcon webB = new ImageIcon(getClass().getResource("/icons/webB.png"));
			button_2.setIcon(webB);
			button_2.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					openWebPage(sitio.getBarrioURL());
				}
			});
			button_2.setBounds(435, 174, 27, 27);
			contentPane.add(button_2);
		}

		JLabel lblTipo = new JLabel("Tipo:");
		lblTipo.setBounds(21, 46, 46, 14);
		contentPane.add(lblTipo);

		JLabel lblTipo1 = new JLabel(sitio.getTipo());
		lblTipo1.setBounds(79, 46, 319, 14);
		contentPane.add(lblTipo1);

		JLabel lblDistrito = new JLabel("Distrito:");
		lblDistrito.setBounds(21, 80, 46, 14);
		contentPane.add(lblDistrito);

		JLabel lblBarrio = new JLabel("Barrio:");
		lblBarrio.setBounds(21, 105, 46, 14);
		contentPane.add(lblBarrio);

		JLabel lblEmail = new JLabel("Email:");
		lblEmail.setBounds(21, 190, 46, 14);
		contentPane.add(lblEmail);

		JLabel lblEmail1;
		if(sitio.getEmail().equals("")) lblEmail1 = new JLabel("No se proporciona.");
		else lblEmail1 = new JLabel(sitio.getEmail());
		lblEmail1.setBounds(63, 190, 364, 14);
		contentPane.add(lblEmail1);

		JLabel lblTelfono = new JLabel("Teléfono:");
		lblTelfono.setBounds(21, 220, 60, 14);
		contentPane.add(lblTelfono);

		JLabel lblTelefono = new JLabel(sitio.getTelefono());
		lblTelefono.setBounds(79, 220, 373, 14);
		contentPane.add(lblTelefono);

		JLabel lblCalle = new JLabel("Calle: ");
		lblCalle.setBounds(21, 130, 46, 14);
		contentPane.add(lblCalle);

		JLabel lblCalle_1 = new JLabel(sitio.getCalle());
		lblCalle_1.setBounds(63, 130, 217, 14);
		contentPane.add(lblCalle_1);

		JLabel lblBarrio_1 = new JLabel(sitio.getBarrio());
		lblBarrio_1.setBounds(74, 105, 286, 14);
		contentPane.add(lblBarrio_1);

		JLabel lblDistrito_1 = new JLabel(sitio.getDistrito());
		lblDistrito_1.setBounds(79, 80, 301, 14);
		contentPane.add(lblDistrito_1);

		JLabel lblCodigoPostal = new JLabel("Código Postal: ");
		lblCodigoPostal.setBounds(21, 155, 85, 14);
		contentPane.add(lblCodigoPostal);

		JLabel lblCp = new JLabel(sitio.getCP());
		lblCp.setBounds(108, 155, 333, 14);
		contentPane.add(lblCp);
	}

	public void openWebPage(String url){
		try {         
			java.awt.Desktop.getDesktop().browse(java.net.URI.create(url));
		}
		catch (java.io.IOException e) {
			System.out.println(e.getMessage());
		}
	}
}
