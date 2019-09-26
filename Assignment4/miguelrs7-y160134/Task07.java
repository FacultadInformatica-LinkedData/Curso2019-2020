package upm.oeg.wsld.jena;

import java.io.InputStream;

import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.InfModel;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.util.FileManager;
import org.apache.jena.util.iterator.ExtendedIterator;
import org.apache.jena.vocabulary.RDFS;
import org.apache.jena.vocabulary.VCARD;

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
		OntModel model = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM);

		// Use the FileManager to find the input file
		InputStream in = FileManager.get().open(filename);

		if (in == null)
			throw new IllegalArgumentException("File: "+filename+" not found");

		// Read the RDF/XML file
		model.read(in, null);


		// ** TASK 7.1: List all individuals of "Person" **
		OntClass person = model.getOntClass(ns+"Person");
		ExtendedIterator instances = person.listInstances();

		while (instances.hasNext())
		{
			Individual inst = (Individual) instances.next();
			System.out.println("Instance of Person: "+inst.getURI());
		}

		// ** TASK 7.2: List all subclasses of "Person" **
		ExtendedIterator subclasses = person.listSubClasses();

		while (subclasses.hasNext())
		{
			OntClass subclass = (OntClass) subclasses.next();
			System.out.println("Subclass of Person: "+subclass.getURI());
		}



		// ** TASK 7.3: Make the necessary changes to get as well indirect instances and subclasses. TIP: you need some inference... **


		//Creamos un nuevo modelo, esta vez activando la inferencia
		OntModel modelInferencia = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM_RDFS_INF);

		//Leemos el fichero de ejemplo otra vez
		InputStream inInferencia = FileManager.get().open(filename);

		if (inInferencia == null)
			throw new IllegalArgumentException("File: "+filename+" not found");

		//Creamos un modelo nuevo con los datos del fichero
		modelInferencia.read(inInferencia, null);

		//Recogemos el recurso Person
		OntClass personInf = modelInferencia.getOntClass(ns+"Person");
		
		//Preguntamos por las instancias de Person
		ExtendedIterator instancesInf = personInf.listInstances();

		while (instancesInf.hasNext())
		{
			Individual instInf = (Individual) instancesInf.next();
			System.out.println("Instancias inferidas de Person: "+instInf.getURI());
		}

		//Preguntamos por las subclases de Person
		ExtendedIterator subclassesInf = personInf.listSubClasses();

		while (subclassesInf.hasNext())
		{
			OntClass subclassInf = (OntClass) subclassesInf.next();
			System.out.println("Subclases inferidas de Person: "+subclassInf.getURI());
		}


	}
}
