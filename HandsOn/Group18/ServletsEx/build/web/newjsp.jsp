<%-- 
    Document   : newjsp
    Created on : 21/10/2019, 06:08:53 PM
    Author     : monts
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>

<head>
    <title>A Leaflet map!</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
    <style>
        #map {
            width: 900px;
            height: 500px
        }
    </style>
</head>

<body>

    <div id="map"></div>

    <script>
        //just for the demo
        var defaultCoords = [40.44694705960048, -3.7034466862678523];

        //set up our map
        var map = L.map('map').setView(defaultCoords, 12);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 20
            }).addTo(map);

        //this is how we are going to demo our sendlatlng function
        map.on('click', onMapClick);


        //use this variable to track our marker here outside of the sendlatlng function
        var myMarker = L.marker(defaultCoords).addTo(map);

        //in our example, we are going to listend for clicks on the map to trigger
        //changes to the coords with our sendlatlng function
        //function onMapClick(e) {
        //    sendlatlng(e.latlng)
        //}


        //update the map and marker positions based on the coords passed to the function
        //we will just update our existing map and myMarker variables instead of create new ones
        function sendlatlng(coords) {
            map.setView(coords, 12);
            myMarker.setLatLng(coords);

        }
    </script>
</body>

</html>
