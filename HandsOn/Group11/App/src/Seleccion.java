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
		setTitle("Full Station");
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

		JLabel lblHola = new JLabel(sitio.getRotulo() + " - " + sitio.getDireccion());
		lblHola.setBounds(25, 18, 450, 14);
		contentPane.add(lblHola);

		JButton btnNewButton = new JButton();
		ImageIcon map = new ImageIcon(getClass().getResource("/icons/map.png"));
		btnNewButton.setIcon(map);
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				openWebPage(sitio.getCoord());
			}
		});
		btnNewButton.setBounds(430, 60, 30, 30);
		contentPane.add(btnNewButton);

		if(!sitio.getDedicatoriaWikiData().equals("")){
			JButton button = new JButton();
			ImageIcon site = new ImageIcon(getClass().getResource("/icons/wikidata.png"));
			button.setIcon(site);
			button.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					openWebPage(sitio.getDedicatoriaWikiData());
				}
			});
			button.setBounds(430, 98, 30, 30);
			contentPane.add(button);
		}

		JLabel lblHorario = new JLabel("Horario:");
		lblHorario.setBounds(25, 45, 100, 14);
		contentPane.add(lblHorario);

		JLabel lblHorario2 = new JLabel(sitio.getHorario());
		lblHorario2.setBounds(175, 45, 450, 14);
		contentPane.add(lblHorario2);

		JLabel lblDireccion = new JLabel("Direccion:");
		lblDireccion.setBounds(25, 70, 100, 14);
		contentPane.add(lblDireccion);

		JLabel lblDireccion2 = new JLabel(sitio.getDireccion());
		lblDireccion2.setBounds(175, 70, 450, 14);
		contentPane.add(lblDireccion2);

		JLabel lblDedicatoria = new JLabel("Dedicatoria:");
		lblDedicatoria.setBounds(25, 95, 100, 14);
		contentPane.add(lblDedicatoria);

		JLabel lblDedicatoria2;
		if(sitio.getDedicatoria().equals("")) lblDedicatoria2 = new JLabel("No disponible.");
		else lblDedicatoria2 = new JLabel(sitio.getDedicatoria());
		lblDedicatoria2.setBounds(175, 95, 450, 14);
		contentPane.add(lblDedicatoria2);

		JLabel lblCP = new JLabel("Codigo Postal:");
		lblCP.setBounds(25, 120, 100, 14);
		contentPane.add(lblCP);

		JLabel lblCp = new JLabel(sitio.getCP());
		lblCp.setBounds(175, 120, 450, 14);
		contentPane.add(lblCp);

		JLabel lblPrecioA = new JLabel("Precio gasoleo A:");
		lblPrecioA.setBounds(25, 145, 150, 14);
		contentPane.add(lblPrecioA);

		JLabel lblPrecioA2;
		if(sitio.getPrecioA().equals("")) lblPrecioA2 = new JLabel("No disponible.");
		else lblPrecioA2 = new JLabel(sitio.getPrecioA() + " Eur/l");
		lblPrecioA2.setBounds(175, 145, 450, 14);
		contentPane.add(lblPrecioA2);

		JLabel lblPrecio95 = new JLabel("Precio gasolina 95:");
		lblPrecio95.setBounds(25, 170, 150, 14);
		contentPane.add(lblPrecio95);

		JLabel lblPrecio952;
		if(sitio.getPrecio95().equals("")) lblPrecio952 = new JLabel("No disponible.");
		else lblPrecio952 = new JLabel(sitio.getPrecio95() + " Eur/l");
		lblPrecio952.setBounds(175, 170, 450, 14);
		contentPane.add(lblPrecio952);

		JLabel lblPrecio98 = new JLabel("Precio gasolina 98:");
		lblPrecio98.setBounds(25, 195, 150, 14);
		contentPane.add(lblPrecio98);

		JLabel lblPrecio982;
		if(sitio.getPrecio98().equals("")) lblPrecio982 = new JLabel("No disponible.");
		else lblPrecio982 = new JLabel(sitio.getPrecio98() + " Eur/l");
		lblPrecio982.setBounds(175, 195, 450, 14);
		contentPane.add(lblPrecio982);

		JLabel lblPrecioNA = new JLabel("Precio nuevo gasoleo A:");
		lblPrecioNA.setBounds(25, 220, 150, 14);
		contentPane.add(lblPrecioNA);

		JLabel lblPrecioNA2;
		if(sitio.getPrecioNA().equals("")) lblPrecioNA2 = new JLabel("No disponible.");
		else lblPrecioNA2 = new JLabel(sitio.getPrecioNA() + " Eur/l");
		lblPrecioNA2.setBounds(175, 220, 450, 14);
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
