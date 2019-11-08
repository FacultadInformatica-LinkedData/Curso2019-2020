package bMad;



import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Literal;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class server {

    /*
        Shows Bikes Stations by filtering or not
        return JSON with BikeStations Searched
    */
    @CrossOrigin
    @RequestMapping(value = "/BikeStations", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getBikeStations(@RequestParam(defaultValue="") String neighborhood,
                                  @RequestParam(defaultValue = "") String district) {
        String json="";
        app a = new app();

        json = a.getStations(neighborhood,district);
        if(json.isEmpty()){
            return new ResponseEntity<>("No BikeStations Found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(json,HttpStatus.ACCEPTED);
    }

    @CrossOrigin
    @RequestMapping(value = "/Neighborhoods", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getNeighborhoods(){
        String json="";
        app a = new app();
        json = a.getNeighborhoods();
        if(json.isEmpty()){
            return new ResponseEntity<>("BAD REQUEST", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(json,HttpStatus.ACCEPTED);
    }

    @CrossOrigin
    @RequestMapping(value = "/Districts", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getDistricts(){
        String json="";
        app a = new app();
        json = a.getDistricts();
        if(json.isEmpty()){
            return new ResponseEntity<>("BAD REQUEST", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(json,HttpStatus.ACCEPTED);
    }

    /*
        Shows Bikes Station selected
        return JSON with BikeStation Selected Info (id, district, street.. etc)
    */
    @CrossOrigin
    @RequestMapping(value = "/BikeStations/{id}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getBikeStation(@PathVariable String id){
        String json="";
        app a = new app();
        json = a.getStation(id);
        if(json.isEmpty()){
            return new ResponseEntity<>("No BikeStations Found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(json, HttpStatus.ACCEPTED);
    }



    /*
        Shows Interest Points by filtering or not
        return JSON with InterestPoints Info (id, district, street, geo.. etc)
        Valores para filtro:
            "" -> no se aplica ningun filtro
            "district" -> se filtra por distrito
            "neighborhood" -> se filtra por barrio
    */
    //@GetMapping("/BikeStations/{id}/interestPoints")
    // PRE: filters = districts ( by default )
    // filter = neighborhoods (to filter interest points by neighborhoods
    @CrossOrigin
    @RequestMapping(value = "/BikeStations/{id}/interestPoints", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getPoints(@PathVariable String id, @RequestParam(defaultValue = "districts") String filter){

        app a = new app();
        app b = new app(); //nueva instancia para evitar problemas con fichero abierto (se cambiara implementacion)

        // Se devuelve el resulset para acceder al barrio o distrito de una parada concreta
        ResultSet bs = a.getStationRS(id);
        QuerySolution binding = bs.nextSolution();
        String filterCode ="";

        // if filter by neighborhood get the neighborhood wikidata code
        if(filter.equals("neighborhoods")){
            Literal literalNeigh =  binding.getLiteral("neighborhood");
            Neighborhood neigClass = new Neighborhood();
            filterCode = neigClass.get(literalNeigh.getString());
        }

        //else get district wikidata code

        else{
            Literal literalDis = binding.getLiteral("district");
            Districts districtsClass = new Districts();
            filterCode = districtsClass.get(literalDis.getString());
        }


        //get InterestPoints as String format
        String json = b.getInterestPoints(filterCode);

        if(json.isEmpty()){
            return new ResponseEntity<>("No BikeStations Found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(json, HttpStatus.ACCEPTED);
    }





}
