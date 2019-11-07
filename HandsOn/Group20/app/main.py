from flask import Flask, request
import json
import requests
from SPARQLWrapper import SPARQLWrapper, JSON
import rdflib as rdf
import pandas as pd


app = Flask(__name__)

query = """
PREFIX wsm:<http://www.WSMadridCultural.es/resource>
select distinct ?name ?location ?price
where{
?eventName wsm:name ?name
?eventLocation wsm:location ?location
?eventPrice wsm:price ?price 
}
"""

@app.route('/events', methods=['GET'])
def events():
    elements, result = [], []
    cons = consulta()
    df = pd.read_csv("../csv/eventos.csv", sep=";", encoding="utf-8")
    df = df[["TITULO", "LATITUD", "LONGITUD", "PRECIO"]]
    df["PRECIO"].loc[df["PRECIO"].isna()] = 0
    elements = [i for i in cons]
    for i, r in df.iterrows():
        elements.append((r.TITULO, [r.LATITUD, r.LONGITUD], r.PRECIO))
    for element in elements:
        result.append({"key":element[0], "position":element[1], "childen":element[0], "price":element[2]})
    return json.dumps(result).encode('utf8')

def consulta():
    res = []
    try:
        sparql = SPARQLWrapper("http://dbpedia.org/sparql")
        sparql.setQuery(query)
        sparql.setReturnFormat(JSON)
        res = sparql.query().convert()
    except:
        pass
    return res


app.run(debug=False, port=8895)
