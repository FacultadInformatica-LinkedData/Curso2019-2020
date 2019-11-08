from flask import Flask, render_template, request
from rdflib import Graph
from rdflib import Namespace
from geopy import distance
import datetime
from flask import json 

app = Flask(__name__)
graph = Graph()
graph.parse("airlist/rdf/Locations.rdf")

estacionesGraph = Graph()
estacionesGraph.parse("airlist/rdf/EstacionesAire.rdf")

obsevationsGraph = Graph()
obsevationsGraph.parse("airlist/rdf/Observations.rdf")

def get_sensorlist():
    query = """
            SELECT DISTINCT ?sensor ?name ?location ?long ?lat
            WHERE { 
                ?sensor rdfs:label ?name .
                ?sensor <http://group17.data/hasLocation> ?location . 
                ?sensor geo:long ?long .
                ?sensor geo:lat ?lat .
            }
            """ 
    res = estacionesGraph.query(query)
    features = []

    for row in res:
        sensorId = row.sensor.toPython().split('http://group17.data/Sensor/')[1]

        observations = get_sensor_observations('"' + sensorId + '"')
        ica = calculate_ICA(observations)
        airquality = get_airquality(ica) if (ica != None) else 'Sin datos'

        coordenadas =  [float(row.long.toPython()) , float(row.lat.toPython())]
        sensor = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": coordenadas
            },
            "properties": {
                "id": sensorId, 
                "nombre":  row.name.toPython(),
                "airquality" : airquality
            }
        }
        features.append(sensor)
    sensors = {
            "type": "FeatureCollection",
            "features": features ,
    }
    return sensors


def get_streetslist():
    streets = []
    res = graph.query("""
                SELECT DISTINCT ?y 
                WHERE {
                ?x rdfs:label ?y 
                }
                """)
    for row in res:
        streets.append(row.y)                 
    return streets


def get_observations_from_sensor(sensorId):
    #print('closestSensor', closestSensor)
    observations = get_sensor_observations('"' + sensorId + '"')
    #print('observations', observations)
    ica = calculate_ICA(observations)
    airquality = get_airquality(ica) if (ica != None) else 'Sin datos'
    result = {
        'street' : {
            'name' : 'calle test',
            'coordinates' : 'coor test'
        },
        'closestSensor' : {
            'id': sensorId,
            'distance' : 0
        },
        'observations' : observations,
        'ica' : {
            'value': ica,
            'quality': airquality
        }
    }

    #print('para se', sensorId)
    #print('result', result)

    return result


def get_street_observations(street):
    streetCoordinates = get_street_coordinates(street)
    #print('streetCoordinates', streetCoordinates)
    closestSensor = get_closest_sensor(streetCoordinates)
    #print('closestSensor', closestSensor)
    observations = get_sensor_observations('"' + closestSensor.get('sensorId') + '"')
    #print('observations', observations)
    ica = calculate_ICA(observations)
    airquality = get_airquality(ica) if (ica != None) else 'Sin datos'
    result = {
        'street' : {
            'name' : street,
            'coordinates' : streetCoordinates
        },
        'closestSensor' : {
            'id': closestSensor.get('sensorId'),
            'distance' : closestSensor.get('distance')
        },
        'observations' : observations,
        'ica' : {
            'value': ica,
            'quality': airquality
        }
    }

    return result


def get_street_coordinates(street):
    street = '"' + street + '"'
    query = """
            SELECT DISTINCT ?lat ?long
            WHERE { 
                ?location rdfs:label """ + street + """ . 
                ?location geo:lat ?lat .
                ?location geo:long ?long .
                }
            """ 
    res = graph.query(query)
    if (len(res) == 0):
        return "error" 

    streetCoordinates = (dms2dec(list(res)[0].lat), dms2dec(list(res)[0].long))

    return streetCoordinates


def get_closest_sensor(streetCoordinates):

    closestSensorId = ''
    minDistance = None

    for coordinates in sensorsCoordinates:
        distanceKm = distance.distance(streetCoordinates, (coordinates.get('lat'), coordinates.get('long'))).km
        if (minDistance == None) or (distanceKm < minDistance):
            minDistance = distanceKm
            closestSensorId = coordinates.get('sensorId')

    return {'sensorId': closestSensorId, 'distance': minDistance}


def get_sensors_coordinates():
    sensorsList = []
    query = """
            SELECT DISTINCT ?sensor ?lat ?long
            WHERE { 
                ?sensor ?x ?y .
                ?sensor geo:lat ?lat .
                ?sensor geo:long ?long .
            }
            """ 
    res = estacionesGraph.query(query)
    if (len(res) == 0):
        return "error" 

    for row in res:
        sensorsList.append({'sensorId': row.sensor.toPython().split('http://group17.data/Sensor/')[1] , 'lat': row.lat.toPython(), 'long': row.long.toPython()})
            
    return sensorsList


def get_sensor_observations(sensorId):

    observations = {}

    nowHour = datetime.datetime.now().hour
    queryDate = datetime.datetime(2019, 10, 3, nowHour if (nowHour < 19) else 19, 0, 0)
    currentTime = '"' + str(queryDate.date()) + 'T' + str(queryDate.time()) + '"'

    #print('Hora observacion', nowHour)
    query = """
        SELECT DISTINCT ?gas ?result 
        WHERE { 
            ?observation sosa:madeBySensor """ + sensorId + """ .
            ?observation sosa:resultTime ?date .
            ?observation sosa:hasSimpleResult ?result .
            ?observation sosa:observedProperty ?gas .
            FILTER ( ?date = xsd:dateTime(""" + currentTime + """) ) 
        }
        """ 
    res = obsevationsGraph.query(query)
    for row in res:
        #print('Gas', row.gas.toPython(), ' : ' , row.result.toPython(), '\n')
        observations[row.gas.toPython()] = row.result.toPython()

    return observations

# Coordinates to decimal format:
import re

def dms2dec(dms_str):
    """Return decimal representation of DMS
    
    >>> dms2dec(utf8(48°53'10.18"N))
    48.8866111111F
    
    >>> dms2dec(utf8(2°20'35.09"E))
    2.34330555556F
    
    >>> dms2dec(utf8(48°53'10.18"S))
    -48.8866111111F
    
    >>> dms2dec(utf8(2°20'35.09"W))
    -2.34330555556F
    
    """
    
    dms_str = re.sub(r'\s', '', dms_str)
    
    sign = -1 if re.search('[swSW]', dms_str) else 1
    
    numbers = [*filter(len, re.split('\D+', dms_str, maxsplit=4))]

    degree = numbers[0]
    minute = numbers[1] if len(numbers) >= 2 else '0'
    second = numbers[2] if len(numbers) >= 3 else '0'
    frac_seconds = numbers[3] if len(numbers) >= 4 else '0'
    
    second += "." + frac_seconds
    return sign * (int(degree) + float(minute) / 60 + float(second) / 3600)


# Quality air levels according to ICA estandar:
def calculate_ICA(observations_in_an_hour):
    partial_results = []
    factors = {
        'Dióxido de Azufre': 0.286,
        'Dióxido de Nitrógeno': 0.5, 
        'Partículas < 10 µm': 1, 
        'Monóxido de Carbono': 10, 
        'Ozono': 0.833
    }
    for observation in observations_in_an_hour:
        if (observation in factors):
            partial_results.append(float(observations_in_an_hour.get(observation)) * float(factors.get(observation)))
    
    if len(partial_results) <= 0:
        return None

    # Indice Global de la Estación:
    ige = max(partial_results)

    return(ige)  

# Air quality (Buena, Moderada, Insalubre para grupos sensibles, Insalubre, Peligrosa):
def get_airquality(ige):
    #print(ige)
    if (ige <= 50):
        return "Buena"
    elif (ige <= 100):
        return "Moderada"
    elif (ige <= 150):
        return "Insalubre para grupos sensibles"
    elif (ige <= 200):
        return "Insalubre"
    elif (ige <= 300):
        return "Muy insalubre"
    elif (ige <= 500):
        return "Peligrosa"

# get the full list to autocomplete
streets = get_streetslist()
sensors = get_sensorlist()

sensorsCoordinates = get_sensors_coordinates()




@app.route("/")
def home_page():
    return render_template("index.html", streets = streets, district = "", selectedStreet= "", sensors = json.dumps(sensors))

@app.route("/street", methods = ['GET'])
def getStreet():
    street = request.args.get('namestreet')
    return render_template("result.html", streets = streets, result = get_street_observations(street))

@app.route("/sensor", methods = ['GET'])
def getSensor():
    sensorId = request.args.get('sensorId')
    return render_template("result.html", streets = streets, result = get_observations_from_sensor(sensorId))