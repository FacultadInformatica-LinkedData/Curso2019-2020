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
	public static String ruta = "wifi.db";

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

	public static ArrayList<Site> sentencia(String nombre, String distrito, String barrio, String calle, String cp) {
		conectar(ruta);
		ResultSet res = null;
		Site s = null;
		ArrayList<Site> lista = new ArrayList<Site>();
		try {
			String sentencia = "select * from '216619-0-wifi-municipal-csv' where ";
			if(!nombre.equals("")) {
				sentencia += "nombre = '" + nombre + "'";
				if(!distrito.equals("") || !barrio.equals("") || !calle.equals("") || !cp.equals("")) sentencia += " and ";
			}
			if(!distrito.equals("")) { 
				sentencia += "distrito = '" + distrito + "'";
				if(!barrio.equals("") || !calle.equals("") || !cp.equals("")) sentencia += " and ";
			}
			if(!barrio.equals("")) {
				sentencia += "barrio = '" + barrio + "'";
				if(!calle.equals("") || !cp.equals("")) sentencia += " and ";
			}
			if(!calle.equals("")) {
				sentencia += "`nombre-via` = '" + calle + "'";
				if(!cp.equals("")) sentencia += " and ";
			}
			if(!cp.equals("")) sentencia += "`codigo-postal` = '" + cp + "'";
			PreparedStatement st = conn.prepareStatement(sentencia);
			res = st.executeQuery();
			int cont = 0;
			while(res.next()) {
				cont++;
				String coord = "https://www.google.es/maps/search/"+res.getString("latitud") + "," + res.getString("longitud")+"?ved=2ahUKEwjX3Y7H0YbfAhUTW8AKHWLLDzIQ8gEwAHoECAAQAQ";
				s = new Site(res.getString("nombre"),res.getString("descripcion-entidad"),res.getString("horario"),res.getString("equipamiento"),
						res.getString("transporte"),res.getString("descripcion"),res.getString("content-url"),res.getString("clase-vial") + " " + res.getString("nombre-via") + " " + res.getString("num"),
						res.getString("codigo-postal"),res.getString("barrio"),res.getString("barriouridewikidata"),res.getString("distrito"),
						res.getString("distritouridewikidata"),coord,res.getString("telefono"),
						res.getString("email"),res.getString("tipo"));
				lista.add(s);
			}
			close();
		} catch (SQLException e) {
			System.err.println("mostrarUsuarios(): "+e.getMessage());
		}		
		return lista;
	}
}
