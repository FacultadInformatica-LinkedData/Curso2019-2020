import { sym, graph, parse } from "rdflib";
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const doc = sym("http://www.aparcamientospublicomadrid.com/recurso");
const store = graph();

const res = require("./aparcmadrid.ttl");

/*const p1 = window
  .fetch(require("./aparcmadrid.ttl"))
  .then(res => res.text())
  .then(res => parse(res, store, doc.uri, "text/turtle"));
*/
parse(res, store, doc.uri, "text/turtle");

function App() {
  const [values, setValues] = React.useState({
    barrios: store
      .match()
      .filter(storeE => storeE.predicate.value.match("barrio"))
      .map(storeE => {
        return {
          id: storeE.object.value,
          nombre: storeE.object.value
            .split("http://www.aparcamientospublicomadrid.com/recurso/")[1]
            .replace("+", " ")
            .replace("+", " ")
            .replace("%C3%91", "Ñ")
        };
      })
      .filter((storeE, index, self) => self.indexOf(storeE) === index),
    distritos: store
      .match()
      .filter(storeE => storeE.predicate.value.match("distrito"))
      .map(storeE => {
        return {
          id: storeE.object.value,
          nombre: storeE.object.value
            .split("http://www.aparcamientospublicomadrid.com/recurso/")[1]
            .replace("+", " ")
        };
      })
      .filter((storeE, index, self) => self.indexOf(storeE) === index),
    navbar: "barrios",
    aparcamientos: [],
    informacion: []
  });
  const changeList = mostrar => event => {
    setValues({
      ...values,
      navbar: mostrar ? event.target.value : "barrios"
    });
  };
  const getAparcamiento = event => {
    event.preventDefault();
    const ids = store
      .match()
      .filter(el => el.object.value.match(event.currentTarget.id))
      .map(elem => elem.subject.value);
    //TODO si el ids está vacío solventar ese problema (quizas un mensaje informativo)
    setValues({
      ...values,
      navbar: "aparcamientos",
      aparcamientos: ids.map((elem, index) => {
        const result = store
          .match()
          .filter(
            fil =>
              fil.subject.value.match(elem) &&
              fil.predicate.value.match("#nombre")
          )
          .map(ob => ob.object.value);
        return {
          id: result[0] + index,
          nombre: result
        };
      })
    });
  };

  const buscador = elem => console.log(store.match());
  return (
    <div className="App">
      {values.navbar !== "aparcamientos" ? (
        <select onChange={changeList(true)}>
          <option>barrios</option>
          <option>distritos</option>
        </select>
      ) : (
        <button onClick={changeList(false)}>Atras</button>
      )}
      <ul>
        {values[values.navbar].map(e => (
          <li id={e.id} onClick={getAparcamiento}>
            {e.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
