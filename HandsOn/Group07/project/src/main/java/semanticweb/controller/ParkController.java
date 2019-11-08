package semanticweb.controller;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import semanticweb.model.resources.JenaRequest;
import semanticweb.model.resources.Park;

/**
 * Servlet implementation class ParkController
 */
public class ParkController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(ParkController.class.getName());
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ParkController() {
        super();
        // TODO Auto-generated constructor stub
    }
    
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String p1 = request.getParameter("lat");
		String p2 = request.getParameter("lon");

		log.log(Level.FINE, "Searching for Park" + p1 + p2);
		
		Park park = JenaRequest.ParkRequest(p1, p2);

		RequestDispatcher rd = request.getRequestDispatcher("/park.jsp");;

		request.setAttribute("description", park.getDescription());
		request.setAttribute("name", park.getName());
		request.setAttribute("transport", park.getTransport());
		request.setAttribute("imgDis", park.getImageDis());
		request.setAttribute("nameDis", park.getNameDis());
		request.setAttribute("trees", park.getTrees());

		rd.forward(request, response);
		
	
	}
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
}
