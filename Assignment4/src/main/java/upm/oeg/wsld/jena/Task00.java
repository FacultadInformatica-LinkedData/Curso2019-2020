package upm.oeg.wsld.jena;

import java.io.InputStream;

import org.apache.jena.rdf.model.*;
import org.apache.jena.util.FileManager;
import org.apache.jena.vocabulary.VCARD;

/**
 * Task 00: Testing Jena
 * 
 * This app is designed as an small test to check that Jena
 * is working properly. It add one triple to a model and prints
 * it. It then uses an iterator to retrieve a literal ("Hola Mundo!)
 * and prints it on the screen.
 * 
 * @author elozano
 * @author isantana
 * 
 */
public class Task00
{
	/**
	 * 
	 * @param args
	 */
	public static void main(String args[])
	{
		
		// Create an empty model
		Model model = ModelFactory.createDefaultModel(); //crea un grafo vacio para trabajar
		
		//create an statement
		Resource app = model.createResource("http://example.org/App/this"); //recurso llama al sujeto (uri del sujeto)
		Property says = model.createProperty("http://example.org/App/says");//uri que generalmente es el predicado
		RDFNode hm = model.createLiteral("Hola Mundo!"); //creame un literal
		//Add the statement to the model
		model.add(app,says, hm); //aniademe la tripleta bien formada a mi grafo
		
		// Write it to standard out
		model.write(System.out, "N-QUADS"); //formato en el que quieres mostrarlo...
		
		//List all the objects of a property
		NodeIterator it = model.listObjectsOfProperty(says);
		
		while (it.hasNext())
		{
		    RDFNode node = it.nextNode();
		    System.out.println(node.toString());
		}
		
		//This should print the following: 
		//    <http://example.org/App/this> <http://example.org/App/says> "Hola Mundo!" .
		//    Hola Mundo!
		
		
	}
}
