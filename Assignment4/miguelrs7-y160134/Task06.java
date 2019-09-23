package upm.oeg.wsld.jena;

import java.io.InputStream;

import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Property;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.rdf.model.Statement;
import org.apache.jena.util.FileManager;
import org.apache.jena.vocabulary.RDF;
import org.apache.jena.vocabulary.RDFS;
import org.apache.jena.vocabulary.VCARD;

/**
 * Task 06: Modifying ontologies (RDFs)
 * @author elozano
 * @author isantana
 *
 */
public class Task06
{
	public static String ns = "http://somewhere#";
	public static String foafNS = "http://xmlns.com/foaf/0.1/";
	public static String foafEmailURI = foafNS+"email";
	public static String foafKnowsURI = foafNS+"knows";
	public static String stringTypeURI = "http://www.w3.org/2001/XMLSchema#string";
	
	public static void main(String args[])
	{
		String filename = "resources/example5.rdf";
		
		// Create an empty model
		OntModel model = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM);
		
		// Use the FileManager to find the input file
		InputStream in = FileManager.get().open(filename);
	
		if (in == null)
			throw new IllegalArgumentException("File: "+filename+" not found");
	
		// Read the RDF/XML file
		model.read(in, null);
		
		// Create a new class named "Researcher"
		OntClass researcher = model.createClass(ns+"Researcher");
		
		// ** TASK 6.1: Create a new class named "University" **
		OntClass university = model.createClass(ns+"University");
		
		// ** TASK 6.2: Add "Researcher" as a subclass of "Person" **
		model.add(researcher,RDFS.subClassOf,ns+"Person");
		
		// ** TASK 6.3: Create a new property named "worksIn" **
		Property worksIn = model.createProperty("worksIn");
		
		// ** TASK 6.4: Create a new individual of Researcher named "Jane Smith" **
		Resource janeSmith = model.createResource(ns+"JaneSmith");
		model.add(janeSmith, RDF.type, researcher);
		
		// ** TASK 6.5: Add to the individual JaneSmith the fullName, given and family names **
		
		//No he usado el addLiteral porque me sale deprecated, así que lo he puesto como un statement que luego he añadido
		Statement sixFive= model.createLiteralStatement(janeSmith, VCARD.FN, "Jane Smith");
		model.add(sixFive);
		
		sixFive = model.createLiteralStatement(janeSmith,VCARD.Given,"Jane");
		model.add(sixFive);
		
		sixFive = model.createLiteralStatement(janeSmith,VCARD.Family,"Smith");
		model.add(sixFive);
		
		// ** TASK 6.6: Add UPM as the university where John Smith works **
		Resource upm = model.createResource(ns+"UPM");
		model.add(upm, RDF.type, university);
		
		Resource johnSmith = model.getResource(ns+"JohnSmith");
		model.add(johnSmith, worksIn, upm);
		
		model.write(System.out, "TURTLE");
	}
}
