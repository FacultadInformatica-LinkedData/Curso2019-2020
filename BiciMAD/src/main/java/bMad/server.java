package bMad;

import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Literal;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.sparql.resultset.XMLInput;
import org.springframework.http.HttpStatus;
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
    @RequestMapping("/BikeStations")
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

    /*
        Shows Bikes Station selected
        return JSON with BikeStation Selected Info (id, district, street.. etc)
    */
    @GetMapping("/BikeStations/{id}")
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
        Shows Interest Point selected
        return JSON with Interest Point Info (id, district, street.. etc)
    */
    @GetMapping("/BikeStations/{id}/interestPoints/{id2}")
    public String getPoint(@PathVariable String id, @PathVariable String id2){

        return "";
    }


    /*
        Shows Interest Points by filtering or not
        return JSON with InterestPoints Info (id, district, street, geo.. etc)
        Valores para filtro:
            "" -> no se aplica ningun filtro
            "district" -> se filtra por distrito
            "neighborhood" -> se filtra por barrio
    */
    @GetMapping("/BikeStations/{id}/interestPoints")
    public ResponseEntity<String> getPoints(@PathVariable String id, @RequestParam(defaultValue = "") String filtro){
        String json="";
        app a = new app();
        app b = new app(); //nueva instancia para evitar problemas con fichero abierto (se cambiara implementacion)
        ResultSet bs = a.getStationRS(id);
        QuerySolution binding = bs.nextSolution();

        //barrio
        Literal subj =  binding.getLiteral("neighborhood");

        json = b.getInterestPoints("","");
        if(json.isEmpty()){
            return new ResponseEntity<>("No BikeStations Found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(json, HttpStatus.ACCEPTED);

    }





}
