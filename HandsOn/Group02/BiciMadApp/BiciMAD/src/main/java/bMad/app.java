package bMad;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.jena.atlas.json.JsonObject;
import org.apache.jena.atlas.json.io.parser.JSONParser;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.*;
import org.apache.jena.sparql.vocabulary.FOAF;
import org.apache.jena.util.FileManager;
import org.json.JSONObject;


import javax.security.auth.Subject;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;

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

        //query Selection
        if(!neighborhoodFilter.isEmpty() && districtFilter.isEmpty()) {
             queryString = queries.query2(neighborhoodFilter);
        }
        else if (neighborhoodFilter.isEmpty() && !districtFilter.isEmpty()){
            queryString = queries.query1(districtFilter);
        }
        else{
            queryString = queries.query3();
        }

        return execution(queryString);

    }


    public String getStation(String label){
        model =  ModelFactory.createDefaultModel();
        model.read(file, null);
        String queryString = queries.query4(label);
        return execution(queryString);
    }

    public ResultSet getStationRS(String label){
        model =  ModelFactory.createDefaultModel();
        model.read(file, null);
        String queryString = queries.query4(label);
        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, model) ;
        return  qexec.execSelect();
    }

    public String getInterestPoints(String filter )  {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        model =  ModelFactory.createDefaultModel();
        String result="";
        model.read(file, null);
        try {
            String res = queries.query5(filter);
            HttpGet request = new HttpGet(res);

            // add request headers
            request.setHeader("Accept", "application/json");
            request.addHeader(HttpHeaders.USER_AGENT, "Googlebot");
            request.setHeader("Content-Type", "application/json");

            try (CloseableHttpResponse response = httpClient.execute(request)) {

                // Get HttpResponse Status
                System.out.println(response.getStatusLine().toString());

                HttpEntity entity = response.getEntity();
                Header headers = entity.getContentType();
                System.out.println(headers);

                if (entity != null) {
                    // return it as a String
                     result = EntityUtils.toString(entity);
                }

            }
            //return peticionHttpGet(res);

            return result;
        } catch (Exception e) {
            e.getMessage();
            System.err.println("error peticion http: " +e.getMessage());
            return result;
        }
    }

    public String getNeighborhoods(){
        model =  ModelFactory.createDefaultModel();
        model.read(file, null);
        String queryString = "";
        queryString = queries.query6();
        return execution(queryString);
    }

    public String getDistricts(){
        model =  ModelFactory.createDefaultModel();
        model.read(file, null);
        String queryString = "";
        queryString = queries.query7();
        return execution(queryString);
    }







    //-----------------------------------PRIVATE METHODS--------------------------------------------------

    private String execution(String queryString){
        //execution
        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, model) ;
        ResultSet results = qexec.execSelect() ;
// if no results then return  empty string
        if(!results.hasNext())
            return "";

// write to a ByteArrayOutputStream
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ResultSetFormatter.outputAsJSON(outputStream, results);

// and turn that into a String
        String json = new String(outputStream.toByteArray());
        return json;
    }

}
