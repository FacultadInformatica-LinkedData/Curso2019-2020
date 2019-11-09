package upm.oeg.wsld.jena;

import java.io.InputStream;

import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;
import org.apache.jena.util.iterator.ExtendedIterator;

/**
 * Task 07: Querying ontologies (RDFs)
 * @author elozano
 * @author isantana
 *
 */
public class Task07
{
	public static String ns = "http://somewhere#";
	
	public static void main(String args[])
	{
		String filename = "resources/example6.rdf";
		
		// Create an empty model
		OntModel model = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM_RDFS_INF);
		
		// Use the FileManager to find the input file
		InputStream in = FileManager.get().open(filename);
	
		if (in == null)
			throw new IllegalArgumentException("File: "+filename+" not found");
	
		// Read the RDF/XML file
		model.read(in, null);
			
		// ** TASK 7.1: List all individuals of "Person" **
		OntClass person = model.getOntClass(ns+"Person");
		ExtendedIterator instancesIt = person.listInstances();
		while (instancesIt.hasNext()){
			Individual ind = (Individual) instancesIt.next();
			System.out.println("Instance of Person: "+ind.getURI());
		}
		
		// ** TASK 7.2: List all subclasses of "Person" **
		ExtendedIterator subclassesIt = person.listSubClasses();	
		while (subclassesIt.hasNext()){
			OntClass subclass = (OntClass) subclassesIt.next();
			System.out.println("Subclass of Person: "+subclass.getURI());
		}
			
		// ** TASK 7.3: Make the necessary changes to get as well indirect instances and subclasses. TIP: you need some inference... **
		OntModel modelInf= ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM_RDFS_INF,model);
		OntClass personInf= modelInf.getOntClass(ns + "Person");
		ExtendedIterator intancesIt= personInf.listInstances();
		ExtendedIterator subclassesIt= personInf.listSubClasses();
		while (intancesIt.hasNext()){
			Individual ind= (Individual) intancesIt.next();
			System.out.println("Instance de: " + ind.getURI());
		}
		while (subclassesIt.hasNext()){
			OntClass subclass= (OntClass) subclassesIt.next();
			System.out.print("Subclases de: " + subclass.getURI());
		}
	}
}
