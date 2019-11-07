import java.io.IOException;
import java.io.InputStream;
import java.util.LinkedList;
import java.util.List;

import org.apache.jena.*;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.query.ParameterizedSparqlString;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;

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

	public static List<String> consulta(Init obj,String option,String query) {

		LinkedList<String> resultado = new LinkedList<>();
		ParameterizedSparqlString  queryString = new ParameterizedSparqlString();
		queryString.setNsPrefix("insta", "http://www.instalacionesDeportivasMunicipales.es/ontology/InstalacionesDeportivas#");
		queryString.setNsPrefix("clase", "http://www.instalacionesDeportivasMunicipales.es/ontology#");
		queryString.setNsPrefix("rdfs", "http://www.w3.org/2000/01/rdf-schema#");
		queryString.append("SELECT DISTINCT ?name ?query WHERE{ ?x insta:name ?name . ?x ");
		switch(option) {
		
		case ("Distrito"): queryString.append("insta:hasDistrict"); break;
		
		case ("Equipamiento"): queryString.append("insta:hasEquipment"); break;
		
		case ("Localidad"): queryString.append("insta:hasLocality"); break;
		
		case ("Barrio"): queryString.append("insta:neigborhood"); break;
		
		case ("Código Postal"): queryString.append("insta:hasPostalCode"); break;
		
		case ("Provincia"): queryString.append("insta:hasProvince"); break;
		
		case ("Calle"): queryString.append("insta:hasRoadName"); break;
		
		case ("Disponibilidad"): queryString.append("insta:isAvailable"); break;
		
		case ("Transporte"): queryString.append("insta:hasTransport"); break;
		
		default: return new LinkedList<>();
			
		}
		
		queryString.append(" ?query . FILTER regex(str(?query),");
		queryString.appendLiteral(query);
		queryString.append(",\"i\")");
		queryString.append("}");
		
		QueryExecution qExec = QueryExecutionFactory.create(queryString.asQuery(),obj.model);
		ResultSet rs = qExec.execSelect() ;
		while(rs.hasNext()) {
			QuerySolution qs = rs.next() ;
			resultado.add(qs.toString());
		}
		qExec.close() ;
		return resultado;
	}
	
	public static List<String> infoResource(Init obj,String resourceName){
		
		LinkedList<String> resultado = new LinkedList<>();
		ParameterizedSparqlString  queryString = new ParameterizedSparqlString();
		queryString.setNsPrefix("insta", "http://www.instalacionesDeportivasMunicipales.es/ontology/InstalacionesDeportivas#");
		queryString.setNsPrefix("clase", "http://www.instalacionesDeportivasMunicipales.es/ontology#");
		queryString.setNsPrefix("rdfs", "http://www.w3.org/2000/01/rdf-schema#");
		queryString.append("SELECT ?properties WHERE{ ?x insta:name ");
		queryString.appendLiteral(resourceName);
		queryString.append(" . ?x ?y ?properties}");
		
		QueryExecution qExec = QueryExecutionFactory.create(queryString.asQuery(),obj.model);
		ResultSet rs = qExec.execSelect() ;
		while(rs.hasNext()) {
			QuerySolution qs = rs.next() ;
			resultado.add(qs.toString());
		}
		qExec.close() ;
		return resultado;
	}
	
	public static void main(String[] args) {
		infoResource(new Init(),"Instalación Deportiva Municipal Básica de Ribadeo y Verín").forEach(element -> {System.out.println(element);});;
	}
}
