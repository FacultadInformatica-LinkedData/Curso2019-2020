package bMad;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.*;
import org.apache.jena.sparql.vocabulary.FOAF;
import org.apache.jena.util.FileManager;

import javax.security.auth.Subject;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;

public class app {

    //atributes
    String filename;
    InputStream file;
    Model model;

    //constructor
    public app(){
        filename = "schema-with-links.rdf";
        // Use the FileManager to find the input file
         file = FileManager.get().open(filename);

        if (file == null)
            throw new IllegalArgumentException("File: "+filename+" not found");


    }

    public String getStations(String neighborhoodFilter, String districtFilter){

        // Read the RDF/XML file
        model =  ModelFactory.createDefaultModel();
        model.read(file, null);
        String queryString = "";

        //query
        if(!neighborhoodFilter.isEmpty() && districtFilter.isEmpty()) {
             queryString =
                    "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                            "SELECT ?Subject ?street ?label ?district ?neighborhood ?availability " +
                            "WHERE { ?Subject <http://www.biciMad.com/ontology/hasNeighborhood> " +
                            "<http://www.biciMad.com/BikeStation/resource/addressRegion/" + neighborhoodFilter + ">. " +
                            "?Subject <http://www.biciMad.com/ontology/hasStreet> ?st. " +
                            "?Subject rdfs:label ?label. " +
                            "?Subject <http://www.biciMad.com/ontology/hasDistrict> ?dist. " +
                            "?Subject <http://www.biciMad.com/ontology/hasNeighborhood> ?neigh. " +
                            "<http://www.biciMad.com/BikeStation/resource/addressRegion/" + neighborhoodFilter + "> rdfs:label ?neighborhood. " +
                            "?st rdfs:label ?street. " +
                            "?dist rdfs:label ?district. " +
                            "?Subject <http://www.biciMad.com/ontology/hasAvailability> ?availability} ";

        }
        else if (neighborhoodFilter.isEmpty() && !districtFilter.isEmpty()){
            queryString =
                    "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                            "SELECT ?Subject ?street ?label ?district ?neighborhood ?availability " +
                            "WHERE { ?Subject <http://www.biciMad.com/ontology/hasDistrict> " +
                            "<http://www.biciMad.com/BikeStation/resource/areaServed/" + districtFilter + ">. " +
                            "?Subject <http://www.biciMad.com/ontology/hasStreet> ?st. " +
                            "?Subject rdfs:label ?label. " +
                            "?Subject <http://www.biciMad.com/ontology/hasDistrict> ?dist. " +
                            "?Subject <http://www.biciMad.com/ontology/hasNeighborhood> ?neigh. " +
                            "?neigh rdfs:label ?neighborhood. " +
                            "?st rdfs:label ?street. " +
                            "?dist rdfs:label ?district. " +
                            "?Subject <http://www.biciMad.com/ontology/hasAvailability> ?availability} ";
        }

        else{
            queryString =
                    "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                            "SELECT ?Subject ?street ?label ?district ?neighborhood ?availability " +
                            "WHERE { ?Subject <http://www.biciMad.com/ontology/hasStreet> ?st. " +
                            "?Subject rdfs:label ?label. " +
                            "?Subject <http://www.biciMad.com/ontology/hasDistrict> ?dist. " +
                            "?Subject <http://www.biciMad.com/ontology/hasNeighborhood> ?neigh. " +
                            "?neigh rdfs:label ?neighborhood. " +
                            "?st rdfs:label ?street. " +
                            "?dist rdfs:label ?district. " +
                            "?Subject <http://www.biciMad.com/ontology/hasAvailability> ?availability} ";
        }
        //execution
        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, model) ;
        ResultSet results = qexec.execSelect() ;

// write to a ByteArrayOutputStream
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        ResultSetFormatter.outputAsJSON(outputStream, results);

// and turn that into a String
        String json = new String(outputStream.toByteArray());

// and turn that into a String



        return json;
    }

}
