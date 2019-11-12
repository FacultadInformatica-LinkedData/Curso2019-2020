from flask import Flask,request
from flask_restful import Api, Resource, reqparse
from SPARQLWrapper import SPARQLWrapper,JSON
import json 
import rdflib
app = Flask(__name__)
api = Api(app)


#Generacion del grapo de nuestro Dataset
graphBiblio = rdflib.Graph()
graphBiblio.parse('prueba.ttl', format = 'ttl')

def uriToObject(uri):
	biblio = {}
	queryBilio = 'select distinct ?value ?prop where{ <'+ uri +'> ?prop ?value }'
	print(queryBilio)
	for row in graphBiblio.query(queryBilio):
		if not(row.prop[48:] in 'Biblioteca'):
			if row.prop[48:] in 'nombre' :
				biblio["nombre"] = row.value
			if row.prop[48:] in 'institucion' :
				biblio["institucion"] = row.value
			if row.prop[48:] in 'codigo_postal' :
				biblio["codigo_postal"] = row.value			
			if row.prop[48:] in 'Municipio' :
				biblio["municipio"] = row.value	
			if row.prop[48:] in 'Pais' :
				biblio["pais"] = row.value	
			if row.prop[48:] in 'direccion' :
				biblio["direccion"] = row.value	
			if row.prop[48:] in 'fecha_fundacion' :
				biblio["fecha_fundacion"] = row.value
	return biblio.copy()
	
def ciudadwikidataToUri(uriCiudadWikidata,bibliotecas):
	print(uriCiudadWikidata[31:])	
	queryWikidataCiudad = 'select distinct ?s where{ ?s a biblio:Biblioteca . ?s biblio:Municipio_wikidata <https://www.wikidata.org/wiki/'+ uriCiudadWikidata[31:] +'> }'		
	for row in graphBiblio.query(queryWikidataCiudad):
		print(row.s)
		bibliotecas.append(uriToObject(row.s))
		
@app.route('/api/consulta/', methods=['GET'])	
def consulta():
		bibliotecas = []
		sparql = SPARQLWrapper("https://query.wikidata.org/bigdata/namespace/wdq/sparql")
		pais = request.args.get('pais')
		ciudad = request.args.get('ciudad')
		movimiento = request.args.get('movimiento')
		autor = request.args.get('autor')
		idioma = request.args.get('idioma')
		if pais is not None:
			queryPais = 'select distinct ?s where{ ?s a biblio:Biblioteca . ?s biblio:Pais ?a . FILTER (?a = "'+ pais +'")}'
			print('Consulta Pais:'+queryPais)	
			for row in graphBiblio.query(queryPais):
				bibliotecas.append(uriToObject(row.s))
			
		if ciudad is not None:
			queryCiudad = 'select distinct ?s where{ ?s a biblio:Biblioteca . ?s biblio:Municipio ?a . FILTER (?a = "'+ ciudad +'")}'
			print('Consulta Ciudad:'+queryCiudad)	
			for row in graphBiblio.query(queryCiudad):
				print('LlamadaBiblio('+row.s+')')
				bibliotecas.append(uriToObject(row.s))
		if movimiento is not None:
			if autor is None:
				queryWikidata = 'SELECT distinct ?ciudad WHERE{  { ?personas wdt:P19 ?ciudad .}UNION{ ?personas wdt:P20 ?ciudad .} ?personas wdt:P31 wd:Q5. ?ciudad wdt:P31 wd:Q515 . ?personas wdt:P106 ?profesion. FILTER(?profesion IN (wd:Q6625963, wd:Q482980, wd:Q49757, wd:Q36180))?personas wdt:P135 ?movimiento . ?movimiento rdfs:label "'+movimiento+'"@es .}LIMIT 100'
			else:
				queryWikidata = 'SELECT distinct ?ciudad WHERE{  { ?personas wdt:P19 ?ciudad .}UNION{ ?personas wdt:P20 ?ciudad .} ?personas wdt:P31 wd:Q5. ?ciudad wdt:P31 wd:Q515 . ?personas wdt:P106 ?profesion. FILTER(?profesion IN (wd:Q6625963, wd:Q482980, wd:Q49757, wd:Q36180))?personas wdt:P135 ?movimiento . ?personas rdfs:label "'+autor+'"@es . ?movimiento rdfs:label "'+movimiento+'"@es .}LIMIT 100'
			print(queryWikidata)
			sparql.setQuery(queryWikidata)
			sparql.setReturnFormat(JSON)
			results = sparql.query().convert()
			for row in results["results"]["bindings"]:
				print(row["ciudad"]["value"])
				ciudadwikidataToUri(row["ciudad"]["value"],bibliotecas)
		elif autor is not None:
			queryWikidata = 'SELECT distinct ?ciudad WHERE{  { ?personas wdt:P19 ?ciudad .}UNION{ ?personas wdt:P20 ?ciudad .} ?personas wdt:P31 wd:Q5. ?ciudad wdt:P31 wd:Q515 . ?personas wdt:P106 ?profesion. FILTER(?profesion IN (wd:Q6625963, wd:Q482980, wd:Q49757, wd:Q36180))?personas rdfs:label "'+autor+'"@es .}LIMIT 100'
			print(queryWikidata)
			sparql.setQuery(queryWikidata)
			sparql.setReturnFormat(JSON)
			results = sparql.query().convert()
			for row in results["results"]["bindings"]:
				print(row["ciudad"]["value"])
				ciudadwikidataToUri(row["ciudad"]["value"],bibliotecas)
		if idioma is not None:
			return "No existen Bibliotecas", 404
		if bibliotecas is not None:
			return json.dumps(bibliotecas)
		else :
			return "No existen Bibliotecas", 404

if __name__ == '__main__':   
    app.run(debug=True)
					