import java.io.IOException;
import java.io.InputStream;

import org.apache.jena.atlas.json.JSON;
import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.impl.IndividualImpl;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.query.Syntax;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.util.FileManager;
import org.apache.jena.util.iterator.ExtendedIterator;
import org.apache.jena.*;
import org.json.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class Init {

	static String namespace = "http://www.instalacionesDeportivasMunicipales.es/ontology/InstalacionesDeportivas#";
	static String ontology = "http://www.instalacionesDeportivasMunicipales.es/ontology#";
	OntModel model;

	public Init(){

		String turtle = "instalacionesDeportivas-with-links.ttl";
		this.model = ModelFactory.createOntologyModel();
		InputStream file = FileManager.get().open(turtle);

		if (file == null)
			throw new IllegalArgumentException("File: " + turtle + " not found");

		this.model.read(turtle);
		try {
			file.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void consulta(Init obj) {

		InputStream jsonFile = FileManager.get().open("consulta.json");
		Object object;
		if (jsonFile == null)
			throw new IllegalArgumentException("File: " + "consulta.json" + " not found");
		else
			object = JSON.parse(jsonFile);
		try {
			jsonFile.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		JSONArray consulta = (JSONArray) object;
		String queryString = "PREFIX insta: <http://www.instalacionesDeportivasMunicipales.es/ontology/InstalacionesDeportivas#>" 
				+ "PREFIX clase: <http://www.instalacionesDeportivasMunicipales.es/ontology#>" 
				+ "SELECT DISTINCT";
		consulta.forEach(element -> { 
			
		}); //Placeholder para cuando tengamos el formato del json recibido
		QueryExecution qExec = QueryExecutionFactory.create(queryString,Syntax.syntaxARQ,obj.model);
		ResultSet rs = qExec.execSelect() ;
		String resultado = "";
		while(rs.hasNext()) {
			QuerySolution qs = rs.next() ;
			resultado += qs.toString();
			System.out.println(resultado);
		}
		qExec.close() ;
		//Placeholder de el output al json enviado
	}
	
	public static void main(String Args[]) {
		consulta(new Init());
	}
}
