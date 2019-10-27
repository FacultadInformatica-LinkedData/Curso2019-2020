import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Init {

	public static Connection conn;
	public static String ruta = "dataBase.db";

	public static void main(String args[]) {
		Buscador.main(null);
	}

	public static Connection conectar(String ruta) {
		try {
			Class.forName("org.sqlite.JDBC");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		try {
			conn = DriverManager.getConnection("jdbc:sqlite:"+ruta);
		} catch(SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	public static void close() {
		try {
			conn.close();
		} catch (SQLException e) {
			Logger.getLogger(Init.class.getName()).log(Level.SEVERE, null, e);
		}
	}

	public static ArrayList<Site> sentencia(String rotulo, String direccion, String cp) {
		conectar(ruta);
		ResultSet res = null;
		Site s = null;
		ArrayList<Site> lista = new ArrayList<Site>();
		try {
			String sentencia = "select * from 'Gasolineras_Alcobendas' where ";
			if(!rotulo.equals("")) {
				sentencia += "rotulo = '" + rotulo + "'";
				if(!direccion.equals("") || !cp.equals("")) sentencia += " and ";
			}
			if(!direccion.equals("")) {
				sentencia += "direccion = '" + direccion + "'";
				if(!cp.equals("")) sentencia += " and ";
			}
			if(!cp.equals("")) sentencia += "`cp` = '" + cp + "'";
			PreparedStatement st = conn.prepareStatement(sentencia);
			res = st.executeQuery();
			int cont = 0;
			while(res.next()) {
				cont++;
				String coord = "https://www.google.es/maps/search/"+res.getString("lat") + "," + res.getString("lon") + "?ved=2ahUKEwjX3Y7H0YbfAhUTW8AKHWLLDzIQ8gEwAHoECAAQAQ";
				s = new Site(res.getString("rotulo"),res.getString("horario"),res.getString("direccion"),res.getString("dedicatoria"),res.getString("dedicatoriawikidata"),
				res.getString("cp"),res.getString("precio_A"),res.getString("precio_95"),res.getString("precio_98"),res.getString("precio_NA"), coord);
				lista.add(s);
			}
			close();
		} catch (SQLException e) {
			System.err.println("mostrarUsuarios(): "+e.getMessage());
		}
		return lista;
	}
}
