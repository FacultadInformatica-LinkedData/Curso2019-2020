package bMad;

public class queries {



    public static  String query1(String districtFilter){
    return "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
            "SELECT ?Subject ?label ?district ?neighborhood ?address ?latitude ?longitude ?date ?availability ?street " +
            "WHERE { ?Subject <http://www.biciMad.com/ontology/hasDistrict> " +
            "<http://www.biciMad.com/BikeStation/resource/areaServed/" + districtFilter + ">. " +
            "?Subject <http://www.biciMad.com/ontology/hasStreet> ?st. " +
            "?Subject rdfs:label ?label. " +
            "?Subject <http://www.biciMad.com/ontology/hasDistrict> ?dist. " +
            "?Subject <http://www.biciMad.com/ontology/hasNeighborhood> ?neigh. " +
            "?neigh rdfs:label ?neighborhood. " +
            "?Subject <http://www.biciMad.com/ontology/hasAddress> ?address. " +
            "?Subject <http://www.biciMad.com/ontology/hasDate> ?date. " +
            "?Subject <http://www.biciMad.com/ontology/hasLatitude> ?latitude. " +
            "?Subject <http://www.biciMad.com/ontology/hasLongitude> ?longitude. " +
            "?st rdfs:label ?street. " +
            "?dist rdfs:label ?district. " +
            "?Subject <http://www.biciMad.com/ontology/hasAvailability> ?availability} ";
    }

    public static String query2(String neighborhoodFilter ){
       return  "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT ?Subject ?label ?district ?neighborhood ?address ?latitude ?longitude ?date ?availability ?street " +
                "WHERE { ?Subject <http://www.biciMad.com/ontology/hasNeighborhood> " +
                "<http://www.biciMad.com/BikeStation/resource/addressRegion/" + neighborhoodFilter + ">. " +
                "?Subject <http://www.biciMad.com/ontology/hasStreet> ?st. " +
                "?Subject rdfs:label ?label. " +
                "?Subject <http://www.biciMad.com/ontology/hasDistrict> ?dist. " +
                "?Subject <http://www.biciMad.com/ontology/hasNeighborhood> ?neigh. " +
                "<http://www.biciMad.com/BikeStation/resource/addressRegion/" + neighborhoodFilter + "> rdfs:label ?neighborhood. " +
                "?Subject <http://www.biciMad.com/ontology/hasAddress> ?address. " +
                "?Subject <http://www.biciMad.com/ontology/hasDate> ?date. " +
                "?Subject <http://www.biciMad.com/ontology/hasLatitude> ?latitude. " +
                "?Subject <http://www.biciMad.com/ontology/hasLongitude> ?longitude. " +

               "?st rdfs:label ?street. " +
                "?dist rdfs:label ?district. " +
                "?Subject <http://www.biciMad.com/ontology/hasAvailability> ?availability} ";
    }

    public static String query3(){
        return  "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT ?Subject ?label ?district ?neighborhood ?address ?latitude ?longitude ?date ?availability ?street " +
                "WHERE { ?Subject <http://www.biciMad.com/ontology/hasStreet> ?st. " +
                "?Subject rdfs:label ?label. " +
                "?Subject <http://www.biciMad.com/ontology/hasDistrict> ?dist. " +
                "?Subject <http://www.biciMad.com/ontology/hasNeighborhood> ?neigh. " +
                "?neigh rdfs:label ?neighborhood. " +
                "?Subject <http://www.biciMad.com/ontology/hasAddress> ?address. " +
                "?Subject <http://www.biciMad.com/ontology/hasDate> ?date. " +
                "?Subject <http://www.biciMad.com/ontology/hasLatitude> ?latitude. " +
                "?Subject <http://www.biciMad.com/ontology/hasLongitude> ?longitude. " +
                "?st rdfs:label ?street. " +
                "?dist rdfs:label ?district. " +
                "?Subject <http://www.biciMad.com/ontology/hasAvailability> ?availability} ";
    }

    public static String query4(String label){
        return  "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT ?Subject ?label ?district ?neighborhood ?address ?latitude ?longitude ?date ?availability ?street " +
                "WHERE { ?Subject <http://www.biciMad.com/ontology/hasStreet> ?st. " +
                "?Subject rdfs:label \""+label+"\". "+
                "?Subject rdfs:label ?label. " +
                "?Subject <http://www.biciMad.com/ontology/hasDistrict> ?dist. " +
                "?Subject <http://www.biciMad.com/ontology/hasNeighborhood> ?neigh. " +
                "?neigh rdfs:label ?neighborhood. " +
                "?Subject <http://www.biciMad.com/ontology/hasAddress> ?address. " +
                "?Subject <http://www.biciMad.com/ontology/hasDate> ?date. " +
                "?Subject <http://www.biciMad.com/ontology/hasLatitude> ?latitude. " +
                "?Subject <http://www.biciMad.com/ontology/hasLongitude> ?longitude. " +
                "?st rdfs:label ?street. " +
                "?dist rdfs:label ?district. " +
                "?Subject <http://www.biciMad.com/ontology/hasAvailability> ?availability} ";
    }

    public static String query5(){
        return  "https://query.wikidata.org/sparql?query=" +
                "PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%20%0A" +
                "PREFIX%20bd%3A%20%3Chttp%3A%2F%2Fwww.bigdata.com%2Frdf%23%3E%0APREFIX%20wikibase%3A%20%3Chttp%3A%2F%2Fwikiba.se%2Fontology%23%3E%0A" +
                "PREFIX%20wdt%3A%20%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0APREFIX%20wd%3A%20%3Chttp%3A%2F%2Fwww.wikidata.org%2F" +
                "entity%2F%3E%0ASELECT%20DISTINCT%20%3Fid%20%3Fnombre%20%3FtipoLugar%20%3Fcoor%20%3Fstreet%20%3Furl%0A" +
                "WHERE%0A%7B%0A%20%20%0A%20%20%3Fid%20%3Fc%20wd%3AQ10387767%3B%0A%20%20%20%20%20rdfs%3Alabel%20%3Fnombre%3B%0A%20%20%20%20%20wdt%3AP31%20%3Fz%3B%0A%20%20%20%20%20wdt%3AP625%20%3Fcoor.%0A%20%20%20%20%20OPTIONAL%7B%20%20%7B%3Fid%20wdt%3AP669%20%3Fst.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fst%20rdfs%3Alabel%20%3Fstreet%7DFILTER%20(lang(%3Fstreet)%3D%22es%22)%7D.%0A%20%20%0A%20%20%20%20%20OPTIONAL%7B%20%3Fid%20wdt%3AP973%20%3Furl%7D.%0A%20%20%3Fz%20rdfs%3Alabel%20%3FtipoLugar.%0A%20%20%7B%0A%20%20SELECT%20DISTINCT%20%3Fid%7B%7D%0A%20%20%7D%0A%20%20%0A%20%20%0A%20%20FILTER%20(%20lang(%3FtipoLugar)%20%3D%20%22es%22%20%26%26%20lang(%3Fnombre)%20%3D%20%22es%22%20%20%26%26%20%3Fz!%3Dwd%3AQ79007%20%26%26%20%3Fz!%3Dwd%3AQ10267336%20%0A%20%20%20%20%20%20%20%20%20%20%26%26%20%3Fz!%3Dwd%3AQ41176%20%26%26%20%3Fz!%3Dwd%3AQ29002287%20%26%26%20%3Fz!%3Dwd%3AQ721747%20%26%26%20%3Fz!%3Dwd%3AQ3032114%20%0A%20%20%20%20%20%20%20%20%20%26%26%20%3Fz!%3Dwd%3AQ369730%20%26%26%20%3Fz!%3Dwd%3AQ1200957%20%26%26%20%3Fz!%3Dwd%3AQ371752)%0A%20%20%0A%7DORDER%20BY%20desc(%3Furl)%20LIMIT%2020";
    }

}
