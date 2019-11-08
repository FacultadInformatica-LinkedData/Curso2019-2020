import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { icon, Point } from "leaflet";
import {
  Grid,
  Typography,
  TextField,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import LocationOn from "@material-ui/icons/LocationOn";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { sym, graph, parse } from "rdflib";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 652,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -10,
    padding: 20
  },
  textField: {
    backgroundColor: theme.palette.background.paper,
    minWidth: "100%",
    marginTop: theme.spacing(2)
  },
  grid: {
    height: document.querySelectorAll("div").offsetHeight
  }
}));

const mean = nums => {
  return nums.reduce((a, k) => a + k) / nums.length;
};
const doc = sym("http://www.localizacion.es/ontology/localizacion#resource");
const store = graph();

window
  .fetch(require("./sitios_culturales.ttl"))
  .then(res => res.text())
  .then(res => {
    parse(res, store, doc.uri, "text/turtle");
  });

function getImg(ttlImage) {
  let uri = "https://en.wikipedia.org/w/api.php?action=query&titles=Image:"+ ttlImage +"&prop=imageinfo&iiprop=url&format=json&origin=*"
  return window.fetch(uri)
}
const MyMap = props => {
  const markerIcon = icon({
    iconUrl: "marker.svg",
    iconRetinaUrl: "marker.svg",
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new Point(60, 60)
  });
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css"
      />
      <Map
        center={props.center || [40.416945, -3.703512]}
        zoom={props.zoom || 13}
        length={4}
        doubleClickZoom={false}
        boxZoom={false}
        scrollWheelZoom={false}
        dragging={false}
        preferCanvas={true}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {props.search.length > 0 &&
          props.search.map((mark, index) => {
            return (
              <Marker
                onClick={props.getInfo(mark.id)}
                key={`mark_${mark.id}_${index}`}
                position={[
                  mark["latitud"],
                  mark["longitud"]
                ]}
                icon={markerIcon}
              >
                <Popup
                  key={`popup_${mark.id}_${index}`}
                  closeButton={false}
                  onClose={props.getInfo(mark.id)}
                >
                  <Typography
                    key={`title_${mark.id}_${index}`}
                    variant="h5"
                    component="h3"
                  >
                    {mark["nombre"]}
                  </Typography>
                </Popup>
              </Marker>
            );
          })}
      </Map>
    </div>
  );
};
const cleanChars = chars => {
  return chars
    .replace("á", "a")
    .replace("é", "e")
    .replace("í", "i")
    .replace("ó", "o")
    .replace("ú", "u")
}
function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    search: "",
    results: [],
    center: undefined,
    zoom: undefined,
    open: {},
    loading: false
  });
  let index = 0;
  console.log("render")
  const searcherHandleChange = valuesKey => e => {
    setValues({ ...values, [valuesKey]: e.target.value });
  };
  const rdfSearcher =  () => {
    //TODO cuando busco con un valor vacío debería limpiar el mapa y la lista
    let table = {};
    if (values.search.length > 0) {
      setValues({
        ...values,
        loading: true
      })
      let ids = store
        .match()
        .filter(itemsToFilter =>
          cleanChars(itemsToFilter.object.value.toLowerCase()).match(cleanChars(values.search.toLowerCase()))
        )
        .map(machedElements => machedElements.subject.value);

      let searchResult = store
        .match()
        .filter(itemsToFilter => ids.indexOf(itemsToFilter.subject.value) !== -1);

      searchResult.forEach(a => {
        return (table[a.subject.value] = {
          ...table[a.subject.value],
          [a.predicate.value.split("#")[1]]: a.object.value
        });
      });

    }
    if (Object.keys(table).length > 0) {
      let key = 0
      let keys = Object.keys(table).map(() => 0)
      let interval = setInterval(()=> {
          if(keys.reduce((a, k) => a+k) === keys.length) {
            console.log("clearInterval")
            clearInterval(interval)
            setValues({
              ...values,
              results: Object.keys(table).map(key => ({ ...table[key], id: key })),
              center: [
                mean(
                  Object.keys(table).map(key =>
                    Number(table[key]["latitud"])
                  )
                ),
                mean(
                  Object.keys(table).map(key =>
                    Number(table[key]["longitud"])
                  )
                )
              ],
              zoom: 14,
              loading: false
            });
          } else {
            console.log("loading...")
          }
        }
        , 100)
      Object.keys(table).map(k => {
        getImg(table[k].image)
          .then(res => res.json())
          .then(res => {
            let imageinfo = Object.values(res.query.pages)[0].imageinfo
            table[k].image = imageinfo && imageinfo[0] && imageinfo[0].url
            keys[key] = 1
            key++
          })
      })
    } else {
      console.log("no se ha encontrado nada... :/")
      setValues({
        ...values,
        results: [],
        center: undefined,
        zoom: undefined,
        loading: false
      });
    }
  };
  const keyPressEvent = funct => e => {
    if (e.keyCode === 13) {
      funct();
    }
  };
  const getInfo = id => () => {
    if (values.open[id] !== undefined) {
      setValues({
        ...values,
        open: { ...values.open, [id]: !values.open[id] }
      });
    } else {
      setValues({
        ...values,
        open: { ...values.open, [id]: true }
      });
    }
  };
  return (
    <Grid
      className={classes.root}
      container
      direction={"row"}
      justify={"space-between"}
      spacing={16}
      alignItems={"stretch"}
    >
      <Grid className={classes.grid} item xs={12}>
        <Typography variant="h4" align="center">
          Cultural Race
        </Typography>
        <Typography align="center">
          Easiest and faster way to find cultural tours around Madrid.
        </Typography>
        <TextField
          label="Buscar"
          className={classes.textField}
          onChange={searcherHandleChange("search")}
          margin="normal"
          variant="outlined"
          onKeyDown={keyPressEvent(rdfSearcher)}
        />
        {!values.loading ?
        <Fragment>
        <MyMap
          search={values.results}
          zoom={values.zoom}
          center={values.center}
          getInfo={getInfo}
        />
        <List component="nav" aria-label="main mailbox folders">
          {values.results.length > 0 &&
            values.results.map(res => {
            index++;
            let open = values.open !== undefined ? values.open[res.id] : false;
            return [
            <ListItem
            key={`list_${res.id}_${index}`}
            dense
            button
            className={classes.list}
            onClick={getInfo(res.id)}
            >
            <ListItemIcon>
            <LocationOn />
            </ListItemIcon>
            <ListItemText
            primary={res["nombre"]}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>,
            <Collapse key={`colapse_${res.id}_${index}`} in={open}>
            <Typography
            key={`colapse_img_${res.id}_${index}`}
            component="p"
            variant="body2"
            paragraph
            >
            <img src={res["image"] || ""} style={{maxWidth: 575}}/>
            </Typography>
            <Typography
            key={`colapse_desc_${res.id}_${index}`}
            component="p"
            variant="body2"
            paragraph
            >
            {res["descripcion"]}
            </Typography>
            <Typography
            key={`colapse_transporte_${res.id}_${index}`}
            component="p"
            variant="body2"
            paragraph
            >
            {res["transporte"]}
            </Typography>
            </Collapse>
            ];
          })}
          </List>
        </Fragment>
        :"Cargando..."}

      </Grid>
    </Grid>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
