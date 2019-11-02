package semanticweb.model.resources;

import java.io.InputStream;

import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;
import org.apache.jena.util.iterator.ExtendedIterator;

public class JenaRequest {
    private static String ns = "http://www.semanticweb.org/grupo07/ontologies#";
    public static String topo = "http://data.ign.fr/def/topo#";
    private static String rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    private static String owl = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    private static String xsd = "http://www.w3.org/2001/XMLSchema#";
    private static String rdfs = "http://www.w3.org/2000/01/rdf-schema#";
    private static String stringTypeURI = "http://www.w3.org/2001/XMLSchema#string";
    private static String schema = "http://schema.org/";
    private static String lat=  "<http://www.semanticweb.org/grupo07/ontologies/property#hasLatitude>";
    private static String lon= "<http://www.semanticweb.org/grupo07/ontologies/property#hasLongitud>";
    private static  OntModel model = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM_RDFS_INF);


    public static void main(String[] args) {
        String filename = "/home/javier/universidad/4º curso/semantic_web_and_linked_data/curso2019-2020/Curso2019-2020/HandsOn/Group07/project-template/src/main/java/semanticweb/model/resources/parques-jardines-with-links.ttl";
        OntModel model = ModelFactory.createOntologyModel(OntModelSpec.RDFS_MEM_RDFS_INF);
        InputStream in = FileManager.get().open(filename);
        if (in == null)
            throw new IllegalArgumentException("File: "+filename+" not found");

        model.read(in, null);
        OntClass parkclass = model.getOntClass(ns+"Park");
        ExtendedIterator parkInstances = parkclass.listInstances();

        int i=0;
        while (parkInstances.hasNext())
        {
            Individual instance = (Individual) parkInstances.next();
            System.out.println("Instance of Person "+ ++i +": "+instance.getURI());
        }
    }
}
