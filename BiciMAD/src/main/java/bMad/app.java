package bMad;
import com.bordercloud.sparql.EndpointException;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.*;
import org.apache.jena.sparql.vocabulary.FOAF;
import org.apache.jena.util.FileManager;
import com.bordercloud.sparql.Endpoint;


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

    public String getInterestPoints(String neighborhoodFilter, String districtFilter )  {
        model =  ModelFactory.createDefaultModel();
        model.read(file, null);
        try {
            return peticionHttpGet(queries.query5());
        } catch (Exception e) {
            return "";
        }
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




    private static String peticionHttpGet(String urlParaVisitar) throws Exception {
        // Esto es lo que vamos a devolver
        StringBuilder resultado = new StringBuilder();
        // Crear un objeto de tipo URL
        URL url = new URL(urlParaVisitar);

        // Abrir la conexión e indicar que será de tipo GET
        HttpURLConnection conexion = (HttpURLConnection) url.openConnection();
        conexion.setRequestMethod("GET");
        conexion.setRequestProperty("Content-Type", "application/json");
        conexion.setRequestProperty("Accept", "application/json");
        // Búferes para leer
        BufferedReader rd = new BufferedReader(new InputStreamReader(conexion.getInputStream()));
        String linea;
        // Mientras el BufferedReader se pueda leer, agregar contenido a resultado
        while ((linea = rd.readLine()) != null) {
            resultado.append(linea);
        }
        // Cerrar el BufferedReader
        rd.close();
        // Regresar resultado, pero como cadena, no como StringBuilder
        return resultado.toString();
    }
}
