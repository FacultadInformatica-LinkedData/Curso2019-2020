<%-- 
    Document   : newjsp
    Created on : 21/10/2019, 06:08:53 PM
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
        <title>Eventos Madrid-Home</title>
        <jsp:include page="vendor/styles.html" /> 
    </head>
    <body id="page-top">

        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Eventos Madrid</a> 
                <!--<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                       <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#about">About</a>
                        </li> 

                    </ul>
                </div>!-->
            </div>
        </nav>
        <!-- Header -->
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 ">Madrid</h1>
                    

                    <form class="form-inline" method="post" id="dateFilterS" action="EventsSearch" autocomplete="off">
                        <div class="form-group mb-2">.
                            <label class="text-white-50 " for="date">Desde:</label>
                            <input class="form-control" placeholder="MM/DD/YYY" id="datein" name="datein" width="270" />
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <label class="text-white-50 " for="date">Hasta:</label>
                            <input class="form-control" placeholder="MM/DD/YYY" id="dateout" name="dateout" width="270" />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Buscar</button>
                    </form>
                </div>
            </div>
        </header>
        <script>
            $('#datein').datepicker({
                uiLibrary: 'bootstrap'
            });
            $('#dateout').datepicker({
                uiLibrary: 'bootstrap'
            });
        </script>


        <!-- Bootstrap core JavaScript -->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


        <!-- Custom scripts for this template -->
        <script src="vendor/js/grayscale.min.js"></script>

    </body>

</html>



