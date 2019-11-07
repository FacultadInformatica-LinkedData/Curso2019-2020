<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
    <head>
        <title>AppParquesYJardines</title>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1.0">
        <style>
            html, body {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;
            }
            #map {
                height:80%;
            }
        </style>
        <link rel="stylesheet" href="css/our.css">
    </head>
    <!-- Contenido de la página web -->
    <body class="bg">

      <a href="/parks/"><img class="img-responsive img-responsive-index" src="img/logo.png"/></a>


        <h1>Seleccione uno de los parques de Madrid</h1>

        <div id="map"></div>
        <script>
            var map;
            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: new google.maps.LatLng(40.4165000,-3.7025600),
                    zoom: 11,
                    mapTypeId: 'roadmap'
                });

                var lat =[
                    <c:forEach items="${lats}" var="lat">
                        <c:out value="${lat}"/>,
                    </c:forEach>
                0];

                var long =[<c:forEach items="${lons}" var="lon">
                    <c:out value="${lon}"/>,
                </c:forEach>
            0];

                var i;
                var marker;
                var infowindow;
                //create markers
                for( i=0; i< long.length;i++){

                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat[i],long[i]),
                        map: map,
                        icon:'http://maps.google.com/mapfiles/kml/pal2/icon12.png'
                    });

                    infowindow = new google.maps.InfoWindow();

                    google.maps.event.addListener(marker, 'click', (function(marker,i) {
                        return function() {
                            infowindow.setContent("Hola, soy: "+ lat[i]+", "+long[i]);
                            infowindow.open(map, marker);
                            window.location="/parks/park?lat="+ lat[i]+"&lon="+long[i];
                        }
                    })(marker,i));
                };

            }
        </script>
        <div>
            </hr>
        </div>
    </div>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlWQue4xHaVNYiotdy56ZYjlRDqD3AzTI&callback=initMap"
            async defer></script>
    
    </body>
</html>
