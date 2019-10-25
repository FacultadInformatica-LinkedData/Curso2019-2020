<%-- 
    Document   : principalPage
    Created on : 25/10/2019, 04:16:52 PM
    Author     : monts
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">


        <title>Eventos Madrid - Mapa interactivo</title>
          <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="vendor/css/simple-sidebar.css" rel="stylesheet">

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossorigin=""/>

        <!-- Make sure you put this AFTER Leaflet's CSS -->
        <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
        crossorigin=""></script>


    </head>

    <body>

        <div class="d-flex" id="wrapper">

            <!-- Sidebar -->
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">Eventos Madrid </div>
                <div class="list-group list-group-flush">
                    <%
                        for (int num = 1; num <= 3; num++) {
                    %>
                    <a href="#" class="list-group-item list-group-item-action bg-light"><%= num%>Eventooooooooooooo</a>
                    <%
                        }
                    %>
                </div>
            </div>
            <!-- /#sidebar-wrapper -->

            <!-- Page Content -->
            <div id="page-content-wrapper">

                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <!--<li class="nav-item active">
                                <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                            </li> 
                            !-->
                                                     <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filtros
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                    <form  method="post" id="dateFilter" action="NewServlet">

                                        <label  for="date">Desde:</label>
                                        <input class="form-control" placeholder="MM/DD/YYY" id="datein" width="270" />

                                        <label  for="date">Hasta:</label>
                                        <input class="form-control" placeholder="MM/DD/YYY" id="dateout" width="270" />


                                        <div class="dropdown-divider"></div>
                                        <%
                                            for (int num = 1; num <= 3; num++) {
                                        %>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value=""> <%=num%></label>
                                        </div>

                                        <%
                                            }
                                        %>

                                        <div class="dropdown-divider"></div>
                                        <button type="submit" class="btn btn-primary ">Buscar</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="container-fluid">
                    <div id="mapid"></div>

                </div>
            </div>
            <!-- /#page-content-wrapper -->

        </div>
        <!-- /#wrapper -->

         <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


        <!-- Menu Toggle Script -->
        <script>
            var map = L.map('mapid').setView([<%=51.505%>,<%=-0%>, <%=-0.09%> ],<%=13%>);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                    .bindPopup('Tittle Event')
                    .openPopup();
        </script>
        <script>
            $("#menu-toggle").click(function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
        </script>
    </body>
</html>
