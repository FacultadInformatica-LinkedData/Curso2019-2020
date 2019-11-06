/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

         if (request.getParameter("datein") != null) {
            dateIn = request.getParameter("datein");
        }
        if (request.getParameter("dateout") != null) {
            dateOut = request.getParameter("dateout");
        }
        
        
        
       String type[] = null;
       String audience[]=null;
       
         if (request.getParameterValues("Tipo") != null) {
            type = request.getParameterValues("Tipo");
        }
          if (request.getParameterValues("Audiencia") != null) {
            audience = request.getParameterValues("Audiencia");
        }
 
          
        //QUERY PARA OBTENER LOS TIPOS DE EVENTOS
        
        String Tipo[] = {"Cultura", "Deporte", "Juegos"};
    
        request.setAttribute("Tipo", Tipo);
        
       //QUERY PARA OBTENER LOS TIPOS DE AUDIENCIA
        String Audiencia[] = {"Niños", "Familia", "Otros"};
        
        request.setAttribute("Audiencia", Audiencia);
        
        //AQUI QUERY PARA OBTENER LOS EVENTOS
        String Eventos[] = {"Niños", "Familia", "Otros"};
        
        
        request.setAttribute("Eventos", Eventos);
 
        
        
        
        request.setAttribute("datein", dateIn);
        request.setAttribute("dateout", dateOut);

        
        
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
