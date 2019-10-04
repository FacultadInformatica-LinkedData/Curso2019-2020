package upm.oeg.wsld.jena;

 import java.io.InputStream;

 import org.apache.jena.ontology.Individual;
 import org.apache.jena.ontology.OntClass;
 import org.apache.jena.ontology.OntModel;
 import org.apache.jena.ontology.OntModelSpec;
 import org.apache.jena.rdf.model.ModelFactory;
 import org.apache.jena.util.FileManager;
 import org.apache.jena.util.iterator.ExtendedIterator;


 import org.apache.jena.ontology.OntResource;
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
 		OntClass personclass = model.getOntClass(ns+"Person");
 		ExtendedIterator personInstances = personclass.listInstances();

 		int i=0;
 		while (personInstances.hasNext())
 		{
 			Individual instance = (Individual) personInstances.next();
 			System.out.println("Instance of Person "+ ++i +": "+instance.getURI());
 		}

 		// ** TASK 7.2: List all subclasses of "Person" **
 		ExtendedIterator personSubclasses = personclass.listSubClasses();
 		i=0;
 		while (personSubclasses.hasNext())
 		{
 			OntClass subclass = (OntClass) personSubclasses.next();
 			System.out.println("Subclass of Person "+ ++i +": "+subclass.getURI());
 		}




 		// ** TASK 7.3: Make the necessary changes to get as well indirect instances and subclasses. TIP: you need some inference... **

 		ExtendedIterator personIndInst = personclass.listInstances();
 		ExtendedIterator personIndSubClasses = personclass.listSubClasses();

 		System.out.println("Indirect instances:");
 		while (personIndInst.hasNext())
 		{
 			OntResource r = (OntResource) personIndInst.next();
 			System.out.println("\t" + r.getURI());
 		}

 		System.out.println("Indirect subclasses:");
 		while (personIndSubClasses.hasNext())
 		{
 			OntResource r = (OntResource) personIndSubClasses.next();
 			System.out.println("\t" + r.getURI());
 		}


 	}
 }

