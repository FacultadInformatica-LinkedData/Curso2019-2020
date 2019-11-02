package semanticweb.model.resources;
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

public class JenaRequest {
    private static String ns = "http://www.semanticweb.org/grupo07/ontologies#";
    //public static String pwl ="http://www.semanticweb.org/pc/ontologies/2018/9#";
    public static String topo="http://data.ign.fr/def/topo#";
    private static String rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    private static String owl="http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    private static String xsd="http://www.w3.org/2001/XMLSchema#";
    private static String rdfs= "http://www.w3.org/2000/01/rdf-schema#";
    private static String stringTypeURI = "http://www.w3.org/2001/XMLSchema#string";
    private static String schema="http://schema.org/";
    private static Model model = ModelFactory.createDefaultModel();

    public static Park ParkRequest(String latitude, String longitude){

        String queryString =
                        "\"PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>\"+\n" +
                        "\"PREFIX latitude: <http://www.semanticweb.org/grupo07/ontologies/property#hasLatitude>\"\n" +
                        "\"PREFIX longitud: <http://www.semanticweb.org/grupo07/ontologies/property#hasLongitud>\"\n" +
                        "\"PREFIX nombre: <http://www.semanticweb.org/grupo07/ontologies/property#hasName>\"\n" +
                        "\"PREFIX descripcion: <http://www.semanticweb.org/grupo07/ontologies/property#hasDescription> \"\n" +
                        "\"PREFIX metro: <http://www.semanticweb.org/grupo07/ontologies/property#hasUnderground>\"\n" +
                        "\"PREFIX dbo: <http://dbpedia.org/ontology/>\" +\n" +
                        "                    \"SELECT ?name ?descripcion ?metro WHERE {\" +\n" +
                        "                    \"  ?s geo:lat ?lat .\" +\n" +
                        "                    \"  ?s geo:long ?long .\" +\n" +
                        "                    \"}\" ); ";
        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, model) ;
        ResultSet results = qexec.execSelect() ;
        Park park= new Park();
        park.setName(results.next().getLiteral("name").getString());
        park.setDescription(results.next().getLiteral("description").getString());
        park.setTransport(results.next().getLiteral("transport").getString());

        return  park;
    }
}
