package semanticweb.model.resources;

import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.util.FileManager;

import javax.security.auth.Subject;
import java.io.InputStream;
import java.util.ArrayList;

public class JenaRequest {

    public static Park ParkRequest(String latitude, String longitude) {

        String filePark = "src/main/java/semanticweb/model/resources/parques-jardines-with-links.ttl";
        Model modelPark = ModelFactory.createDefaultModel();
        InputStream inPark = FileManager.get().open(filePark);

        String fileTree = "src/main/java/semanticweb/model/resources/ArboladoParquesHistoricoSingularesForestales.ttl";
        Model modelTree = ModelFactory.createDefaultModel();
        InputStream inTree = FileManager.get().open(fileTree);

        if (inPark == null)
            throw new IllegalArgumentException("File: " + filePark + " not found");

        if (inTree == null)
            throw new IllegalArgumentException("File: " + fileTree + " not found");

        modelPark.read("src/main/java/semanticweb/model/resources/parques-jardines-with-links.ttl");
        modelTree.read("src/main/java/semanticweb/model/resources/ArboladoParquesHistoricoSingularesForestales.ttl");


        String queryString = "SELECT ?park ?name ?description ?bus ?under " +
                "WHERE { ?park a <http://www.semanticweb.org/grupo07/ontologies/class#Park> ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasName> ?name ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasDescription> ?description ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasBus> ?bus ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasUnderground> ?under ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLongitud> \"" + longitude + "\" ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLatitude> \"" + latitude + "\" }";

        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, modelPark);
        ResultSet results = qexec.execSelect();
        String name = "";
        String transport = "";
        String description = "";
        Resource Subject = null;

        while (results.hasNext()) {
            QuerySolution binding = results.nextSolution();
            Subject = binding.getResource("park");
            System.out.println("Parque " + Subject.getURI());
            name = binding.getLiteral("name").getString();
            transport = "BUS: " + binding.getLiteral("bus").getString() + "\n";
            transport += "METRO: " + binding.getLiteral("under").getString();
            description += binding.getLiteral("description").getString() + "\n";
        }
        ArrayList<String> trees = new ArrayList<>();
        ArrayList<Tree> parkTrees = new ArrayList<>();

        try {
            String queryTrees = "SELECT ?espcie ?uri " +
                    " WHERE {" +
                    " ?uri a <http://www.semanticweb.org/grupo07/ontologies/class#Park> ; " +
                    " <http://www.semanticweb.org/grupo07/ontologies/property#hasEspecie> ?espcie ;" +
                    "     FILTER (?uri = <" + Subject.getURI() + ">) }";
            Query queryTree = QueryFactory.create(queryTrees);
            QueryExecution qexecTree = QueryExecutionFactory.create(queryTree, modelTree);
            ResultSet result = qexecTree.execSelect();
            while (result.hasNext()) {
                QuerySolution binding = result.nextSolution();
                Subject = binding.getResource("espcie");
                trees.add(Subject.getURI());
            }
            for (String tree : trees) {
                String queryEscpecie = "SELECT ?especie ?sameas " +
                        " WHERE {" +
                        " ?especie a <http://www.semanticweb.org/grupo07/ontologies/class#Especie> ; " +
                        " <http://www.w3.org/2002/07/owl#sameAs> ?sameas ; " +
                        "     FILTER (?especie = <" + tree + ">) }";
                Query queryEspecie = QueryFactory.create(queryEscpecie);
                QueryExecution qexecEspecie = QueryExecutionFactory.create(queryEspecie, modelTree);
                ResultSet resultEspecie = qexecEspecie.execSelect();
                ArrayList<String> especies = new ArrayList<>();

                while (resultEspecie.hasNext()) {
                    QuerySolution binding = resultEspecie.nextSolution();
                    especies.add(binding.getResource("sameas").getURI());
                }
                for (String especie : especies) {
                    //TODO:execute query
                    //TODO: parkTrees.append each result
                    System.out.println(especie);
                }
            }
        } catch (Exception ex) {
            parkTrees = new ArrayList<>();

        }
        Park park = new Park();
        park.setName(name);
        park.setDescription(description);
        park.setTransport(transport);
        park.setLatitude(latitude);
        park.setLongitude(longitude);
        park.setTrees(parkTrees);
        return park;
    }


    public static void main(String[] args) {


        Park p = ParkRequest("40.45999848510341", "-3.6148888706303586");
        System.out.println(p.getTrees());


    }
}
