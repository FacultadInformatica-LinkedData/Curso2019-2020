var x = document.getElementById("bubblechart");
var y = document.getElementById("piechart");
var z = document.getElementById("columnchart");

//Ocultamos todos los chart al inicio
x.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';

//Obtenemos el contenido de los archivos
var fuentes;
var query;
$.get('./js/fuentes.ttl', function(data) {
    fuentes =data;
});
$.get('./js/query.txt', function(data) {
    query =data;
});

//Ejecutamos la query sobre nuestro ttl
var sf = new SparqlFiddle();
var arr;

//Creamos el pie chart
var pie = function(){

    x.style.display = 'none';
    z.style.display = 'none';

    var fiddle = {
        data  : fuentes,
        query : query,
        wanted : "HTML"

    };
    sf.run(fiddle).then( results => {
        arr = results;
    }, err => console.log(err));

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Distrito', 'Fuentes'],
            ['Carabanchel', (arr.match(/CARABANCHEL/g)).length],
            ['Fuencarral-El Pardo', (arr.match(/FUENCARRAL-EL PARDO/g)).length],
            ['Latina', (arr.match(/LATINA/g)).length],
            ['Puente de Vallecas', (arr.match(/PUENTE VALLECAS/g)).length],
            ['Ciudad Lineal', (arr.match(/CIUDAD LINEAL/g)).length],
            ['Hortaleza',   (arr.match(/HORTALEZA/g)).length ],
            ['San Blas',  (arr.match(/SAN BLAS/g)).length],
            ['Tetuan',  (arr.match(/TETUAN/g)).length],
            ['Arganzuela',  (arr.match(/ARGANZUELA/g)).length],
            ['Villaverde', (arr.match(/VILLAVERDE/g)).length],
            ['Salamanca',  (arr.match(/SALAMANCA/g)).length],
            ['Chamartin',  (arr.match(/CHAMARTIN/g)).length],
            ['Chamberi',  (arr.match(/CHAMBERI/g)).length],
            ['Usera',  (arr.match(/USERA/g)).length],
            ['Centro',  (arr.match(/CENTRO/g)).length],
            ['Retiro', (arr.match(/RETIRO/g)).length],
            ['Moncloa-Aravaca', (arr.match(/MONCLOA-ARAVACA/g)).length],
            ['Villa de Vallecas', (arr.match(/VILLA DE VALLECAS/g)).length],
            ['Moratalaz', (arr.match(/MORATALAZ/g)).length],
            ['Vicalvaro', (arr.match(/VICÁLVARO/g)).length],
            ['Barajas', (arr.match(/BARAJAS/g)).length],
        ]);
        var options = {
            title: 'FUENTES POR DISTRITO',
            backgroundColor: { fill:'transparent' },
            pieHole: 0.2
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
    y.style.display = 'block';
};

//Creamos el bar chart
var bar = function(){

    x.style.display = 'none';
    y.style.display = 'none';

    var fiddle = {
        data  : fuentes,
        query : query,
        wanted : "HTML"

    };
    sf.run(fiddle).then( results => {
        arr = results;
    }, err => console.log(err));

    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Distrito', 'Fuentes', { role: 'auto' }],
            ['Carabanchel', 243998 / (arr.match(/CARABANCHEL/g)).length, 'blue'],
            ['Fuencarral-El Pardo', 238756 / (arr.match(/FUENCARRAL-EL PARDO/g)).length, 'blue'],
            ['Latina', 233808 / (arr.match(/LATINA/g)).length, 'blue'],
            ['Puente de Vallecas', 227595 / (arr.match(/PUENTE VALLECAS/g)).length, 'blue'],
            ['Ciudad Lineal', 212529 / (arr.match(/CIUDAD LINEAL/g)).length, 'blue'],
            ['Hortaleza', 180462 /(arr.match(/HORTALEZA/g)).length, 'blue'],
            ['San Blas',  154357 / (arr.match(/SAN BLAS/g)).length, 'blue'],
            ['Tetuan',  153789 / (arr.match(/TETUAN/g)).length, 'blue'],
            ['Arganzuela',  151965 / (arr.match(/ARGANZUELA/g)).length, 'blue'],
            ['Villaverde', 149003 / (arr.match(/VILLAVERDE/g)).length, 'blue'],
            ['Salamanca',  143800 / (arr.match(/SALAMANCA/g)).length, 'blue'],
            ['Chamartin',  143424 / (arr.match(/CHAMARTIN/g)).length, 'blue'],
            ['Chamberi',  137401 / (arr.match(/CHAMBERI/g)).length, 'blue'],
            ['Usera',  134791 / (arr.match(/USERA/g)).length, 'blue'],
            ['Centro',  131928 / (arr.match(/CENTRO/g)).length, 'blue'],
            ['Retiro', 118516 / (arr.match(/RETIRO/g)).length, 'blue'],
            ['Moncloa-Aravaca', 116903 / (arr.match(/MONCLOA-ARAVACA/g)).length, 'blue'],
            ['Villa de Vallecas', 104421 / (arr.match(/VILLA DE VALLECAS/g)).length, 'blue'],
            ['Moratalaz', 94197 / (arr.match(/MORATALAZ/g)).length, 'blue'],
            ['Vicalvaro', 70051 / (arr.match(/VICÁLVARO/g)).length, 'blue'],
            ['Barajas', 46876 / (arr.match(/BARAJAS/g)).length, 'blue'],
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            { calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation" },
            2]);

        var options = {
            title: 'FUENTE POR X HABITANTES',
            backgroundColor: { fill:'transparent' },
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart"));
        chart.draw(view, options);
    }
    z.style.display = 'block';
};

//Creamos bubble chart
function bubble() {
    y.style.display = 'none';
    z.style.display = 'none';
    x.style.display = "block";
}