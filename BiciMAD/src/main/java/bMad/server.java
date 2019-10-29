package bMad;

import org.apache.jena.sparql.resultset.XMLInput;
import org.springframework.web.bind.annotation.*;

@RestController
public class server {

    /*
        Shows Bikes Stations by filtering or not
        return JSON with BikeStations Searched
    */
    @RequestMapping("/BikeStations")
    public String getBikeStations(@RequestParam(defaultValue="") String neighborhood,
                                  @RequestParam(defaultValue = "") String district) {
        String json="";
        app a = new app();
        json = a.getStations(neighborhood,district);
        return json;
    }

    /*
        Shows Bikes Station selected
        return JSON with BikeStation Selected Info (id, district, street.. etc)
    */
    @GetMapping("/BikeStations/{id}")
    public String getBikeStation(@PathVariable String id){

        return "";
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
    public String getPoints(@PathVariable String id, @RequestParam(defaultValue = "") String filtro){

        return "";
    }





}
