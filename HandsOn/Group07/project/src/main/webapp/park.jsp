<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 <!DOCTYPE html> 
<html>
<head>
<title>Park</title>
 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/our.css">

</head>
<body>
<!-- Body -->
<div class="bg">
  <!-- Logo -->
  <a href="/parks/index.html"><img class="img-responsive img-responsive-index" src="img/logo.png"/></a>
  <div class="table">
    <table class="table table-hover">
      <tr>
        <th>Name:</th>
        <th><c:out value="${name}"/> </th>
      </tr>
      <tr>
        <th>Description:</th>
        <th><c:out value="${description}"/> </th>
      </tr>
      <tr>
        <th><c:out value="${nameDis}"/> </th>
        <th><img src='<c:out value="${imgDis}"/>' height="200" width="200"/></th>
      </tr>
      <tr>
        <th>Transport:</th>
        <th><c:out value="${transport}"/> </th>
      </tr>
      <tr>
          <th>Trees:</th>
          <th><div class="table">
              <table class="table table-hover">
                  <c:forEach items="${trees}" var="tree">
                      <c:if test="${not empty tree.name}">
                      <tr>
                          <th><c:out value="${tree.name}"/> </th>
                          <th><img src='<c:out value="${tree.image}"/>' height="200" width="200"/></th>
                        </tr>
                      </c:if>
                  </c:forEach>
                </table>
              </div> </th>
        </tr>
  
    

    </table>
  </div>



<!-- Footer -->
 <div class="fixed-bottom footer"><hr/>Parks. 2019. </a></div>
</div>
</body>
</html>