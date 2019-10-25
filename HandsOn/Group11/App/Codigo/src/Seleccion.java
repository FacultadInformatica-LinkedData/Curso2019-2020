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
		setTitle(sitio.getRotulo());
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

		JLabel lblHola = new JLabel(sitio.getRotulo());
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

		JLabel lblHorario = new JLabel("Horario:");
		lblHorario.setBounds(21, 45, 46, 14);
		contentPane.add(lblHorario);

		JLabel lblHorario2 = new JLabel(sitio.getHorario());
		lblHorario2.setBounds(79, 45, 450, 14);
		contentPane.add(lblHorario2);

		JLabel lblDireccion = new JLabel("Direccion:");
		lblDireccion.setBounds(21, 70, 46, 14);
		contentPane.add(lblDireccion);

		JLabel lblDireccion2 = new JLabel(sitio.getDireccion());
		lblDireccion2.setBounds(79, 70, 450, 14);
		contentPane.add(lblDireccion2);

		JLabel lblCP = new JLabel("Codigo Postal:");
		lblCP.setBounds(21, 95, 46, 14);
		contentPane.add(lblCP);

		JLabel lblCp = new JLabel(sitio.getCP());
		lblCp.setBounds(108, 95, 450, 14);
		contentPane.add(lblCp);

		JLabel lblPrecioA = new JLabel("Precio gasoleo A:");
		lblPrecioA.setBounds(21, 120, 46, 14);
		contentPane.add(lblPrecioA);

		JLabel lblPrecioA2;
		if(sitio.getPrecioA().equals("")) lblPrecioA2 = new JLabel("No disponible.");
		else lblPrecioA2 = new JLabel(sitio.getPrecioA());
		lblPrecioA2.setBounds(63, 120, 450, 14);
		contentPane.add(lblPrecioA2);

		JLabel lblPrecio95 = new JLabel("Precio gasolina 95 protección:");
		lblPrecio95.setBounds(21, 145, 46, 14);
		contentPane.add(lblPrecio95);

		JLabel lblPrecio952;
		if(sitio.getPrecio95().equals("")) lblPrecio952 = new JLabel("No disponible.");
		else lblPrecio952 = new JLabel(sitio.getPrecio95());
		lblPrecio952.setBounds(79, 145, 450, 14);
		contentPane.add(lblPrecio952);

		JLabel lblPrecio98 = new JLabel("Precio gasolina 98:");
		lblPrecio98.setBounds(21, 170, 46, 14);
		contentPane.add(lblPrecio98);

		JLabel lblPrecio982;
		if(sitio.getPrecio98().equals("")) lblPrecio982 = new JLabel("No disponible.");
		else lblPrecio982 = new JLabel(sitio.getPrecio98());
		lblPrecio982.setBounds(79, 170, 450, 14);
		contentPane.add(lblPrecio982);

		JLabel lblPrecioNA = new JLabel("Precio nuevo gasoleo A:");
		lblPrecioNA.setBounds(21, 195, 46, 14);
		contentPane.add(lblPrecioNA);

		JLabel lblPrecioNA2;
		if(sitio.getPrecioNA().equals("")) lblPrecioNA2 = new JLabel("No disponible.");
		else lblPrecioNA2 = new JLabel(sitio.getPrecioNA());
		lblPrecioNA2.setBounds(79, 195, 450, 14);
		contentPane.add(lblPrecioNA2);

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
