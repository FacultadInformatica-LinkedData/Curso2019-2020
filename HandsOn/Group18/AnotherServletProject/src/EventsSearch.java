/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.*;

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
        response.sendRedirect("home.jsp");  
        
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
        response.sendRedirect("home.jsp");  
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
        
        String dateIn = (String) request.getParameter("datein");
        String dateOut = (String) request.getParameter("dateout");
        request.setAttribute("datein", dateIn);
        request.setAttribute("dateout", dateOut);
        
        
        
        //Obtener todos los tipos de evento
        String Etypes[] = {"Cultura","Deporte","Juegos"};
        request.setAttribute("Etypes", Etypes);
        //Obtener todos los tipos de auiencia
        String Atypes[] = {"Niños","Familia","Otros"};
        request.setAttribute("Atypes", Atypes);

        
        //////////////////////////////////////////////////////////////
        
        File file = null;
        if (System.getProperty("catalina.base") != null)
            file = new File(System.getProperty("catalina.base") + "/agenda-eventos-madrid-with-links.ttl");
        else
            throw new RuntimeException("Catalina.base doesn't exists.");
        FileInputStream fis = new FileInputStream(file);
     

        
        Model model = ModelFactory.createDefaultModel();
  

        model.read(System.getProperty("catalina.base") + "/agenda-eventos-madrid-with-links.ttl");
        
        
        String queryString =
                "SELECT ?Event ?Latitude ?Longitude ?Title ?Installation\n "+
                        "WHERE { ?Event a <http://group18.org/hands-on/ontology#Event> . " +
                        "?Event <http://group18.org/hands-on/ontology#hasTitle> ?Title . " +
                        "?Event <http://group18.org/hands-on/ontology#hasInstallation> ?Installation . " +
                        "?Installation <http://group18.org/hands-on/ontology#hasLongitude> ?Longitude . " +
                        "?Installation <http://group18.org/hands-on/ontology#hasLatitude> ?Latitude}LIMIT 5 ";
        
        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, model) ;
        ResultSet results = qexec.execSelect() ;
        LinkedList <String>titles = new LinkedList<String>();
        LinkedList <String>latitudes = new LinkedList<String>();
        LinkedList <String>longitudes = new LinkedList<String>();
        while (results.hasNext())
        {
            QuerySolution binding = results.nextSolution();
            Resource Subject=binding.getResource("Event");
            Resource Installation=binding.getResource("Installation");
            longitudes.addLast(binding.getLiteral("Longitude").getString());
            latitudes.addLast(binding.getLiteral("Latitude").getString());
            titles.addLast(binding.getLiteral("Title").getString());
        }
        
        request.setAttribute("titles", titles);
        request.setAttribute("latitudes", latitudes);
        request.setAttribute("longitudes", longitudes);
        //////////////////////////////////////////////////////////////
       ///FOR MULTIPLE CHECKBOX
     //  String hobbise [] = request.getParameterValues(“hobbies“) ; 
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
