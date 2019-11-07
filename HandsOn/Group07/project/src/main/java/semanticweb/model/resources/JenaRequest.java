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

    //
    //RETURN THE PARK THAT IS IN THE COORDINATES
    //
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

         //PARK
        String queryString = "SELECT ?park ?name ?description ?dis " +
                "WHERE { ?park a <http://www.semanticweb.org/grupo07/ontologies/class#Park> ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasName> ?name ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasDescription> ?description ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#inDistrict> ?dis ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLongitud> \"" + longitude + "\" ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLatitude> \"" + latitude + "\" }";

        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, modelPark);
        ResultSet results = qexec.execSelect();
        String name = "";
        String description = "";
        String district = "";
        Resource Subject = null;
        

        while (results.hasNext()) {
            QuerySolution binding = results.nextSolution();
            Subject = binding.getResource("park");
            name = binding.getLiteral("name").getString();
            district = binding.getResource("dis").getURI();
            description += binding.getLiteral("description").getString() + "\n";
        }

        //DISTRICT
        String uriDisString = "SELECT ?uriDis ?name " +
                "WHERE { <"+district+"> a <http://www.semanticweb.org/grupo07/ontologies/class#District> ; " +
                "<http://www.w3.org/2002/07/owl#sameAs> ?uriDis ; "+
            " <http://www.w3.org/2000/01/rdf-schema#label> ?name ;  }";

        Query queryDis = QueryFactory.create(uriDisString);
        QueryExecution qexecDis = QueryExecutionFactory.create(queryDis, modelPark);
        ResultSet resultsDis = qexecDis.execSelect();
        String uriDis = "";
        String districtName = "";

        while (resultsDis.hasNext()) {
            QuerySolution binding = resultsDis.nextSolution();
            uriDis = binding.getResource("uriDis").getURI();
            districtName = binding.getLiteral("name").getString();
        }

        String[] disArray = uriDis.split("/");
        uriDis = disArray[disArray.length - 1];

        String queryDistrictWikiData =
        "PREFIX bd: <http://www.bigdata.com/rdf#>\n" +
                "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "SELECT distinct ?image where { " +
                "wd:" + uriDis + " wdt:P18 ?image. " +
                "SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE]\". }}";

        QueryExecution qexecDisWD = QueryExecutionFactory.sparqlService("https://query.wikidata.org/sparql", queryDistrictWikiData);
        ResultSet resultsDisWD = qexecDisWD.execSelect();
        String uriDisIMG = "";

        while (resultsDisWD.hasNext()) {
            QuerySolution binding = resultsDisWD.nextSolution();
            uriDisIMG = binding.getResource("image").getURI();
        }


        //TRANSPORT

        String busString = "SELECT ?park ?bus  " +
                "WHERE { ?park a <http://www.semanticweb.org/grupo07/ontologies/class#Park> ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasBus> ?bus ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLongitud> \"" + longitude + "\" ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLatitude> \"" + latitude + "\" }";

        Query query2 = QueryFactory.create(busString);
        QueryExecution qexec2 = QueryExecutionFactory.create(query2, modelPark);
        ResultSet results2 = qexec2.execSelect();
        String transport = "";

        while (results2.hasNext()) {
            QuerySolution binding = results2.nextSolution();
            transport = transport + "BUS: " + binding.getLiteral("bus").getString() + "\n";
        }

        String underString = "SELECT ?park ?under  " +
                "WHERE { ?park a <http://www.semanticweb.org/grupo07/ontologies/class#Park> ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasUnderground> ?under ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLongitud> \"" + longitude + "\" ; " +
                "<http://www.semanticweb.org/grupo07/ontologies/property#hasLatitude> \"" + latitude + "\" }";

        Query query3 = QueryFactory.create(underString);
        QueryExecution qexec3 = QueryExecutionFactory.create(query3, modelPark);
        ResultSet results3 = qexec3.execSelect();

        while (results3.hasNext()) {
            QuerySolution binding = results3.nextSolution();
            transport = transport + "METRO: " + binding.getLiteral("under").getString() + "\n";
        }

        //PLANTS AND TREES


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
        park.setImageDis(uriDisIMG);
        park.setNameDis(districtName);
        return park;

    }

    public static void main(String[] args) {

        Park p = ParkRequest("40.410083041012584", "-3.6297141827859876");
       
        System.out.println(p.getImageDis());
       //getAllLat();

    }
}
