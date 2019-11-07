package semanticweb.model.resources;

import semanticweb.model.resources.Tree;
import semanticweb.model.resources.Park;

import org.apache.jena.query.*;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.util.FileManager;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class JenaRequest {

    public static List<String> getAllLat(){
        String filePark = "src/main/java/semanticweb/model/resources/parques-jardines-with-links.ttl";
        Model modelPark = ModelFactory.createDefaultModel();
        InputStream inPark = FileManager.get().open(filePark);

        if (inPark == null)
        throw new IllegalArgumentException("File: " + filePark + " not found");

        modelPark.read("src/main/java/semanticweb/model/resources/parques-jardines-with-links.ttl");

        String queryLat = "SELECT ?latitude" +
        " WHERE {" +
        "?park a <http://www.semanticweb.org/grupo07/ontologies/class#Park> ;"+
        "<http://www.semanticweb.org/grupo07/ontologies/property#hasLatitude> ?latitude ;}";

        Query query = QueryFactory.create(queryLat);
        QueryExecution qexec = QueryExecutionFactory.create(query, modelPark);
        ResultSet results = qexec.execSelect();
        String latitude = "";
        List<String> latitudes = new ArrayList<String>();

        while (results.hasNext()) {
            QuerySolution binding = results.nextSolution();
            latitude = binding.getLiteral("latitude").getString();
            latitudes.add(latitude);
        }

        return latitudes;


    }

    public static List<String> getAllLon(){
        String filePark = "src/main/java/semanticweb/model/resources/parques-jardines-with-links.ttl";
        Model modelPark = ModelFactory.createDefaultModel();
        InputStream inPark = FileManager.get().open(filePark);

        if (inPark == null)
        throw new IllegalArgumentException("File: " + filePark + " not found");

        modelPark.read("src/main/java/semanticweb/model/resources/parques-jardines-with-links.ttl");

        String queryLat = "SELECT ?lon" +
        " WHERE {" +
        "?park a <http://www.semanticweb.org/grupo07/ontologies/class#Park> ;"+
        "<http://www.semanticweb.org/grupo07/ontologies/property#hasLongitud> ?lon ;}";

        Query query = QueryFactory.create(queryLat);
        QueryExecution qexec = QueryExecutionFactory.create(query, modelPark);
        ResultSet results = qexec.execSelect();
        String lon = "";
        List<String> lons = new ArrayList<String>();

        while (results.hasNext()) {
            QuerySolution binding = results.nextSolution();
            lon = binding.getLiteral("lon").getString();
            lons.add(lon);
        }

        return lons;


    }

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
                    String[] elements = especie.split("/");
                    String element = elements[elements.length - 1];

                    String queryEspecieResource =
                            "PREFIX bd: <http://www.bigdata.com/rdf#>\n" +
                                    "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                                    "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                                    "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                                    "SELECT distinct ?object ?image where { " +
                                    "wd:" + element + " wdt:P225 ?object. " +
                                    "wd:" + element + " wdt:P18 ?image. " +
                                    "SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE]\". }}";
                    System.out.println("Especie: " + especie);

                    Query newquery = QueryFactory.create(queryEspecieResource);
                    QueryExecution newqexec = QueryExecutionFactory.sparqlService("https://query.wikidata.org/sparql", newquery);
                    ResultSet resultsEspecieR = null;
                    Tree auxTree = new Tree();
                    try {
                        resultsEspecieR = newqexec.execSelect();
                        QuerySolution binding = resultsEspecieR.nextSolution();
                        String treeName = binding.getLiteral("object").getString();
                        auxTree.setName(treeName!=null?treeName:"img/tree.png");
                        auxTree.setImage(binding.getResource("image").getURI());                        
                    } catch (Exception ex) {
                        auxTree.setImage("img/tree.png");

                    }
                    newqexec.close();
                    parkTrees.add(auxTree);
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

        Park p = ParkRequest("40.39815439895114", "-3.7125359439695975");
       
        System.out.println(p.getName());
       //getAllLat();

    }
}
