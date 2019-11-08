/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.LinkedList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.jena.ontology.*;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Literal;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Property;
import org.apache.jena.rdf.model.RDFNode;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.rdf.model.Statement;
import org.apache.jena.rdf.model.StmtIterator;
import org.apache.jena.util.FileManager;
import org.apache.jena.vocabulary.VCARD;

/**
 *
 * @author monts
 */
@WebServlet(urlPatterns = {"/EventsSearch"})
public class EventsSearch extends HttpServlet {


	/**
	 * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
	 * methods.
	 *
	 * @param request servlet request
	 * @param response servlet response
	 * @throws ServletException if a servlet-specific error occurs
	 * @throws IOException if an I/O error occurs
	 */
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
	}

	// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
	/**
	 * Handles the HTTP <code>GET</code> method.
	 *
	 * @param request servlet request
	 * @param response servlet response
	 * @throws ServletException if a servlet-specific error occurs
	 * @throws IOException if an I/O error occurs
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	/**
	 * Handles the HTTP <code>POST</code> method.
	 *
	 * @param request servlet request
	 * @param response servlet response
	 * @throws ServletException if a servlet-specific error occurs
	 * @throws IOException if an I/O error occurs
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");

		//Obtener los filtros del request

		String dateIn = null;
		String dateOut = null;

		String dateFromQ = null;
		String dateToQ=null;

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date dateFrom = null;
		Date dateTo = null;


		if (request.getParameter("datein") != null) {
			dateIn = request.getParameter("datein");
			String parts[]=dateIn.split("/");
			if(parts.length>=3) {
				dateFromQ = parts[2] + "-" + parts[0] + "-" + parts[1];
				try {
					dateFrom = sdf.parse(dateFromQ);
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		if (request.getParameter("dateout") != null) {
			dateOut = request.getParameter("dateout");
			String parts[]=dateOut.split("/");
			if(parts.length>=3) {
				dateToQ = parts[2] + "-" + parts[0] + "-" + parts[1]; 
				try {
					dateTo = sdf.parse(dateToQ);
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}



		String type[] = null;
		String audience[]=null;
		String audienceString = "";
		String typeString = "";
		
		if (request.getParameterValues("type") != null) {
			type = request.getParameterValues("type");
			for(String s:type) {
				typeString = typeString + "," +s;
			}
		}
		if (request.getParameterValues("audience") != null) {
			audience = request.getParameterValues("audience");
			for(String s:audience) {
				audienceString = audienceString +"," +s;
			}
		}




		//QUERY PARA OBTENER LOS TIPOS DE EVENTOS

		String Tipo[] = {"ProgramacionDestacadaAgendaCultura", "CuentacuentosTiteresMarionetas", "CursosTalleres", "TeatroPerformance", "ConferenciasColoquios", "Exposiciones", "CineActividadesAudiovisuales", "DanzaBaile", "CircoMagia"};

		request.setAttribute("Tipo", Tipo);

		//QUERY PARA OBTENER LOS TIPOS DE AUDIENCIA
		String Audiencia[] = {"Niños", "Familias", "Mayores", "Mujeres","Discapacitados", "Jovenes"};

		request.setAttribute("Audiencia", Audiencia);

		//AQUI QUERY PARA OBTENER LOS EVENTOS
		String Eventos[] = {"Niños", "Familias", "Otros"};


		request.setAttribute("Eventos", Eventos);




		request.setAttribute("datein", dateIn);
		request.setAttribute("dateout", dateOut);

		File file = null;
		if (System.getProperty("catalina.base") != null)
			file = new File(System.getProperty("catalina.base") + "/agenda-eventos-madrid-with-links.ttl");
		else
			throw new RuntimeException("Catalina.base doesn't exists.");
		FileInputStream fis = new FileInputStream(file);



		Model model = ModelFactory.createDefaultModel();


		model.read(System.getProperty("catalina.base") + "/agenda-eventos-madrid-with-links.ttl");


		String queryString =
				"SELECT ?Event ?Latitude ?Longitude ?Date ?Audience ?Type ?Title ?Installation\n "+
						"WHERE { ?Event a <http://group18.org/hands-on/ontology#Event> . " +
						"?Event <http://group18.org/hands-on/ontology#hasTitle> ?Title . " +
						"?Event <http://group18.org/hands-on/ontology#hasInstallation> ?Installation . " +
						"?Installation <http://group18.org/hands-on/ontology#hasLongitude> ?Longitude . " +
						"?Installation <http://group18.org/hands-on/ontology#hasLatitude> ?Latitude . " +
						"?Event <http://group18.org/hands-on/ontology#hasDate> ?Date . ";
		if(type!=null)
			queryString = queryString + "?Event <http://group18.org/hands-on/ontology#hasType> \""+ type[0] +"\" . ";
		if(audience!=null)
			queryString = queryString + "?Event <http://group18.org/hands-on/ontology#hasAudience> \""+ audience[0] +"\" . ";
		queryString = queryString + "}";

		Query query = QueryFactory.create(queryString);
		QueryExecution qexec = QueryExecutionFactory.create(query, model) ;
		ResultSet results = qexec.execSelect() ;
		LinkedList <String>titles = new LinkedList<String>();
		LinkedList <String>latitudes = new LinkedList<String>();
		LinkedList <String>longitudes = new LinkedList<String>();
		while (results.hasNext())
		{
			QuerySolution binding = results.nextSolution();
			Literal Fecha=binding.getLiteral("Date");
			Date fechaComp = null;
			try {
				fechaComp = sdf.parse(Fecha.getString());
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			if(dateFromQ != null && dateToQ != null) {
				String aux = binding.getLiteral("Title").getString();
				if((fechaComp.compareTo(dateFrom)>=0) && (fechaComp.compareTo(dateTo)<=0) && !titles.contains(aux)){
					longitudes.addLast(binding.getLiteral("Longitude").getString());
					latitudes.addLast(binding.getLiteral("Latitude").getString());
					titles.addLast(aux);
					
				}
			}
			else {
				longitudes.addLast(binding.getLiteral("Longitude").getString());
				latitudes.addLast(binding.getLiteral("Latitude").getString());
				titles.addLast(binding.getLiteral("Title").getString());
			}
		}

		request.setAttribute("titles", titles);
		request.setAttribute("latitudes", latitudes);
		request.setAttribute("longitudes", longitudes);


		request.getRequestDispatcher("principalPage.jsp").forward(request, response);

	}

	/**
	 * Returns a short description of the servlet.
	 *
	 * @return a String containing servlet description
	 */
	@Override
	public String getServletInfo() {
		return "Short description";
	}// </editor-fold>

}