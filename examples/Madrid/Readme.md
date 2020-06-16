Se ha realizado la creación de un RDF a partir de un archivo dado, perteneciente a esta URL https://datos.madrid.es/sites/v/index.jsp?vgnextoid=b011ff3ab709b510VgnVCM2000001f4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD
intentado seguir fielmente el vocabulario de la siguiente URI http://vocab.ciudadesabiertas.es/def/sector-publico/agenda-municipal

Siguiendo el enlace del vocabulario y los ejemplos que se encuentran en este, se ha pasado a utilizar la herramienta Open Refine con la
extension de RDF, con el objetivo de realizar la correspondiente transformación.

Para ello se han añadido los prefijos en el vocabulario y la URL base de donde partiran los diferentes eventos de la URI de Madrid,
en este punto se ha pasado a generar una serie de identificadores que formaran parte de las URI's, estos identificadores se han obtenido
mediante operaciones de limpieza de datos y combinaciones con otros elementos, por ejemplo el identificador del evento se obtuvo a partir
del nombre del evento y su hora correspondiente.

Pasando a generar representaciones por ejemplo la de un evento que se ha generado a traves de la instancia esagm:Evento con las propiedades
schema:Name que corresponde al titulo del evento y schema:StartDate que corresponde a la fecha de Inicio de estos eventos.

Una vez generado el Rdf con todos los datos disponibles en el archivo obtenido, se envio para su correccion a Oscar Corcho el cual 
nos ha mandado unos ajustes para el RDF, corregidos estos y entregado, se ha pasado a la subida de este archivo.
