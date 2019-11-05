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
        <jsp:include page="vendor/styles.html" /> 

    </head>

    <body>

        <div class="d-flex" id="wrapper">

            <!-- Sidebar -->
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">Eventos Madrid   </div>
                <div class="list-group list-group-flush">
                    <%

                        //for () {
                    %>
                    <a href="#" class="list-group-item list-group-item-action bg-light"><%= (String)request.getAttribute("titleO") %></a>
                    <%                        //}
                    %>
                </div>
            </div>
            <!-- /#sidebar-wrapper 

            <!-- Page Content -->
            <div id="page-content-wrapper">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="btn btn-primary" id="menu-toggle">></button>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="" method="post" id="dateFilterS" action="EventsSearch" autocomplete="off">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <input class="form-control" placeholder="Desde:" id="datein" width="270" value=<%=request.getParameter("datein") %>/>
                                </li>
                                <li class="nav-item">
                                    <input class="form-control" placeholder="Hasta:" id="dateout" width="270" value=<%=request.getParameter("dateout") %>/>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Audiencia
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <% String Atypes[] = (String[]) request.getAttribute("Atypes");
                                            for (String t : Atypes) {
                                        %>
                                        <div class="checkbox">
                                            <label><input type="checkbox" name="audience" value="<%=t%>"> <%=t%></label>
                                        </div>

                                        <%
                                            }
                                        %>
                                    </div>
                                </li>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tipo
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <% String Etypes[] = (String[]) request.getAttribute("Etypes");
                                            for (String t : Etypes) {
                                        %>
                                        <div class="checkbox">
                                            <label><input type="checkbox" name="type" value="<%=t%>"> <%=t%></label>
                                        </div>

                                        <%
                                            }
                                        %>
                                        <!--<div class="dropdown-divider"></div>!-->

                                    </div>
                                </li>
                                <li class="nav-item">
                                    <button class="btn" type="submit">Buscar</button>
                                </li>
                            </ul>

                        </form>
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
            var map = L.map('mapid').setView([<%=40.416722641036316%>,<%=-0%>, <%=-3.7034466862678523%>],<%=13%>);
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
