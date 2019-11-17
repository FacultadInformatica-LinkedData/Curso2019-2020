import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Map,
    TileLayer,
    Marker,
    Popup
    // PropTypes as MapPropTypes
} from "react-leaflet";

const request = require('request-promise');
// const ReactLeaflet = require("react-leaflet");
const MyPopupMarker = ({ children, position }) => (
    <Marker position={position}>
      <Popup>
        <span>{children}</span>
      </Popup>
    </Marker>
);
// MyPopupMarker.propTypes = {
//   children: MapPropTypes.children,
//   position: MapPropTypes.latlng
// };

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ));
    return <div style={{ display: "none" }}>{items}</div>;
};
MyMarkersList.propTypes = {
    markers: PropTypes.array.isRequired
};

export default class CustomMap extends Component {
    state = {
        lat: 40.416775,
        lng: -3.703790,
        zoom: 13,
        markers: []
    };

    constructor() {
        super();
        // const { markers } = this.props;
    }

    render() {
        // const markers = p.responseContent.body;
        const markers = [
            {
                "key": "100 años de la Gran Vía",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "100 años de la Gran Vía",
                "price": 0
            },
            {
                "key": "11 Simposio En Red. De cuerpo y experimento",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "11 Simposio En Red. De cuerpo y experimento",
                "price": 0
            },
            {
                "key": "14 kilómetros",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "14 kilómetros",
                "price": 0
            },
            {
                "key": "1, 2, 3 IMAGINA'. Cía. Gorriones teatro.",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "1, 2, 3 IMAGINA'. Cía. Gorriones teatro.",
                "price": 0
            },
            {
                "key": "1ª Vuelta al mundo: Magallanes - El Cano",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "1ª Vuelta al mundo: Magallanes - El Cano",
                "price": 0
            },
            {
                "key": "33º Certamen Coreográfico de Madrid",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "33º Certamen Coreográfico de Madrid",
                "price": "12  euros general / 10  euros reducida"
            },
            {
                "key": "5 hábitos para conseguir una pareja extraordinaria",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "5 hábitos para conseguir una pareja extraordinaria",
                "price": 0
            },
            {
                "key": "70 Aniversario Radio Inter. Pensando siempre en ti",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "70 Aniversario Radio Inter. Pensando siempre en ti",
                "price": 0
            },
            {
                "key": "70 Aniversario Radio Inter. Pensando siempre en ti",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "70 Aniversario Radio Inter. Pensando siempre en ti",
                "price": 0
            },
            {
                "key": "70 Aniversario Radio Inter. Pensando siempre en ti",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "70 Aniversario Radio Inter. Pensando siempre en ti",
                "price": 0
            },
            {
                "key": "A DOUBLE LIFE / CRONOFOBIA",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "A DOUBLE LIFE / CRONOFOBIA",
                "price": 0
            },
            {
                "key": "A la vuelta de la esquina",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "A la vuelta de la esquina",
                "price": 0
            },
            {
                "key": "A Mano",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "A Mano",
                "price": 0
            },
            {
                "key": "A Mano",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "A Mano",
                "price": 0
            },
            {
                "key": "Abiertamente",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Abiertamente",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.393189968014696,
                    -3.6554147649183935
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.40971737692924,
                    -3.652982210911513
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.42738668300474,
                    -3.7105999955473625
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.44640229188281,
                    -3.6117933204271098
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.475716881030685,
                    -3.6466725775035296
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelas, madres e hijas, de Alberto Sebastián",
                "position": [
                    40.40003652682007,
                    -3.7074488154950576
                ],
                "children": "Abuelas, madres e hijas, de Alberto Sebastián",
                "price": 0
            },
            {
                "key": "Abuelita, llévame a ver las estrellas",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "Abuelita, llévame a ver las estrellas",
                "price": 0
            },
            {
                "key": "Acción!MAD12 - Acción!MAD18",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Acción!MAD12 - Acción!MAD18",
                "price": "Entrada libre"
            },
            {
                "key": "Acción!MAD19",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Acción!MAD19",
                "price": "Entrada libre"
            },
            {
                "key": "Actividades en el centro juvenil 'Hontalbilla' (Fuencarral - El Pardo). Octubre 2019",
                "position": [
                    40.49231828430878,
                    -3.6906342081203283
                ],
                "children": "Actividades en el centro juvenil 'Hontalbilla' (Fuencarral - El Pardo). Octubre 2019",
                "price": 0
            },
            {
                "key": "Acto de clausura con el Ballet ARA de Madrid",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Acto de clausura con el Ballet ARA de Madrid",
                "price": 0
            },
            {
                "key": "Acto Inaugural",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Acto Inaugural",
                "price": 0
            },
            {
                "key": "Actuación de la charanga La Txuzaranga",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Actuación de la charanga La Txuzaranga",
                "price": 0
            },
            {
                "key": "Afuera es un lugar",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Afuera es un lugar",
                "price": 0
            },
            {
                "key": "AGENCIA_RV. Grupo de investigación y creación de narrativas en Realidad Virtual",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "AGENCIA_RV. Grupo de investigación y creación de narrativas en Realidad Virtual",
                "price": 0
            },
            {
                "key": "Agua Salada",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Agua Salada",
                "price": 0
            },
            {
                "key": "Agua y nuevas fuentes de energía. El abastecimiento de Madrid   (1850-1900)",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "Agua y nuevas fuentes de energía. El abastecimiento de Madrid   (1850-1900)",
                "price": 0
            },
            {
                "key": "Al compás del sentimiento bravo jóvenes y mayores",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Al compás del sentimiento bravo jóvenes y mayores",
                "price": 0
            },
            {
                "key": "Al final de la cuerda",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "Al final de la cuerda",
                "price": 0
            },
            {
                "key": "Al tuntún, de Légolas",
                "position": [
                    40.46745337921317,
                    -3.684611277444272
                ],
                "children": "Al tuntún, de Légolas",
                "price": 0
            },
            {
                "key": "Al tuntún, de Légolas",
                "position": [
                    40.43199309720514,
                    -3.6709292435437137
                ],
                "children": "Al tuntún, de Légolas",
                "price": 0
            },
            {
                "key": "Al tuntún, de Légolas Colectivo Escénico",
                "position": [
                    40.39597072367931,
                    -3.7562716852987847
                ],
                "children": "Al tuntún, de Légolas Colectivo Escénico",
                "price": 0
            },
            {
                "key": "Aladdin",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Aladdin",
                "price": 0
            },
            {
                "key": "Alcalá de Henares, ciudad del saber",
                "position": [
                    0,
                    0
                ],
                "children": "Alcalá de Henares, ciudad del saber",
                "price": 0
            },
            {
                "key": "Alegría 2",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Alegría 2",
                "price": 0
            },
            {
                "key": "Alfabetos mágicos: Cien años con Hermann &amp; Gudrun Zapf",
                "position": [
                    40.4138864430981,
                    -3.7054840717141966
                ],
                "children": "Alfabetos mágicos: Cien años con Hermann &amp; Gudrun Zapf",
                "price": 0
            },
            {
                "key": "Algo pasa con Mary",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "Algo pasa con Mary",
                "price": 0
            },
            {
                "key": "Algún día todo esto será tuyo.",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "Algún día todo esto será tuyo.",
                "price": 0
            },
            {
                "key": "Aliteraciones y cacofonías: cómo evitarlas",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Aliteraciones y cacofonías: cómo evitarlas",
                "price": 0
            },
            {
                "key": "Alma flamenca",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Alma flamenca",
                "price": 0
            },
            {
                "key": "Alma se lamenta",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Alma se lamenta",
                "price": 0
            },
            {
                "key": "Alquimia del espíritu",
                "position": [
                    40.402190438836826,
                    -3.6772826298329084
                ],
                "children": "Alquimia del espíritu",
                "price": 0
            },
            {
                "key": "American Cultural Bites: Broadway state of mind: American musicals and U.S. cultural history",
                "position": [
                    40.43199309720514,
                    -3.6709292435437137
                ],
                "children": "American Cultural Bites: Broadway state of mind: American musicals and U.S. cultural history",
                "price": 0
            },
            {
                "key": "Anafha",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Anafha",
                "price": 0
            },
            {
                "key": "Aniclown",
                "position": [
                    40.46498334634005,
                    -3.650568266584692
                ],
                "children": "Aniclown",
                "price": 0
            },
            {
                "key": "Anillamiento cinentífico en El Pardo",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Anillamiento cinentífico en El Pardo",
                "price": 0
            },
            {
                "key": "Animación Musical. Pasacalles circense",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Animación Musical. Pasacalles circense",
                "price": 0
            },
            {
                "key": "Animales. El Retablo (Madrid)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "Animales. El Retablo (Madrid)",
                "price": 0
            },
            {
                "key": "Ante mis ojos / mañana a esta hora",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Ante mis ojos / mañana a esta hora",
                "price": 0
            },
            {
                "key": "Antología de la Rabia",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Antología de la Rabia",
                "price": 0
            },
            {
                "key": "Antología de la rabia",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Antología de la rabia",
                "price": 0
            },
            {
                "key": "Antonio López Cámara",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "Antonio López Cámara",
                "price": 0
            },
            {
                "key": "Aperitivo Poético:mujeres de Abya Yala",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Aperitivo Poético:mujeres de Abya Yala",
                "price": 0
            },
            {
                "key": "Aprende a bailar Marinera",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Aprende a bailar Marinera",
                "price": 0
            },
            {
                "key": "Aprender a vivir",
                "position": [
                    40.45749513485957,
                    -3.710539712535917
                ],
                "children": "Aprender a vivir",
                "price": 0
            },
            {
                "key": "Aprender a vivir",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Aprender a vivir",
                "price": 0
            },
            {
                "key": "APRES DEMAIN",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "APRES DEMAIN",
                "price": 0
            },
            {
                "key": "Área Gammers",
                "position": [
                    40.44661949643803,
                    -3.703467785151993
                ],
                "children": "Área Gammers",
                "price": 0
            },
            {
                "key": "Arganzuela 2059 - Sesión 4 -  La lucha contra el cambio climático empieza aquí",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Arganzuela 2059 - Sesión 4 -  La lucha contra el cambio climático empieza aquí",
                "price": 0
            },
            {
                "key": "Arganzuela 2059 - Sesión 6 -  Inauguración de la exposición y merchandising de guerrilla",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Arganzuela 2059 - Sesión 6 -  Inauguración de la exposición y merchandising de guerrilla",
                "price": 0
            },
            {
                "key": "Arganzuela 2059 | Sesión 5 - Arganzuela 2059: ¿utopía o distopía?",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Arganzuela 2059 | Sesión 5 - Arganzuela 2059: ¿utopía o distopía?",
                "price": 0
            },
            {
                "key": "Arizona",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Arizona",
                "price": 0
            },
            {
                "key": "Arte  en la calle",
                "position": [
                    0,
                    0
                ],
                "children": "Arte  en la calle",
                "price": 0
            },
            {
                "key": "Así baila España",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Así baila España",
                "price": 0
            },
            {
                "key": "Aspa",
                "position": [
                    40.49231828430878,
                    -3.6906342081203283
                ],
                "children": "Aspa",
                "price": 0
            },
            {
                "key": "AtariMAD",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "AtariMAD",
                "price": 0
            },
            {
                "key": "Audición de violín y pianos",
                "position": [
                    40.39976467763712,
                    -3.775144917950533
                ],
                "children": "Audición de violín y pianos",
                "price": 0
            },
            {
                "key": "Autodefensa",
                "position": [
                    40.402549313705286,
                    -3.668092320219012
                ],
                "children": "Autodefensa",
                "price": 0
            },
            {
                "key": "Autoestima: nuestros derechos asertivos",
                "position": [
                    40.46745337921317,
                    -3.684611277444272
                ],
                "children": "Autoestima: nuestros derechos asertivos",
                "price": 0
            },
            {
                "key": "Auto-coaching. Creando tu propio camino al éxito",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "Auto-coaching. Creando tu propio camino al éxito",
                "price": 0
            },
            {
                "key": "Avance del documental de la historia del barrio del Pilar",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "Avance del documental de la historia del barrio del Pilar",
                "price": 0
            },
            {
                "key": "Aves recicladoras",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Aves recicladoras",
                "price": 0
            },
            {
                "key": "Aves recicladoras",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Aves recicladoras",
                "price": 0
            },
            {
                "key": "Avishai Cohen presenta Arvoles",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Avishai Cohen presenta Arvoles",
                "price": 0
            },
            {
                "key": "Bab Sharqi",
                "position": [
                    40.40647389284976,
                    -3.7327010920242034
                ],
                "children": "Bab Sharqi",
                "price": 0
            },
            {
                "key": "BAC MADRID #0",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "BAC MADRID #0",
                "price": 0
            },
            {
                "key": "Bailando con la cámara",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Bailando con la cámara",
                "price": "Entrada libre"
            },
            {
                "key": "Baile con historia",
                "position": [
                    40.366822704148795,
                    -3.755451103709316
                ],
                "children": "Baile con historia",
                "price": 0
            },
            {
                "key": "Baile con la Orquesta  Marlen",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Baile con la Orquesta  Marlen",
                "price": 0
            },
            {
                "key": "Baile con la Orquesta Marlen",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Baile con la Orquesta Marlen",
                "price": 0
            },
            {
                "key": "Baile de Mayores",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "Baile de Mayores",
                "price": 0
            },
            {
                "key": "Baile de Mayores",
                "position": [
                    40.40731632818047,
                    -3.747465416906973
                ],
                "children": "Baile de Mayores",
                "price": 0
            },
            {
                "key": "Banco del Tiempo del Barrio de las Letras",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "Banco del Tiempo del Barrio de las Letras",
                "price": 0
            },
            {
                "key": "Banda Sinfónica Municipal",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "Banda Sinfónica Municipal",
                "price": 0
            },
            {
                "key": "Barón Ya Buk Lu",
                "position": [
                    40.39976467763712,
                    -3.775144917950533
                ],
                "children": "Barón Ya Buk Lu",
                "price": 0
            },
            {
                "key": "Barrios Orcasur",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Barrios Orcasur",
                "price": "Gratuito"
            },
            {
                "key": "Batukada Batukan",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Batukada Batukan",
                "price": 0
            },
            {
                "key": "Bebés danzan al ritmo de África 1",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Bebés danzan al ritmo de África 1",
                "price": 0
            },
            {
                "key": "Bebés danzan al ritmo de África 2",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Bebés danzan al ritmo de África 2",
                "price": 0
            },
            {
                "key": "Bebés danzan los grandes clásicos 1",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Bebés danzan los grandes clásicos 1",
                "price": 0
            },
            {
                "key": "Bebés danzan los grandes clásicos 1",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Bebés danzan los grandes clásicos 1",
                "price": 0
            },
            {
                "key": "Bebés danzan los grandes clásicos 2",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Bebés danzan los grandes clásicos 2",
                "price": 0
            },
            {
                "key": "Bebés danzan los grandes clásicos 2",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Bebés danzan los grandes clásicos 2",
                "price": 0
            },
            {
                "key": "Beca y Eva dicen que se quieren",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "Beca y Eva dicen que se quieren",
                "price": " "
            },
            {
                "key": "Benavent, Di Geraldo, Pardo",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Benavent, Di Geraldo, Pardo",
                "price": 0
            },
            {
                "key": "Berrea adultos",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Berrea adultos",
                "price": 0
            },
            {
                "key": "Berrea adultos",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Berrea adultos",
                "price": 0
            },
            {
                "key": "Berrea familiar",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Berrea familiar",
                "price": 0
            },
            {
                "key": "Berrea familiar",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Berrea familiar",
                "price": 0
            },
            {
                "key": "Berrea familiar",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Berrea familiar",
                "price": 0
            },
            {
                "key": "Bestiario de Lengüitas. Mercedes Azpilicueta",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Bestiario de Lengüitas. Mercedes Azpilicueta",
                "price": "Entrada libre"
            },
            {
                "key": "Bibliotubers",
                "position": [
                    40.393189968014696,
                    -3.6554147649183935
                ],
                "children": "Bibliotubers",
                "price": 0
            },
            {
                "key": "Biblio-ajedrez",
                "position": [
                    40.397074625115906,
                    -3.7664885474841565
                ],
                "children": "Biblio-ajedrez",
                "price": 0
            },
            {
                "key": "BICICLETAS ? NADIR ? LA MÁXIMA LONGITUD DE UN PUENTE ? LE LAPIN DE NOEL",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "BICICLETAS ? NADIR ? LA MÁXIMA LONGITUD DE UN PUENTE ? LE LAPIN DE NOEL",
                "price": 0
            },
            {
                "key": "Bienvenida al otoño",
                "position": [
                    40.378853797128336,
                    -3.781961611303212
                ],
                "children": "Bienvenida al otoño",
                "price": 0
            },
            {
                "key": "Biodanza: la danza de la vida",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "Biodanza: la danza de la vida",
                "price": 0
            },
            {
                "key": "Biodanza: la danza de la vida",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Biodanza: la danza de la vida",
                "price": 0
            },
            {
                "key": "BIVO. Generación de energía eléctrica mediante el movimiento humano (BIo VOltios)",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "BIVO. Generación de energía eléctrica mediante el movimiento humano (BIo VOltios)",
                "price": 0
            },
            {
                "key": "Blancanieves - Teatro Arbolé (Aragón)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "Blancanieves - Teatro Arbolé (Aragón)",
                "price": 0
            },
            {
                "key": "Blanco sobre blanco, de Nono Granero",
                "position": [
                    40.393189968014696,
                    -3.6554147649183935
                ],
                "children": "Blanco sobre blanco, de Nono Granero",
                "price": 0
            },
            {
                "key": "Blanco sobre blanco, de Nono Granero",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Blanco sobre blanco, de Nono Granero",
                "price": 0
            },
            {
                "key": "Blanco sobre blanco, de Nono Granero",
                "position": [
                    40.44640229188281,
                    -3.6117933204271098
                ],
                "children": "Blanco sobre blanco, de Nono Granero",
                "price": 0
            },
            {
                "key": "Blanco sobre blanco, de Nono Granero",
                "position": [
                    40.40003652682007,
                    -3.7074488154950576
                ],
                "children": "Blanco sobre blanco, de Nono Granero",
                "price": 0
            },
            {
                "key": "Blanco sobre blanco, de Nono Granero",
                "position": [
                    40.43641736294729,
                    -3.6373469713025055
                ],
                "children": "Blanco sobre blanco, de Nono Granero",
                "price": 0
            },
            {
                "key": "Blip &amp; Lúa. Una historia de amistad intergaláctica - Jujurujú Teatro (Madrid)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "Blip &amp; Lúa. Una historia de amistad intergaláctica - Jujurujú Teatro (Madrid)",
                "price": 0
            },
            {
                "key": "Blip &amp; Lúa. Una historia de amistad intergaláctica - Jujurujú Teatro (Madrid)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "Blip &amp; Lúa. Una historia de amistad intergaláctica - Jujurujú Teatro (Madrid)",
                "price": 0
            },
            {
                "key": "Bohemian Rhapsody",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Bohemian Rhapsody",
                "price": 0
            },
            {
                "key": "Bolsa de Madrid",
                "position": [
                    40.390097282918894,
                    -3.6653290637247817
                ],
                "children": "Bolsa de Madrid",
                "price": 0
            },
            {
                "key": "Boquerones y chanquetes en otoño",
                "position": [
                    40.409776375065974,
                    -3.6893771841228897
                ],
                "children": "Boquerones y chanquetes en otoño",
                "price": 0
            },
            {
                "key": "Bosques y espacios naturales en España",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Bosques y espacios naturales en España",
                "price": 0
            },
            {
                "key": "BREATHLESS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "BREATHLESS",
                "price": 0
            },
            {
                "key": "Bridget?s Plan",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Bridget?s Plan",
                "price": 0
            },
            {
                "key": "Brief Festival",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Brief Festival",
                "price": "Consultar precio en cada actividad"
            },
            {
                "key": "Bruce McClure. Hat In The Ring (2018-present)",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Bruce McClure. Hat In The Ring (2018-present)",
                "price": 0
            },
            {
                "key": "Cae la noche",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Cae la noche",
                "price": 0
            },
            {
                "key": "Cae la noche",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Cae la noche",
                "price": 0
            },
            {
                "key": "Cafarnaum",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "Cafarnaum",
                "price": 0
            },
            {
                "key": "Cafés con aroma literario",
                "position": [
                    40.378853797128336,
                    -3.781961611303212
                ],
                "children": "Cafés con aroma literario",
                "price": 0
            },
            {
                "key": "Calderón todo lo abarca",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Calderón todo lo abarca",
                "price": 0
            },
            {
                "key": "Cambia tu vida",
                "position": [
                    40.46055947228695,
                    -3.5937461811785347
                ],
                "children": "Cambia tu vida",
                "price": 0
            },
            {
                "key": "Camille",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Camille",
                "price": 0
            },
            {
                "key": "Camille",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Camille",
                "price": 0
            },
            {
                "key": "Camino de Santiago a su paso por Madrid",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Camino de Santiago a su paso por Madrid",
                "price": 0
            },
            {
                "key": "Campeones",
                "position": [
                    40.34636268334182,
                    -3.708524395897377
                ],
                "children": "Campeones",
                "price": 0
            },
            {
                "key": "Campeones",
                "position": [
                    0,
                    0
                ],
                "children": "Campeones",
                "price": 0
            },
            {
                "key": "Campeones. Centro Sociocultural Ágata",
                "position": [
                    40.34636268334182,
                    -3.708524395897377
                ],
                "children": "Campeones. Centro Sociocultural Ágata",
                "price": 0
            },
            {
                "key": "Canciones de amor de hoy y de siempre",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "Canciones de amor de hoy y de siempre",
                "price": 0
            },
            {
                "key": "Cantando a Violeta Parra",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Cantando a Violeta Parra",
                "price": 0
            },
            {
                "key": "Cantando con tapita y tapón",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Cantando con tapita y tapón",
                "price": 0
            },
            {
                "key": "Caperucita roja y el lobo feroz",
                "position": [
                    0,
                    0
                ],
                "children": "Caperucita roja y el lobo feroz",
                "price": 0
            },
            {
                "key": "Caperucita y pinocho",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Caperucita y pinocho",
                "price": 0
            },
            {
                "key": "Carrera Popular",
                "position": [
                    40.481067874165284,
                    -3.6933504628706095
                ],
                "children": "Carrera Popular",
                "price": 0
            },
            {
                "key": "CARTAS A ROXANNE",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "CARTAS A ROXANNE",
                "price": 0
            },
            {
                "key": "Cartografía socio-urbana de los barrios de Vicálvaro",
                "position": [
                    40.40260600848557,
                    -3.6072838396839617
                ],
                "children": "Cartografía socio-urbana de los barrios de Vicálvaro",
                "price": 0
            },
            {
                "key": "Caruncho, postcubismo y abstracción geométrica",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Caruncho, postcubismo y abstracción geométrica",
                "price": "Entrada libre"
            },
            {
                "key": "Casas",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Casas",
                "price": "3  euros"
            },
            {
                "key": "Celebración del año Margarita Xirgu",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "Celebración del año Margarita Xirgu",
                "price": 0
            },
            {
                "key": "Centro Cerro Buenavista Getafe",
                "position": [
                    40.40731632818047,
                    -3.747465416906973
                ],
                "children": "Centro Cerro Buenavista Getafe",
                "price": 0
            },
            {
                "key": "Century Rock. Educapop",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Century Rock. Educapop",
                "price": 0
            },
            {
                "key": "Chano Calvo",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Chano Calvo",
                "price": 0
            },
            {
                "key": "Chaplin a ritmo de jazz",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "Chaplin a ritmo de jazz",
                "price": 0
            },
            {
                "key": "Charla sobre educación",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Charla sobre educación",
                "price": 0
            },
            {
                "key": "Charlas para padres",
                "position": [
                    40.490415625465424,
                    -3.6553567517280032
                ],
                "children": "Charlas para padres",
                "price": 0
            },
            {
                "key": "Charles Tolliver presenting Paper Man @ 50",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Charles Tolliver presenting Paper Man @ 50",
                "price": 0
            },
            {
                "key": "Chelsea Hotel",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Chelsea Hotel",
                "price": 0
            },
            {
                "key": "Chernóbil",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Chernóbil",
                "price": 0
            },
            {
                "key": "Children?s Theatre Workshops in English",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Children?s Theatre Workshops in English",
                "price": 0
            },
            {
                "key": "Chocolatada",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Chocolatada",
                "price": 0
            },
            {
                "key": "Choro Das 3",
                "position": [
                    40.40159394334669,
                    -3.7491108414065617
                ],
                "children": "Choro Das 3",
                "price": 0
            },
            {
                "key": "Chucho",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "Chucho",
                "price": 0
            },
            {
                "key": "Chucuchú. Un tren de cuentos",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Chucuchú. Un tren de cuentos",
                "price": 0
            },
            {
                "key": "Chup,Chup",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Chup,Chup",
                "price": 0
            },
            {
                "key": "Ciclo de Conferencias - Parejas de Cine",
                "position": [
                    40.35639654251886,
                    -3.69405018466109
                ],
                "children": "Ciclo de Conferencias - Parejas de Cine",
                "price": 0
            },
            {
                "key": "Ciclo de conferencias: Arte Versus Crítica",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ciclo de conferencias: Arte Versus Crítica",
                "price": 0
            },
            {
                "key": "Ciclo de conferencias: Arte Versus Crítica",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ciclo de conferencias: Arte Versus Crítica",
                "price": 0
            },
            {
                "key": "Ciclo de conferencias: Arte Versus Crítica",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ciclo de conferencias: Arte Versus Crítica",
                "price": 0
            },
            {
                "key": "Ciclo ESCENARIO JOVEN - OCTUBRE",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ciclo ESCENARIO JOVEN - OCTUBRE",
                "price": 0
            },
            {
                "key": "Ciclo ESCENARIO JOVEN - OCTUBRE",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ciclo ESCENARIO JOVEN - OCTUBRE",
                "price": 0
            },
            {
                "key": "Ciclo ESCENARIO JOVEN - OCTUBRE",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ciclo ESCENARIO JOVEN - OCTUBRE",
                "price": 0
            },
            {
                "key": "Ciclo Folk Contemporáneo. Concierto de Joana Serrat",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ciclo Folk Contemporáneo. Concierto de Joana Serrat",
                "price": 0
            },
            {
                "key": "Cima en corto. Distancias cortas: un cuarto propio",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Cima en corto. Distancias cortas: un cuarto propio",
                "price": 0
            },
            {
                "key": "Cinco Lobitos, de Légolas",
                "position": [
                    40.420231627535,
                    -3.6218113860909074
                ],
                "children": "Cinco Lobitos, de Légolas",
                "price": 0
            },
            {
                "key": "Cinco lobitos, de Légolas",
                "position": [
                    40.42738668300474,
                    -3.7105999955473625
                ],
                "children": "Cinco lobitos, de Légolas",
                "price": 0
            },
            {
                "key": "Cinco lobitos, de Légolas",
                "position": [
                    40.39982891410407,
                    -3.621281890570377
                ],
                "children": "Cinco lobitos, de Légolas",
                "price": 0
            },
            {
                "key": "CINE DE LOS AFECTOS (CINEMA OF AFFECTION) [TALLER]",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "CINE DE LOS AFECTOS (CINEMA OF AFFECTION) [TALLER]",
                "price": 0
            },
            {
                "key": "Cine Documental Musical",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Cine Documental Musical",
                "price": "Entrada libre hasta completar aforo"
            },
            {
                "key": "CINE MOLÓN: LAJKA",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "CINE MOLÓN: LAJKA",
                "price": 0
            },
            {
                "key": "CINE MOLÓN: MI MEJOR AMIGA / KABOO / STUFFED / BAAGER BAADI / LIFETIME / THE GOOD QUEUE / BELOZUBKA / LE POISSON FIDÈLE",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "CINE MOLÓN: MI MEJOR AMIGA / KABOO / STUFFED / BAAGER BAADI / LIFETIME / THE GOOD QUEUE / BELOZUBKA / LE POISSON FIDÈLE",
                "price": 0
            },
            {
                "key": "CINE MOLÓN: THE STAINED CLUB / TIEMPO EN EL BOSQUE / DRY FLY / GREEN SKY / CHESS / (IN) RETURN / AT THE SANCHEZES / GORGAM-GALE MIRABAM",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "CINE MOLÓN: THE STAINED CLUB / TIEMPO EN EL BOSQUE / DRY FLY / GREEN SKY / CHESS / (IN) RETURN / AT THE SANCHEZES / GORGAM-GALE MIRABAM",
                "price": 0
            },
            {
                "key": "Circo en Otoño",
                "position": [
                    40.405964231388396,
                    -3.6986013597538654
                ],
                "children": "Circo en Otoño",
                "price": 0
            },
            {
                "key": "Circo, presente continuo",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Circo, presente continuo",
                "price": 0
            },
            {
                "key": "Circuit des Yeux's",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Circuit des Yeux's",
                "price": 0
            },
            {
                "key": "CIRCUIT / EL VERANO DEL LEÓN ELÉCTRICO / CITY PLAZA HOTEL / FUSE / MARKETING",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "CIRCUIT / EL VERANO DEL LEÓN ELÉCTRICO / CITY PLAZA HOTEL / FUSE / MARKETING",
                "price": 0
            },
            {
                "key": "Circuito Educación Vial de la Policía Municipal",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Circuito Educación Vial de la Policía Municipal",
                "price": 0
            },
            {
                "key": "Cirque Déjà Vu",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Cirque Déjà Vu",
                "price": 0
            },
            {
                "key": "Cirqus Quinta: Equilibrios",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Cirqus Quinta: Equilibrios",
                "price": 0
            },
            {
                "key": "Cirqus Quinta: Equilibrios",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Cirqus Quinta: Equilibrios",
                "price": 0
            },
            {
                "key": "Cirqus Quinta: Equilibrios",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Cirqus Quinta: Equilibrios",
                "price": 0
            },
            {
                "key": "Cirqus Quinta: Malabares y acrobacia",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Cirqus Quinta: Malabares y acrobacia",
                "price": 0
            },
            {
                "key": "Cirqus Quinta: Malabares y acrobacia",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Cirqus Quinta: Malabares y acrobacia",
                "price": 0
            },
            {
                "key": "Cirqus Quinta: Malabares y acrobacia",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Cirqus Quinta: Malabares y acrobacia",
                "price": 0
            },
            {
                "key": "Clara Rey",
                "position": [
                    40.40731632818047,
                    -3.747465416906973
                ],
                "children": "Clara Rey",
                "price": 0
            },
            {
                "key": "Clase de Zumba",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Clase de Zumba",
                "price": 0
            },
            {
                "key": "Clases de dibujo",
                "position": [
                    40.420231627535,
                    -3.6218113860909074
                ],
                "children": "Clases de dibujo",
                "price": 0
            },
            {
                "key": "Clases de dibujo",
                "position": [
                    40.420231627535,
                    -3.6218113860909074
                ],
                "children": "Clases de dibujo",
                "price": 0
            },
            {
                "key": "Clases semanales de yoga",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Clases semanales de yoga",
                "price": 0
            },
            {
                "key": "Clausura y representación de la obra ganadora",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Clausura y representación de la obra ganadora",
                "price": 0
            },
            {
                "key": "Club de ajedrez",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Club de ajedrez",
                "price": 0
            },
            {
                "key": "Coaching. Desarrollo personal",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "Coaching. Desarrollo personal",
                "price": 0
            },
            {
                "key": "Coco",
                "position": [
                    0,
                    0
                ],
                "children": "Coco",
                "price": 0
            },
            {
                "key": "CoderDojo. Convocatoria de octubre a febrero (2019/20)",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "CoderDojo. Convocatoria de octubre a febrero (2019/20)",
                "price": 0
            },
            {
                "key": "Codicia",
                "position": [
                    40.386261433320925,
                    -3.7000825227295007
                ],
                "children": "Codicia",
                "price": 0
            },
            {
                "key": "Colaboración con la Fundación MUSOL",
                "position": [
                    0,
                    0
                ],
                "children": "Colaboración con la Fundación MUSOL",
                "price": 0
            },
            {
                "key": "Cold war",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Cold war",
                "price": 0
            },
            {
                "key": "Colectivo Arterias",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Colectivo Arterias",
                "price": 0
            },
            {
                "key": "Collage Segunda Oportunidad",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Collage Segunda Oportunidad",
                "price": 0
            },
            {
                "key": "Colombia es",
                "position": [
                    40.394522745106734,
                    -3.7000855961559855
                ],
                "children": "Colombia es",
                "price": 0
            },
            {
                "key": "Colorines",
                "position": [
                    0,
                    0
                ],
                "children": "Colorines",
                "price": 0
            },
            {
                "key": "Como hace 50 años - 50 aniversario de la muerte de León Felipe",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "Como hace 50 años - 50 aniversario de la muerte de León Felipe",
                "price": 0
            },
            {
                "key": "Cómo se fabrican los sueños",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "Cómo se fabrican los sueños",
                "price": 0
            },
            {
                "key": "Concierto Banda Sinfónica Municipal. 11 de octubre de 2019",
                "position": [
                    0,
                    0
                ],
                "children": "Concierto Banda Sinfónica Municipal. 11 de octubre de 2019",
                "price": 0
            },
            {
                "key": "Concierto Banda Sinfónica Municipal. 9 de octubre de 2019",
                "position": [
                    40.385131830381496,
                    -3.761911556533904
                ],
                "children": "Concierto Banda Sinfónica Municipal. 9 de octubre de 2019",
                "price": 0
            },
            {
                "key": "Concierto Chassol",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Chassol",
                "price": "18  euros general / 15  euros reducida"
            },
            {
                "key": "Concierto Ciclo de Otoño. 20 de noviembre de 2019",
                "position": [
                    40.44615938706209,
                    -3.677944887416032
                ],
                "children": "Concierto Ciclo de Otoño. 20 de noviembre de 2019",
                "price": 0
            },
            {
                "key": "Concierto Ciclo de Otoño. 7 de noviembre de 2019",
                "position": [
                    40.4622790592606,
                    -3.6163368537403127
                ],
                "children": "Concierto Ciclo de Otoño. 7 de noviembre de 2019",
                "price": 0
            },
            {
                "key": "Concierto Ciclo de Otoño.18 de diciembre de 2019",
                "position": [
                    40.4622790592606,
                    -3.6163368537403127
                ],
                "children": "Concierto Ciclo de Otoño.18 de diciembre de 2019",
                "price": 0
            },
            {
                "key": "Concierto Circuit des Yeux's Salomé",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Circuit des Yeux's Salomé",
                "price": "12  euros general / 10  euros reducida"
            },
            {
                "key": "Concierto David Virelles",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto David Virelles",
                "price": "15  euros general / 13  euros reducida"
            },
            {
                "key": "Concierto de Charangalera",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de Charangalera",
                "price": 0
            },
            {
                "key": "Concierto de Cristosaurio",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de Cristosaurio",
                "price": 0
            },
            {
                "key": "Concierto de David Ascanio y la Picoco?s Band",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de David Ascanio y la Picoco?s Band",
                "price": 0
            },
            {
                "key": "Concierto de Eddie Circa",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de Eddie Circa",
                "price": 0
            },
            {
                "key": "Concierto de grupos infantiles",
                "position": [
                    40.369689508453575,
                    -3.708167914482908
                ],
                "children": "Concierto de grupos infantiles",
                "price": 0
            },
            {
                "key": "Concierto de La Curva",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de La Curva",
                "price": 0
            },
            {
                "key": "Concierto de la Verbena Punk",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de la Verbena Punk",
                "price": 0
            },
            {
                "key": "Concierto de La Zamarrada",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de La Zamarrada",
                "price": 0
            },
            {
                "key": "Concierto de Lied",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Concierto de Lied",
                "price": 0
            },
            {
                "key": "Concierto de música clásica",
                "position": [
                    40.42206601994432,
                    -3.6629680758652343
                ],
                "children": "Concierto de música clásica",
                "price": 0
            },
            {
                "key": "CONCIERTO DE NOVIEMBRE",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "CONCIERTO DE NOVIEMBRE",
                "price": 0
            },
            {
                "key": "Concierto de Ombligo",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de Ombligo",
                "price": 0
            },
            {
                "key": "Concierto de Piano",
                "position": [
                    40.40731632818047,
                    -3.747465416906973
                ],
                "children": "Concierto de Piano",
                "price": 0
            },
            {
                "key": "Concierto de Piano",
                "position": [
                    40.49082275610172,
                    -3.7216054330053647
                ],
                "children": "Concierto de Piano",
                "price": 0
            },
            {
                "key": "Concierto de piano Franz Schubert: Viaje en la noche",
                "position": [
                    40.407405510530545,
                    -3.7119218940274026
                ],
                "children": "Concierto de piano Franz Schubert: Viaje en la noche",
                "price": 0
            },
            {
                "key": "Concierto de Piano y Trompeta",
                "position": [
                    40.35074797433515,
                    -3.6773064421969233
                ],
                "children": "Concierto de Piano y Trompeta",
                "price": 0
            },
            {
                "key": "Concierto de Tarantella Guappa",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de Tarantella Guappa",
                "price": 0
            },
            {
                "key": "Concierto de Tongo",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto de Tongo",
                "price": 0
            },
            {
                "key": "Concierto de Trapos Sucios",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Concierto de Trapos Sucios",
                "price": 0
            },
            {
                "key": "Concierto Dúo Divoce",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Concierto Dúo Divoce",
                "price": 0
            },
            {
                "key": "Concierto Dúo Swam",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Concierto Dúo Swam",
                "price": 0
            },
            {
                "key": "Concierto EPOS",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto EPOS",
                "price": "Entrada Libre"
            },
            {
                "key": "Concierto explicado con Popsical",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto explicado con Popsical",
                "price": 0
            },
            {
                "key": "Concierto Fátima Al Qadiri",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Fátima Al Qadiri",
                "price": "12  euros general / 10  euros reducida"
            },
            {
                "key": "Concierto Fennesz",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Fennesz",
                "price": "12  euros general / 10  euros reducida"
            },
            {
                "key": "Concierto Kardio",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto Kardio",
                "price": 0
            },
            {
                "key": "Concierto Kokoroko",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Kokoroko",
                "price": "15  euros general / 13  euros reducida"
            },
            {
                "key": "Concierto La Reina de los Lagartos",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto La Reina de los Lagartos",
                "price": 0
            },
            {
                "key": "Concierto lírico",
                "position": [
                    40.42206601994432,
                    -3.6629680758652343
                ],
                "children": "Concierto lírico",
                "price": 0
            },
            {
                "key": "Concierto Los Voluble",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Los Voluble",
                "price": "10  euros general / 8  euros reducida"
            },
            {
                "key": "Concierto Lucía Rey",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Lucía Rey",
                "price": "5 euros"
            },
            {
                "key": "Concierto Música de Cámara",
                "position": [
                    40.39976467763712,
                    -3.775144917950533
                ],
                "children": "Concierto Música de Cámara",
                "price": 0
            },
            {
                "key": "Concierto Nubya Garcia",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Nubya Garcia",
                "price": "12  euros general / 10  euros reducida"
            },
            {
                "key": "Concierto para el Alma",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "Concierto para el Alma",
                "price": 0
            },
            {
                "key": "Concierto Peter Brötzmann/Heather Leigh",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Concierto Peter Brötzmann/Heather Leigh",
                "price": "15  euros general / 13  euros reducida"
            },
            {
                "key": "Concierto Rasel",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Concierto Rasel",
                "price": 0
            },
            {
                "key": "Concierto. Dos genios del piano: Beethoven y Chopin",
                "position": [
                    40.407405510530545,
                    -3.7119218940274026
                ],
                "children": "Concierto. Dos genios del piano: Beethoven y Chopin",
                "price": 0
            },
            {
                "key": "Conde Duque Swing",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Conde Duque Swing",
                "price": "Entrada Libre"
            },
            {
                "key": "Conexiones Geométricas",
                "position": [
                    40.402190438836826,
                    -3.6772826298329084
                ],
                "children": "Conexiones Geométricas",
                "price": 0
            },
            {
                "key": "Conferencia. Crónicas marcianas: misiones de NASA Curiosity, Insight y Mars 2020",
                "position": [
                    40.39227999954005,
                    -3.684956957448299
                ],
                "children": "Conferencia. Crónicas marcianas: misiones de NASA Curiosity, Insight y Mars 2020",
                "price": 0
            },
            {
                "key": "Conferencia. El cambio climático en el contexto del Sistema Solar",
                "position": [
                    40.39227999954005,
                    -3.684956957448299
                ],
                "children": "Conferencia. El cambio climático en el contexto del Sistema Solar",
                "price": 0
            },
            {
                "key": "Conferencia. El destino de la Tierra y el Universo",
                "position": [
                    40.39227999954005,
                    -3.684956957448299
                ],
                "children": "Conferencia. El destino de la Tierra y el Universo",
                "price": 0
            },
            {
                "key": "Conferencia. El simio asesino",
                "position": [
                    40.39227999954005,
                    -3.684956957448299
                ],
                "children": "Conferencia. El simio asesino",
                "price": 0
            },
            {
                "key": "Conferencia. Pintar el cielo: un astrónomo en el museo",
                "position": [
                    40.39227999954005,
                    -3.684956957448299
                ],
                "children": "Conferencia. Pintar el cielo: un astrónomo en el museo",
                "price": 0
            },
            {
                "key": "Conferencia: La mujer en la obra de Picasso",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Conferencia: La mujer en la obra de Picasso",
                "price": 0
            },
            {
                "key": "Conferencia: 'Cajal: el Centro de Investigaciones Biológicas'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Cajal: el Centro de Investigaciones Biológicas'",
                "price": 0
            },
            {
                "key": "Conferencia: 'El contraste con Europa a la luz del pensamiento del joven Ortega y la actitud de Unamuno'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'El contraste con Europa a la luz del pensamiento del joven Ortega y la actitud de Unamuno'",
                "price": 0
            },
            {
                "key": "Conferencia: 'El legado naval del siglo XIX'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'El legado naval del siglo XIX'",
                "price": 0
            },
            {
                "key": "Conferencia: 'El Yacimiento Arqueológico de Tornerías (Toledo'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'El Yacimiento Arqueológico de Tornerías (Toledo'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Física y matemática: Echegaray'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Física y matemática: Echegaray'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Las ciencias biológicas tras Darwin: el impacto del evolucionismo'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Las ciencias biológicas tras Darwin: el impacto del evolucionismo'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Las ciencias naturales y la química farmacéutica: Bolívar, Rodríguez Carracido y Casares Gil'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Las ciencias naturales y la química farmacéutica: Bolívar, Rodríguez Carracido y Casares Gil'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Modas egiptizantes en la Roma Imperial'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Modas egiptizantes en la Roma Imperial'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Profesionales y diletantes: el interés por la ciencia en el Madrid del siglo XIX'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Profesionales y diletantes: el interés por la ciencia en el Madrid del siglo XIX'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Torres Quevedo: el Centro de Ensayos de Aeronáutica, los dirigibles y el telekino'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Torres Quevedo: el Centro de Ensayos de Aeronáutica, los dirigibles y el telekino'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Trasfondo próximo-oriental del Antiguo Testamento'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Trasfondo próximo-oriental del Antiguo Testamento'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Universidades y academias científicas en el Madrid del siglo XIX'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Conferencia: 'Universidades y academias científicas en el Madrid del siglo XIX'",
                "price": 0
            },
            {
                "key": "Conferencia: 'Grandes museos del mundo: El Prado'. Conferenciante: Eva Mª Mera",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "Conferencia: 'Grandes museos del mundo: El Prado'. Conferenciante: Eva Mª Mera",
                "price": 0
            },
            {
                "key": "Consejos para mejorar la ansiedad a través de la alimentación",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Consejos para mejorar la ansiedad a través de la alimentación",
                "price": 0
            },
            {
                "key": "Conservando Memoria | Titirimadroño",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Conservando Memoria | Titirimadroño",
                "price": "12  euros general / 10  euros reducida"
            },
            {
                "key": "Construyendo el volumen",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Construyendo el volumen",
                "price": 0
            },
            {
                "key": "Contención y entrega de emociones",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Contención y entrega de emociones",
                "price": 0
            },
            {
                "key": "Convergencias y reencuentros/ Señoritas",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Convergencias y reencuentros/ Señoritas",
                "price": 0
            },
            {
                "key": "Convocatoria del III Premio de Encuadernación Artística de la Imprenta Municipal - Artes del Libro.",
                "position": [
                    40.4138864430981,
                    -3.7054840717141966
                ],
                "children": "Convocatoria del III Premio de Encuadernación Artística de la Imprenta Municipal - Artes del Libro.",
                "price": 0
            },
            {
                "key": "Coral Nuestra Señora de Moratalaz - Coral Polifónica La Montaña",
                "position": [
                    40.407302967830155,
                    -3.640089295667439
                ],
                "children": "Coral Nuestra Señora de Moratalaz - Coral Polifónica La Montaña",
                "price": 0
            },
            {
                "key": "Coral polifónica El Madroño",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "Coral polifónica El Madroño",
                "price": 0
            },
            {
                "key": "Coro Alderaán - Concierto pop",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "Coro Alderaán - Concierto pop",
                "price": 0
            },
            {
                "key": "Coro Fundación Gredos San Diego - Coral Polifónica Sagrada Familia",
                "position": [
                    40.40882802221503,
                    -3.6347295106313413
                ],
                "children": "Coro Fundación Gredos San Diego - Coral Polifónica Sagrada Familia",
                "price": 0
            },
            {
                "key": "Coro Gospel. Coro Iberoamericano",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Coro Gospel. Coro Iberoamericano",
                "price": 0
            },
            {
                "key": "Coro Iberoamericano",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Coro Iberoamericano",
                "price": 0
            },
            {
                "key": "Coro Iberoamericano",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Coro Iberoamericano",
                "price": 0
            },
            {
                "key": "Coro y Rondalla Las Rosas",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "Coro y Rondalla Las Rosas",
                "price": 0
            },
            {
                "key": "Corrillo",
                "position": [
                    40.381095838993176,
                    -3.710973351109332
                ],
                "children": "Corrillo",
                "price": 0
            },
            {
                "key": "Cortos Norman McLaren: Ale-hop!",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Cortos Norman McLaren: Ale-hop!",
                "price": 0
            },
            {
                "key": "Costumbres románticas",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Costumbres románticas",
                "price": 0
            },
            {
                "key": "Criaturas del bosque",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Criaturas del bosque",
                "price": 0
            },
            {
                "key": "Cristian Scott a Tunde Adjuah",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Cristian Scott a Tunde Adjuah",
                "price": 0
            },
            {
                "key": "Cristina Rota, beber bajo el agua",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Cristina Rota, beber bajo el agua",
                "price": 0
            },
            {
                "key": "Crítica al crítico",
                "position": [
                    40.42737760210632,
                    -3.7106116887809817
                ],
                "children": "Crítica al crítico",
                "price": 0
            },
            {
                "key": "Crítica al crítico",
                "position": [
                    40.42737760210632,
                    -3.7106116887809817
                ],
                "children": "Crítica al crítico",
                "price": 0
            },
            {
                "key": "Cuando hacerlo todo no lo es todo: ¿qué es la carga mental de las mujeres?",
                "position": [
                    40.41087442118042,
                    -3.6538891267077664
                ],
                "children": "Cuando hacerlo todo no lo es todo: ¿qué es la carga mental de las mujeres?",
                "price": 0
            },
            {
                "key": "Cuarteto de cuerda Amarak",
                "position": [
                    40.424470608043535,
                    -3.6504253324201104
                ],
                "children": "Cuarteto de cuerda Amarak",
                "price": 0
            },
            {
                "key": "Cuentacuentos con Kids&amp;Us",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Cuentacuentos con Kids&amp;Us",
                "price": 0
            },
            {
                "key": "Cuentacuentos en inglés",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Cuentacuentos en inglés",
                "price": 0
            },
            {
                "key": "Cuentacuentos en inglés",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Cuentacuentos en inglés",
                "price": 0
            },
            {
                "key": "Cuentacuentos en inglés",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Cuentacuentos en inglés",
                "price": 0
            },
            {
                "key": "Cuentacuentos en inglés",
                "position": [
                    40.46062283537962,
                    -3.593687765733593
                ],
                "children": "Cuentacuentos en inglés",
                "price": 0
            },
            {
                "key": "Cuentacuentos feminista",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Cuentacuentos feminista",
                "price": 0
            },
            {
                "key": "Cuentos de la Casa Grande, de Alicia Mohino",
                "position": [
                    40.405283650744316,
                    -3.60862782329228
                ],
                "children": "Cuentos de la Casa Grande, de Alicia Mohino",
                "price": 0
            },
            {
                "key": "Cuentos de la Casa Grande, de Alicia Mohíno",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Cuentos de la Casa Grande, de Alicia Mohíno",
                "price": 0
            },
            {
                "key": "Cuentos de la casa grande, de Alicia Mohíno",
                "position": [
                    40.397074625115906,
                    -3.7664885474841565
                ],
                "children": "Cuentos de la casa grande, de Alicia Mohíno",
                "price": 0
            },
            {
                "key": "Cuentos de la Casa Grande, de Alicia Mohino",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Cuentos de la Casa Grande, de Alicia Mohino",
                "price": 0
            },
            {
                "key": "Cuentos de la casa grande, de Alicia Mohíno",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Cuentos de la casa grande, de Alicia Mohíno",
                "price": 0
            },
            {
                "key": "Cuentos de la casa grande, de Alicia Mohíno",
                "position": [
                    40.478600873345535,
                    -3.709440834297995
                ],
                "children": "Cuentos de la casa grande, de Alicia Mohíno",
                "price": 0
            },
            {
                "key": "Cuentos de la casa grande, de Alicia Mohino",
                "position": [
                    40.37790196240434,
                    -3.622729660503952
                ],
                "children": "Cuentos de la casa grande, de Alicia Mohino",
                "price": 0
            },
            {
                "key": "Cuentos de luna llena y otros espantos",
                "position": [
                    40.40647389284976,
                    -3.7327010920242034
                ],
                "children": "Cuentos de luna llena y otros espantos",
                "price": 0
            },
            {
                "key": "Cuentos en inglés",
                "position": [
                    40.44444653179131,
                    -3.6781399301298703
                ],
                "children": "Cuentos en inglés",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en Biblioteca Pública Municipal Huerta de la Salud",
                "position": [
                    40.475716881030685,
                    -3.6466725775035296
                ],
                "children": "Cuentos infantiles en Biblioteca Pública Municipal Huerta de la Salud",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Aluche",
                "position": [
                    40.39597072367931,
                    -3.7562716852987847
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Aluche",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Ana María Matute",
                "position": [
                    40.39786734087938,
                    -3.720088245008897
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Ana María Matute",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Ángel González",
                "position": [
                    40.397074625115906,
                    -3.7664885474841565
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Ángel González",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Buenavista",
                "position": [
                    40.43199309720514,
                    -3.6709292435437137
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Buenavista",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Canillejas",
                "position": [
                    40.44640229188281,
                    -3.6117933204271098
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Canillejas",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Ciudad Lineal",
                "position": [
                    40.43641736294729,
                    -3.6373469713025055
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Ciudad Lineal",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Conde Duque",
                "position": [
                    40.42738668300474,
                    -3.7105999955473625
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Conde Duque",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Dámaso Alonso",
                "position": [
                    40.46745337921317,
                    -3.684611277444272
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Dámaso Alonso",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Francisco Ayala",
                "position": [
                    40.39982891410407,
                    -3.621281890570377
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Francisco Ayala",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Francisco Ibañez",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Francisco Ibañez",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Gabriel García Márquez",
                "position": [
                    40.366768324753416,
                    -3.701141063083806
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Gabriel García Márquez",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Gerardo Diego",
                "position": [
                    40.37790196240434,
                    -3.622729660503952
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Gerardo Diego",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Gloria Fuertes",
                "position": [
                    40.46055947228695,
                    -3.5937461811785347
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Gloria Fuertes",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Iván de Vargas",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Iván de Vargas",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal José Hierro",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal José Hierro",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal José Saramago",
                "position": [
                    40.478600873345535,
                    -3.709440834297995
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal José Saramago",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal La Elipa",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal La Elipa",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Manuel Vázquez Montalbán",
                "position": [
                    40.45749513485957,
                    -3.710539712535917
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Manuel Vázquez Montalbán",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal María Lejárraga",
                "position": [
                    40.490415625465424,
                    -3.6553567517280032
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal María Lejárraga",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal María Zambrano",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal María Zambrano",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Mario Vargas Llosa",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Mario Vargas Llosa",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Miguel Delibes",
                "position": [
                    40.40971737692924,
                    -3.652982210911513
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Miguel Delibes",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Pablo Neruda",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Pablo Neruda",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Pío Baroja",
                "position": [
                    40.40003652682007,
                    -3.7074488154950576
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Pío Baroja",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Portazgo",
                "position": [
                    40.393189968014696,
                    -3.6554147649183935
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Portazgo",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Pozo del Tío Raimundo",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Pozo del Tío Raimundo",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Vallecas",
                "position": [
                    40.395023959810636,
                    -3.665554302127492
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Vallecas",
                "price": 0
            },
            {
                "key": "Cuentos infantiles en la Biblioteca Pública Municipal Vicálvaro",
                "position": [
                    40.405283650744316,
                    -3.60862782329228
                ],
                "children": "Cuentos infantiles en la Biblioteca Pública Municipal Vicálvaro",
                "price": 0
            },
            {
                "key": "Cuentos para los más Peques",
                "position": [
                    40.446818592300296,
                    -3.5727411638209152
                ],
                "children": "Cuentos para los más Peques",
                "price": 0
            },
            {
                "key": "Cuentos que cuentan por la igualdad",
                "position": [
                    40.46498334634005,
                    -3.650568266584692
                ],
                "children": "Cuentos que cuentan por la igualdad",
                "price": 0
            },
            {
                "key": "Cuentos y relatos de Música Clásica",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Cuentos y relatos de Música Clásica",
                "price": 0
            },
            {
                "key": "Cuerpo Romo",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Cuerpo Romo",
                "price": "Entrada libre"
            },
            {
                "key": "Cuida tu flora intestinal",
                "position": [
                    40.42206601994432,
                    -3.6629680758652343
                ],
                "children": "Cuida tu flora intestinal",
                "price": 0
            },
            {
                "key": "Cultura en rojo y blanco",
                "position": [
                    40.394522745106734,
                    -3.7000855961559855
                ],
                "children": "Cultura en rojo y blanco",
                "price": 0
            },
            {
                "key": "Curso de ajedrez",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Curso de ajedrez",
                "price": 0
            },
            {
                "key": "Curso gratuito de manga para jóvenes",
                "position": [
                    40.40219442341818,
                    -3.608458586300373
                ],
                "children": "Curso gratuito de manga para jóvenes",
                "price": 0
            },
            {
                "key": "Curso trimestral: el retrato en fotografía (inscripción)",
                "position": [
                    40.40219442341818,
                    -3.608458586300373
                ],
                "children": "Curso trimestral: el retrato en fotografía (inscripción)",
                "price": 0
            },
            {
                "key": "Dame Cuartelillo",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Dame Cuartelillo",
                "price": "2  euros"
            },
            {
                "key": "Danza de Guillermina de Bedoya",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "Danza de Guillermina de Bedoya",
                "price": 0
            },
            {
                "key": "Danzando familias",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Danzando familias",
                "price": 0
            },
            {
                "key": "Danzas tribales",
                "position": [
                    40.43664778776818,
                    -3.611362970564875
                ],
                "children": "Danzas tribales",
                "price": 0
            },
            {
                "key": "Dark Smile. El Ministerio de la Quinta de los Molinos",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Dark Smile. El Ministerio de la Quinta de los Molinos",
                "price": 0
            },
            {
                "key": "Dark Smile. El Ministerio de la Quinta de los Molinos",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Dark Smile. El Ministerio de la Quinta de los Molinos",
                "price": 0
            },
            {
                "key": "De árbol a árbol",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "De árbol a árbol",
                "price": 0
            },
            {
                "key": "De España a México",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "De España a México",
                "price": 0
            },
            {
                "key": "De la tierra",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "De la tierra",
                "price": 0
            },
            {
                "key": "De mi mochila traigo palabras, de Pep Bruno",
                "position": [
                    40.40971737692924,
                    -3.652982210911513
                ],
                "children": "De mi mochila traigo palabras, de Pep Bruno",
                "price": 0
            },
            {
                "key": "De mi mochila traigo palabras, de Pep Bruno",
                "position": [
                    40.366768324753416,
                    -3.701141063083806
                ],
                "children": "De mi mochila traigo palabras, de Pep Bruno",
                "price": 0
            },
            {
                "key": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "price": 0
            },
            {
                "key": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "position": [
                    40.490415625465424,
                    -3.6553567517280032
                ],
                "children": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "price": 0
            },
            {
                "key": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "position": [
                    40.366768324753416,
                    -3.701141063083806
                ],
                "children": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "price": 0
            },
            {
                "key": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "position": [
                    40.37790196240434,
                    -3.622729660503952
                ],
                "children": "De poetas y animales que curan todos los males, de Marta Guijarro",
                "price": 0
            },
            {
                "key": "Deambulantes",
                "position": [
                    40.369689508453575,
                    -3.708167914482908
                ],
                "children": "Deambulantes",
                "price": 0
            },
            {
                "key": "Deep Emotions Tour",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Deep Emotions Tour",
                "price": 0
            },
            {
                "key": "Defensa personal feminista con Gada7 (Orcasur)",
                "position": [
                    40.366768324753416,
                    -3.701141063083806
                ],
                "children": "Defensa personal feminista con Gada7 (Orcasur)",
                "price": 0
            },
            {
                "key": "Defensa personal feminista con Gada7 (San Fermín)",
                "position": [
                    40.37164288657417,
                    -3.692062782786752
                ],
                "children": "Defensa personal feminista con Gada7 (San Fermín)",
                "price": 0
            },
            {
                "key": "Del huerto a la despensa: conservas",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Del huerto a la despensa: conservas",
                "price": 0
            },
            {
                "key": "Dentro de los cuentos",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Dentro de los cuentos",
                "price": 0
            },
            {
                "key": "Desde dentro del cuadro",
                "position": [
                    40.42737760210632,
                    -3.7106116887809817
                ],
                "children": "Desde dentro del cuadro",
                "price": 0
            },
            {
                "key": "Desde Rusia con arte",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Desde Rusia con arte",
                "price": 0
            },
            {
                "key": "Desfiles de trajes históricos y tradicionales",
                "position": [
                    40.369689508453575,
                    -3.708167914482908
                ],
                "children": "Desfiles de trajes históricos y tradicionales",
                "price": 0
            },
            {
                "key": "Destino Incierto",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Destino Incierto",
                "price": 0
            },
            {
                "key": "Destino Incierto",
                "position": [
                    40.397074625115906,
                    -3.7664885474841565
                ],
                "children": "Destino Incierto",
                "price": 0
            },
            {
                "key": "Destino Incierto",
                "position": [
                    40.37790196240434,
                    -3.622729660503952
                ],
                "children": "Destino Incierto",
                "price": 0
            },
            {
                "key": "Destino Incierto",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "Destino Incierto",
                "price": 0
            },
            {
                "key": "Día de la Infancia y Juventud",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Día de la Infancia y Juventud",
                "price": 0
            },
            {
                "key": "Día de las escritoras: leyendo a nuestras escritoras favoritas. Microteatro Dos metros sobre el suelo.",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Día de las escritoras: leyendo a nuestras escritoras favoritas. Microteatro Dos metros sobre el suelo.",
                "price": 0
            },
            {
                "key": "Día Mundial del hábitat",
                "position": [
                    40.33787085603253,
                    -3.5813821771569554
                ],
                "children": "Día Mundial del hábitat",
                "price": 0
            },
            {
                "key": "Diamantes de luz helada",
                "position": [
                    40.43200210571468,
                    -3.6709293330780213
                ],
                "children": "Diamantes de luz helada",
                "price": 0
            },
            {
                "key": "Digo yo - como decimos nosotras -",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Digo yo - como decimos nosotras -",
                "price": 0
            },
            {
                "key": "Digo yo -como decimos nosotras-. Aurore Valade",
                "position": [
                    40.38241253009179,
                    -3.7107515747822353
                ],
                "children": "Digo yo -como decimos nosotras-. Aurore Valade",
                "price": 0
            },
            {
                "key": "Disconnect",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Disconnect",
                "price": 0
            },
            {
                "key": "Divergentes",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Divergentes",
                "price": 0
            },
            {
                "key": "Dj Bea",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Dj Bea",
                "price": 0
            },
            {
                "key": "Do It Yourself",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Do It Yourself",
                "price": 0
            },
            {
                "key": "Doce rosas",
                "position": [
                    40.46678159096302,
                    -3.7195669111891694
                ],
                "children": "Doce rosas",
                "price": 0
            },
            {
                "key": "Domingos a pie de calle",
                "position": [
                    0,
                    0
                ],
                "children": "Domingos a pie de calle",
                "price": 0
            },
            {
                "key": "Doña Rosita la Soltera",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Doña Rosita la Soltera",
                "price": 0
            },
            {
                "key": "Dos marineros en remojo",
                "position": [
                    40.378853797128336,
                    -3.781961611303212
                ],
                "children": "Dos marineros en remojo",
                "price": 0
            },
            {
                "key": "Dos palabras",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Dos palabras",
                "price": 0
            },
            {
                "key": "Dos Palabras",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Dos Palabras",
                "price": 0
            },
            {
                "key": "Dos Palabras",
                "position": [
                    40.37164288657417,
                    -3.692062782786752
                ],
                "children": "Dos Palabras",
                "price": 0
            },
            {
                "key": "Dúo Sanz Mariné",
                "position": [
                    40.35639654251886,
                    -3.69405018466109
                ],
                "children": "Dúo Sanz Mariné",
                "price": 0
            },
            {
                "key": "EATING ANIMALS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "EATING ANIMALS",
                "price": 0
            },
            {
                "key": "Economía familiar",
                "position": [
                    40.42206601994432,
                    -3.6629680758652343
                ],
                "children": "Economía familiar",
                "price": 0
            },
            {
                "key": "Ecos",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "Ecos",
                "price": "ENTRADAS DE 5 A 22  euros(Incluido en Abonos de temporada)"
            },
            {
                "key": "Ecos del futurismo. Exposición y convocatoria de creación",
                "position": [
                    40.42737760210632,
                    -3.7106116887809817
                ],
                "children": "Ecos del futurismo. Exposición y convocatoria de creación",
                "price": 0
            },
            {
                "key": "Eco-Visionarios",
                "position": [
                    40.391054868587204,
                    -3.6958072892892164
                ],
                "children": "Eco-Visionarios",
                "price": 0
            },
            {
                "key": "Efecto mariposa",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Efecto mariposa",
                "price": 0
            },
            {
                "key": "El amor del perro y el gato",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "El amor del perro y el gato",
                "price": 0
            },
            {
                "key": "El ángel",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "El ángel",
                "price": 0
            },
            {
                "key": "EL ÁNGEL EN EL RELOJ",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "EL ÁNGEL EN EL RELOJ",
                "price": 0
            },
            {
                "key": "El archivo del polvo",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "El archivo del polvo",
                "price": "Entrada libre"
            },
            {
                "key": "El arte de amar y el cuidado de las relaciones",
                "position": [
                    40.46745337921317,
                    -3.684611277444272
                ],
                "children": "El arte de amar y el cuidado de las relaciones",
                "price": 0
            },
            {
                "key": "El Arte de Zhen Shan Ren",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "El Arte de Zhen Shan Ren",
                "price": 0
            },
            {
                "key": "El bosque",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "El bosque",
                "price": 0
            },
            {
                "key": "El bosque",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "El bosque",
                "price": 0
            },
            {
                "key": "El bosque",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "El bosque",
                "price": 0
            },
            {
                "key": "El bosque",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "El bosque",
                "price": 0
            },
            {
                "key": "El botiquin de Montecarmelo",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "El botiquin de Montecarmelo",
                "price": 0
            },
            {
                "key": "El botiquin de Montecarmelo",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "El botiquin de Montecarmelo",
                "price": 0
            },
            {
                "key": "El botiquín de Montecarmelo",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "El botiquín de Montecarmelo",
                "price": 0
            },
            {
                "key": "El camino del Mindfulness",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "El camino del Mindfulness",
                "price": 0
            },
            {
                "key": "El campo del Moro",
                "position": [
                    40.40939173676513,
                    -3.6532147773593313
                ],
                "children": "El campo del Moro",
                "price": 0
            },
            {
                "key": "EL CASTILLO DE LA PUREZA",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "EL CASTILLO DE LA PUREZA",
                "price": 0
            },
            {
                "key": "El Cementerio Civil de Madrid",
                "position": [
                    40.402190438836826,
                    -3.6772826298329084
                ],
                "children": "El Cementerio Civil de Madrid",
                "price": 0
            },
            {
                "key": "El Cid: leyenda y realidad",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "El Cid: leyenda y realidad",
                "price": 0
            },
            {
                "key": "El circo de los increíbles",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "El circo de los increíbles",
                "price": 0
            },
            {
                "key": "El circo de los increíbles",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "El circo de los increíbles",
                "price": 0
            },
            {
                "key": "El circo de los increíbles",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "El circo de los increíbles",
                "price": 0
            },
            {
                "key": "El circo de Rotundifolia, con Estrella Ortiz",
                "position": [
                    40.39786734087938,
                    -3.720088245008897
                ],
                "children": "El circo de Rotundifolia, con Estrella Ortiz",
                "price": 0
            },
            {
                "key": "Él circo de Rotundifolia, con Estrella Ortíz",
                "position": [
                    40.42738668300474,
                    -3.7105999955473625
                ],
                "children": "Él circo de Rotundifolia, con Estrella Ortíz",
                "price": 0
            },
            {
                "key": "El Circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.393189968014696,
                    -3.6554147649183935
                ],
                "children": "El Circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "El Circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "El Circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "El circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.46055947228695,
                    -3.5937461811785347
                ],
                "children": "El circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "El Circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.395023959810636,
                    -3.665554302127492
                ],
                "children": "El Circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "El circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "El circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "El circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "El circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "El circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.490415625465424,
                    -3.6553567517280032
                ],
                "children": "El circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "El circo de Rotundifolia, de Estrella Ortiz",
                "position": [
                    40.366768324753416,
                    -3.701141063083806
                ],
                "children": "El circo de Rotundifolia, de Estrella Ortiz",
                "price": 0
            },
            {
                "key": "EL Coro Alemán Son Glines Cologne y Alianza Coral Madrileña",
                "position": [
                    40.49082275610172,
                    -3.7216054330053647
                ],
                "children": "EL Coro Alemán Son Glines Cologne y Alianza Coral Madrileña",
                "price": 0
            },
            {
                "key": "El día de la bestia",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "El día de la bestia",
                "price": 0
            },
            {
                "key": "El diario de Adán y Eva",
                "position": [
                    40.43520939382668,
                    -3.7188765163188284
                ],
                "children": "El diario de Adán y Eva",
                "price": 0
            },
            {
                "key": "El diario de Adán y Eva",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "El diario de Adán y Eva",
                "price": 0
            },
            {
                "key": "El dragón del agua. Cuentos que cuenta la importancia del agua",
                "position": [
                    0,
                    0
                ],
                "children": "El dragón del agua. Cuentos que cuenta la importancia del agua",
                "price": 0
            },
            {
                "key": "El encantador de águilas",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "El encantador de águilas",
                "price": 0
            },
            {
                "key": "El encantador de águilas",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "El encantador de águilas",
                "price": 0
            },
            {
                "key": "El encantador de águilas",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "El encantador de águilas",
                "price": 0
            },
            {
                "key": "El fantasma del río",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "El fantasma del río",
                "price": 0
            },
            {
                "key": "El faro de los colores",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "El faro de los colores",
                "price": 0
            },
            {
                "key": "El Gato con botas - El Retablo de la Ventana (Castilla La Mancha)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "El Gato con botas - El Retablo de la Ventana (Castilla La Mancha)",
                "price": 0
            },
            {
                "key": "El gran showman",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "El gran showman",
                "price": 0
            },
            {
                "key": "El Gran Tour",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "El Gran Tour",
                "price": 0
            },
            {
                "key": "El hombrecito",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "El hombrecito",
                "price": 0
            },
            {
                "key": "El inventario Español de los Conocimientos Tradicionales Relativos a la Biodiversidad",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "El inventario Español de los Conocimientos Tradicionales Relativos a la Biodiversidad",
                "price": 0
            },
            {
                "key": "El investigatopo - Chachakün (Argentina)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "El investigatopo - Chachakün (Argentina)",
                "price": 0
            },
            {
                "key": "El investigatopo - Chachakün (Argentina)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "El investigatopo - Chachakün (Argentina)",
                "price": 0
            },
            {
                "key": "El ladrón",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "El ladrón",
                "price": 0
            },
            {
                "key": "El lugar donde se hacen las cosas",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "El lugar donde se hacen las cosas",
                "price": "Excursiones: 5  euros |Encuentros: Entrada libre hasta completar aforo"
            },
            {
                "key": "EL MAGO WIKY TRICKY",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "EL MAGO WIKY TRICKY",
                "price": 0
            },
            {
                "key": "El método de la interpretación de los sueños",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "El método de la interpretación de los sueños",
                "price": 0
            },
            {
                "key": "El mito del rey Arturo",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "El mito del rey Arturo",
                "price": 0
            },
            {
                "key": "El moderno Sherlock Holmes, a ritmo de jazz",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "El moderno Sherlock Holmes, a ritmo de jazz",
                "price": 0
            },
            {
                "key": "El mundo es redondo, de Magda Labarga",
                "position": [
                    40.405283650744316,
                    -3.60862782329228
                ],
                "children": "El mundo es redondo, de Magda Labarga",
                "price": 0
            },
            {
                "key": "El mundo es redondo, de Magda Labarga",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "El mundo es redondo, de Magda Labarga",
                "price": 0
            },
            {
                "key": "El mundo es redondo, de Magda Labarga",
                "position": [
                    40.39597072367931,
                    -3.7562716852987847
                ],
                "children": "El mundo es redondo, de Magda Labarga",
                "price": 0
            },
            {
                "key": "El mundo es redondo, de Magda Labarga",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "El mundo es redondo, de Magda Labarga",
                "price": 0
            },
            {
                "key": "El mundo es redondo, de Magda Labarga",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "El mundo es redondo, de Magda Labarga",
                "price": 0
            },
            {
                "key": "El mundo es redondo, de Magda Labarga",
                "position": [
                    40.475716881030685,
                    -3.6466725775035296
                ],
                "children": "El mundo es redondo, de Magda Labarga",
                "price": 0
            },
            {
                "key": "El mundo es redondo, de Magda Labarga",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "El mundo es redondo, de Magda Labarga",
                "price": 0
            },
            {
                "key": "El muy misterioso caso de la viuda negra",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "El muy misterioso caso de la viuda negra",
                "price": 0
            },
            {
                "key": "El Niño",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "El Niño",
                "price": 0
            },
            {
                "key": "El niño llorón",
                "position": [
                    40.490415625465424,
                    -3.6553567517280032
                ],
                "children": "El niño llorón",
                "price": 0
            },
            {
                "key": "El país de la infancia",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "El país de la infancia",
                "price": 0
            },
            {
                "key": "El Paseo de Recoletos, paisaje cultural",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "El Paseo de Recoletos, paisaje cultural",
                "price": 0
            },
            {
                "key": "El Pescador y el Genio I- Explorar el inconsciente",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "El Pescador y el Genio I- Explorar el inconsciente",
                "price": 0
            },
            {
                "key": "El Pollo Pepe",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "El Pollo Pepe",
                "price": 0
            },
            {
                "key": "El Príncipe y la Golondrina - La Pícara Locuela (Castila y León)",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "El Príncipe y la Golondrina - La Pícara Locuela (Castila y León)",
                "price": 0
            },
            {
                "key": "El Principito",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "El Principito",
                "price": 0
            },
            {
                "key": "El Pulpo",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "El Pulpo",
                "price": 0
            },
            {
                "key": "El rascacielos",
                "position": [
                    40.39702079232232,
                    -3.673881351837232
                ],
                "children": "El rascacielos",
                "price": 0
            },
            {
                "key": "El Reino",
                "position": [
                    0,
                    0
                ],
                "children": "El Reino",
                "price": 0
            },
            {
                "key": "El rincón de las letras",
                "position": [
                    40.49231828430878,
                    -3.6906342081203283
                ],
                "children": "El rincón de las letras",
                "price": 0
            },
            {
                "key": "El río de la vida. Recuerdo del río Níger",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "El río de la vida. Recuerdo del río Níger",
                "price": 0
            },
            {
                "key": "El sirviente",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "El sirviente",
                "price": "ENTRADAS DE 5 A 22  euros(Incluído en Abonos de temporada)"
            },
            {
                "key": "EL SIRVIENTE. PROCESO CREATIVO",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "EL SIRVIENTE. PROCESO CREATIVO",
                "price": "Actividad gratuita"
            },
            {
                "key": "El sueño de la razón",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "El sueño de la razón",
                "price": "Entrada Gratuita."
            },
            {
                "key": "El triunfo del Barroco en las cortes europeas",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "El triunfo del Barroco en las cortes europeas",
                "price": 0
            },
            {
                "key": "El último caballero",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "El último caballero",
                "price": 0
            },
            {
                "key": "El viaje de Alicia",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "El viaje de Alicia",
                "price": 0
            },
            {
                "key": "El Viaje de Cervantes",
                "position": [
                    40.40731632818047,
                    -3.747465416906973
                ],
                "children": "El Viaje de Cervantes",
                "price": 0
            },
            {
                "key": "El viaje del ska",
                "position": [
                    40.39976467763712,
                    -3.775144917950533
                ],
                "children": "El viaje del ska",
                "price": 0
            },
            {
                "key": "Elaboración de cosmética natural",
                "position": [
                    40.39528026221424,
                    -3.7219395095828647
                ],
                "children": "Elaboración de cosmética natural",
                "price": 0
            },
            {
                "key": "Elena Arranz y Paloma Prieto Ricote",
                "position": [
                    40.476859845869534,
                    -3.642035334233322
                ],
                "children": "Elena Arranz y Paloma Prieto Ricote",
                "price": 0
            },
            {
                "key": "Eliane Elias",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Eliane Elias",
                "price": 0
            },
            {
                "key": "Embrujo lorquiano",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Embrujo lorquiano",
                "price": 0
            },
            {
                "key": "Emilia Moreno",
                "position": [
                    40.40159394334669,
                    -3.7491108414065617
                ],
                "children": "Emilia Moreno",
                "price": 0
            },
            {
                "key": "Emociones",
                "position": [
                    40.43664778776818,
                    -3.611362970564875
                ],
                "children": "Emociones",
                "price": 0
            },
            {
                "key": "Emociones",
                "position": [
                    40.446818592300296,
                    -3.5727411638209152
                ],
                "children": "Emociones",
                "price": 0
            },
            {
                "key": "Emociones de hojalata",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Emociones de hojalata",
                "price": 0
            },
            {
                "key": "Emociones de hojalata",
                "position": [
                    40.366768324753416,
                    -3.701141063083806
                ],
                "children": "Emociones de hojalata",
                "price": 0
            },
            {
                "key": "EN BOCA DE TODAS / KAPAN",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "EN BOCA DE TODAS / KAPAN",
                "price": 0
            },
            {
                "key": "EN BUSCA DEL PERSONAJE",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "EN BUSCA DEL PERSONAJE",
                "price": "Actividad gratuita"
            },
            {
                "key": "En busca del tesoro",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "En busca del tesoro",
                "price": 0
            },
            {
                "key": "En busca del tesoro",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "En busca del tesoro",
                "price": 0
            },
            {
                "key": "En busca del tesoro",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "En busca del tesoro",
                "price": 0
            },
            {
                "key": "En el vientre de la ballena",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "En el vientre de la ballena",
                "price": 0
            },
            {
                "key": "Encuentros con el público 2019/2020",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "Encuentros con el público 2019/2020",
                "price": "Entrada gratuita hasta completar aforo "
            },
            {
                "key": "Encuentros performáticos",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Encuentros performáticos",
                "price": "5 euros"
            },
            {
                "key": "Encuentro: 'Ver la experiencia durante el franquismo'",
                "position": [
                    40.42737760210632,
                    -3.7106116887809817
                ],
                "children": "Encuentro: 'Ver la experiencia durante el franquismo'",
                "price": 0
            },
            {
                "key": "Ensemble de Clarinetes de Madrid y sus invitados",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Ensemble de Clarinetes de Madrid y sus invitados",
                "price": 0
            },
            {
                "key": "ENTERRADOS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "ENTERRADOS",
                "price": 0
            },
            {
                "key": "Entre Lorca y lirios",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Entre Lorca y lirios",
                "price": 0
            },
            {
                "key": "Ephimera",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Ephimera",
                "price": 0
            },
            {
                "key": "Equipajes sin lastre",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Equipajes sin lastre",
                "price": 0
            },
            {
                "key": "Escenas de la Zarzuela, El Huésped del Sevillano y espectáculo de variedades",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Escenas de la Zarzuela, El Huésped del Sevillano y espectáculo de variedades",
                "price": 0
            },
            {
                "key": "Escucha activa",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Escucha activa",
                "price": 0
            },
            {
                "key": "Escuela de Igualdad",
                "position": [
                    40.40260600848557,
                    -3.6072838396839617
                ],
                "children": "Escuela de Igualdad",
                "price": 0
            },
            {
                "key": "Escuela de Teatro",
                "position": [
                    0,
                    0
                ],
                "children": "Escuela de Teatro",
                "price": 0
            },
            {
                "key": "Escuela para padres",
                "position": [
                    40.490415625465424,
                    -3.6553567517280032
                ],
                "children": "Escuela para padres",
                "price": 0
            },
            {
                "key": "Escuela para padres. Retiro",
                "position": [
                    40.402190438836826,
                    -3.6772826298329084
                ],
                "children": "Escuela para padres. Retiro",
                "price": 0
            },
            {
                "key": "Especial Halloween",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Especial Halloween",
                "price": 0
            },
            {
                "key": "Especial Halloween",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Especial Halloween",
                "price": 0
            },
            {
                "key": "Especial Navidad",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Especial Navidad",
                "price": 0
            },
            {
                "key": "Especial 'Feministas viajeras: ¿qué pasa con las mujeres en Brasil?'",
                "position": [
                    40.41087442118042,
                    -3.6538891267077664
                ],
                "children": "Especial 'Feministas viajeras: ¿qué pasa con las mujeres en Brasil?'",
                "price": 0
            },
            {
                "key": "Espectáculo de variedades",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Espectáculo de variedades",
                "price": 0
            },
            {
                "key": "Espías de edificios",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Espías de edificios",
                "price": 0
            },
            {
                "key": "Espías de edificios",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Espías de edificios",
                "price": 0
            },
            {
                "key": "Esta  Noche Tampoco",
                "position": [
                    40.49082275610172,
                    -3.7216054330053647
                ],
                "children": "Esta  Noche Tampoco",
                "price": 0
            },
            {
                "key": "Esta Noche Tampoco",
                "position": [
                    40.40159394334669,
                    -3.7491108414065617
                ],
                "children": "Esta Noche Tampoco",
                "price": 0
            },
            {
                "key": "Estimulación sensorial con mi bebé",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Estimulación sensorial con mi bebé",
                "price": 0
            },
            {
                "key": "Estudio 3: miradas",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "Estudio 3: miradas",
                "price": 0
            },
            {
                "key": "Eugenio Amador Ruiz",
                "position": [
                    40.42206601994432,
                    -3.6629680758652343
                ],
                "children": "Eugenio Amador Ruiz",
                "price": 0
            },
            {
                "key": "Evocaciones",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "Evocaciones",
                "price": 0
            },
            {
                "key": "EXORCISMOS / LA BELLEZA / CRIMEN / AUTOBIOGRAFÍA  -  PREMIO MIRADA INTERNACIONAL",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "EXORCISMOS / LA BELLEZA / CRIMEN / AUTOBIOGRAFÍA  -  PREMIO MIRADA INTERNACIONAL",
                "price": 0
            },
            {
                "key": "Exposición Alfredo Melero Samaniego",
                "position": [
                    40.436444648624814,
                    -3.637300067272268
                ],
                "children": "Exposición Alfredo Melero Samaniego",
                "price": 0
            },
            {
                "key": "Exposición artistas destacadas 2019 ? 2021",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Exposición artistas destacadas 2019 ? 2021",
                "price": "Entrada libre"
            },
            {
                "key": "Exposición colectiva de Pintura. Paisajes Distrito Fuencarral - El Pardo",
                "position": [
                    40.519673311658686,
                    -3.7779055687726535
                ],
                "children": "Exposición colectiva de Pintura. Paisajes Distrito Fuencarral - El Pardo",
                "price": 0
            },
            {
                "key": "Exposición de fotografía",
                "position": [
                    40.369689508453575,
                    -3.708167914482908
                ],
                "children": "Exposición de fotografía",
                "price": 0
            },
            {
                "key": "Exposición de José Calvo Fernández",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Exposición de José Calvo Fernández",
                "price": 0
            },
            {
                "key": "Exposición de Mandalas",
                "position": [
                    40.481067874165284,
                    -3.6933504628706095
                ],
                "children": "Exposición de Mandalas",
                "price": 0
            },
            {
                "key": "Exposición de Pintura",
                "position": [
                    40.334751832113774,
                    -3.7008095609215967
                ],
                "children": "Exposición de Pintura",
                "price": 0
            },
            {
                "key": "Exposición de pintura y artesanía",
                "position": [
                    40.35639654251886,
                    -3.69405018466109
                ],
                "children": "Exposición de pintura y artesanía",
                "price": 0
            },
            {
                "key": "Exposición de Pintura, Dibujo y Cartón",
                "position": [
                    40.35639654251886,
                    -3.69405018466109
                ],
                "children": "Exposición de Pintura, Dibujo y Cartón",
                "price": 0
            },
            {
                "key": "Exposición de setas de las Jornadas Micológicas en Ciudad Universitaria",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Exposición de setas de las Jornadas Micológicas en Ciudad Universitaria",
                "price": 0
            },
            {
                "key": "Exposición Dimitri Papagueorguiu",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Exposición Dimitri Papagueorguiu",
                "price": "Entrada libre"
            },
            {
                "key": "Exposición Villaverde Gallery",
                "position": [
                    40.35074797433515,
                    -3.6773064421969233
                ],
                "children": "Exposición Villaverde Gallery",
                "price": 0
            },
            {
                "key": "Exposición. VIII Bienal de Arte Textil Contemporáneo",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Exposición. VIII Bienal de Arte Textil Contemporáneo",
                "price": 0
            },
            {
                "key": "Exposición: 'Fuimos los primeros. La vuelta al mundo de Magallanes, Elcano'. Museo Naval",
                "position": [
                    40.390097282918894,
                    -3.6653290637247817
                ],
                "children": "Exposición: 'Fuimos los primeros. La vuelta al mundo de Magallanes, Elcano'. Museo Naval",
                "price": 0
            },
            {
                "key": "Exposición: 'Geometría', Pinturas de Andrés Peña",
                "position": [
                    40.381095838993176,
                    -3.710973351109332
                ],
                "children": "Exposición: 'Geometría', Pinturas de Andrés Peña",
                "price": 0
            },
            {
                "key": "Fabriano en el corazón. Acuarela española en Fabriano (Italia)",
                "position": [
                    40.465101515878985,
                    -3.6937642273215663
                ],
                "children": "Fabriano en el corazón. Acuarela española en Fabriano (Italia)",
                "price": 0
            },
            {
                "key": "Fabrica y dispara tu propia Ecocam, ¡con materiales reciclados!",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Fabrica y dispara tu propia Ecocam, ¡con materiales reciclados!",
                "price": 0
            },
            {
                "key": "Fabrica y dispara tu propia Ecocam, ¡con materiales reciclados!",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Fabrica y dispara tu propia Ecocam, ¡con materiales reciclados!",
                "price": 0
            },
            {
                "key": "Fabrica y dispara tu propia Ecocam, ¡con materiales reciclados!",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Fabrica y dispara tu propia Ecocam, ¡con materiales reciclados!",
                "price": 0
            },
            {
                "key": "Falun Dafa y meditación",
                "position": [
                    40.42646635574924,
                    -3.704943545703864
                ],
                "children": "Falun Dafa y meditación",
                "price": 0
            },
            {
                "key": "Felipe V (1ª parte)",
                "position": [
                    40.402072798628616,
                    -3.6955325387824014
                ],
                "children": "Felipe V (1ª parte)",
                "price": 0
            },
            {
                "key": "Festival cine Finlandés",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Festival cine Finlandés",
                "price": 0
            },
            {
                "key": "Festival de Cine de Madrid  FCM-PNR",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Festival de Cine de Madrid  FCM-PNR",
                "price": "Entrada libre hasta completar aforo. Retirada de invitaciones en taquilla 1 hora antes"
            },
            {
                "key": "Festival de Música Joven Ciudad Lineal 2019",
                "position": [
                    40.43629956289038,
                    -3.6504096146979457
                ],
                "children": "Festival de Música Joven Ciudad Lineal 2019",
                "price": 0
            },
            {
                "key": "Festival LDC",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Festival LDC",
                "price": 0
            },
            {
                "key": "Festival Pop 80",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Festival Pop 80",
                "price": 0
            },
            {
                "key": "Ficciones",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Ficciones",
                "price": "3  euros"
            },
            {
                "key": "Fiebre Vital",
                "position": [
                    40.43200210571468,
                    -3.6709293330780213
                ],
                "children": "Fiebre Vital",
                "price": 0
            },
            {
                "key": "Fiesta dada periódico",
                "position": [
                    40.49082275610172,
                    -3.7216054330053647
                ],
                "children": "Fiesta dada periódico",
                "price": 0
            },
            {
                "key": "Fiesta del diseño en Matadero Madrid",
                "position": [
                    40.391054868587204,
                    -3.6958072892892164
                ],
                "children": "Fiesta del diseño en Matadero Madrid",
                "price": 0
            },
            {
                "key": "Fiestas de Las Musas - Las Rosas",
                "position": [
                    0,
                    0
                ],
                "children": "Fiestas de Las Musas - Las Rosas",
                "price": 0
            },
            {
                "key": "Finales del Torneo de Tenis",
                "position": [
                    40.4789135943213,
                    -3.693540659747284
                ],
                "children": "Finales del Torneo de Tenis",
                "price": 0
            },
            {
                "key": "FIRCO 19",
                "position": [
                    40.405964231388396,
                    -3.6986013597538654
                ],
                "children": "FIRCO 19",
                "price": "ABONOS:Semifinal A + Semifinal B: 20 eurosSemifinal A + Semifinal B:+ Final: 30 euros"
            },
            {
                "key": "Flamencas on the Road",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Flamencas on the Road",
                "price": 0
            },
            {
                "key": "Flamenco Algarabía",
                "position": [
                    40.43200210571468,
                    -3.6709293330780213
                ],
                "children": "Flamenco Algarabía",
                "price": 0
            },
            {
                "key": "Flamenco Trane, Guillermo McGill",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Flamenco Trane, Guillermo McGill",
                "price": 0
            },
            {
                "key": "FleboCollect",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "FleboCollect",
                "price": 0
            },
            {
                "key": "Frecuencia Singular Plural  IV",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Frecuencia Singular Plural  IV",
                "price": "Entrada libre hasta completar aforo"
            },
            {
                "key": "Frecuencia Singular Plural  V",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Frecuencia Singular Plural  V",
                "price": " Entrada libre hasta completar aforo"
            },
            {
                "key": "Fuegos Artificiales",
                "position": [
                    40.47266915640937,
                    -3.707125226601672
                ],
                "children": "Fuegos Artificiales",
                "price": 0
            },
            {
                "key": "Fuente Agria de Puerto Llano",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Fuente Agria de Puerto Llano",
                "price": 0
            },
            {
                "key": "Fuenteovejuna",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Fuenteovejuna",
                "price": 0
            },
            {
                "key": "Fuenteovejuna",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Fuenteovejuna",
                "price": 0
            },
            {
                "key": "Gaba Esp y Jesper Pedersen Den",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Gaba Esp y Jesper Pedersen Den",
                "price": 0
            },
            {
                "key": "Gala concierto",
                "position": [
                    40.369689508453575,
                    -3.708167914482908
                ],
                "children": "Gala concierto",
                "price": 0
            },
            {
                "key": "Ganchillo revolucionario: tejiendo juntas",
                "position": [
                    40.39343275613288,
                    -3.6985778802913103
                ],
                "children": "Ganchillo revolucionario: tejiendo juntas",
                "price": 0
            },
            {
                "key": "Garmín el aventurero",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Garmín el aventurero",
                "price": 0
            },
            {
                "key": "GB QUARTET",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "GB QUARTET",
                "price": 0
            },
            {
                "key": "Género, Deporte y Comercio Justo comparten valores",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Género, Deporte y Comercio Justo comparten valores",
                "price": 0
            },
            {
                "key": "GENESIS 2.0",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "GENESIS 2.0",
                "price": 0
            },
            {
                "key": "Gestión de estrés basada en Mindfulness",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Gestión de estrés basada en Mindfulness",
                "price": 0
            },
            {
                "key": "Gestión emocional a través de la escritura",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Gestión emocional a través de la escritura",
                "price": 0
            },
            {
                "key": "GHOST FLEET",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "GHOST FLEET",
                "price": 0
            },
            {
                "key": "Giovanni Guidi / Mina Agossi. Sesión",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Giovanni Guidi / Mina Agossi. Sesión",
                "price": 0
            },
            {
                "key": "Glory Meyers",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Glory Meyers",
                "price": 0
            },
            {
                "key": "Gorrión Rojo",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Gorrión Rojo",
                "price": 0
            },
            {
                "key": "Grupo de flamenco Villarosa",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Grupo de flamenco Villarosa",
                "price": 0
            },
            {
                "key": "Grupo de flamenco y sevillanas",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Grupo de flamenco y sevillanas",
                "price": 0
            },
            {
                "key": "Grupo de Wazunguy Grupo Familia Corleone",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Grupo de Wazunguy Grupo Familia Corleone",
                "price": 0
            },
            {
                "key": "Grupo folklore y castañuelas Centro Mayores San Vicente de Paúl",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Grupo folklore y castañuelas Centro Mayores San Vicente de Paúl",
                "price": 0
            },
            {
                "key": "Grupo Los Castizos de Pericles",
                "position": [
                    40.40159394334669,
                    -3.7491108414065617
                ],
                "children": "Grupo Los Castizos de Pericles",
                "price": 0
            },
            {
                "key": "Grupo Retablo",
                "position": [
                    40.42206601994432,
                    -3.6629680758652343
                ],
                "children": "Grupo Retablo",
                "price": 0
            },
            {
                "key": "Guadalupe Plata",
                "position": [
                    40.43629956289038,
                    -3.6504096146979457
                ],
                "children": "Guadalupe Plata",
                "price": 0
            },
            {
                "key": "Gymkhana de viverismo",
                "position": [
                    40.40911512464532,
                    -3.679329078518436
                ],
                "children": "Gymkhana de viverismo",
                "price": 0
            },
            {
                "key": "Gymkhana 'Las aves del Retiro' y taller de fabricación de cajas nido",
                "position": [
                    40.40911512464532,
                    -3.679329078518436
                ],
                "children": "Gymkhana 'Las aves del Retiro' y taller de fabricación de cajas nido",
                "price": 0
            },
            {
                "key": "Gymkhana 'Las aves del Retiro' y taller de fabricación de comederos de aves",
                "position": [
                    40.40911512464532,
                    -3.679329078518436
                ],
                "children": "Gymkhana 'Las aves del Retiro' y taller de fabricación de comederos de aves",
                "price": 0
            },
            {
                "key": "Ha nacido una estrella",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Ha nacido una estrella",
                "price": 0
            },
            {
                "key": "Habaneras",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Habaneras",
                "price": 0
            },
            {
                "key": "Habla con Elías",
                "position": [
                    40.49231828430878,
                    -3.6906342081203283
                ],
                "children": "Habla con Elías",
                "price": 0
            },
            {
                "key": "Hacia dentro",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Hacia dentro",
                "price": 0
            },
            {
                "key": "Hay que deshacer la casa",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "Hay que deshacer la casa",
                "price": 0
            },
            {
                "key": "Her",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Her",
                "price": 0
            },
            {
                "key": "HERIDAS DE MUERTE: EL FEMINICIDIO UN TEMA EUROPEO",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "HERIDAS DE MUERTE: EL FEMINICIDIO UN TEMA EUROPEO",
                "price": 0
            },
            {
                "key": "Heridas. Mujeres de Federico García Lorca",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Heridas. Mujeres de Federico García Lorca",
                "price": 0
            },
            {
                "key": "Heterotopías",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Heterotopías",
                "price": 0
            },
            {
                "key": "Historia de la ciudad durante los siglos XIX-XX",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Historia de la ciudad durante los siglos XIX-XX",
                "price": "Entrada Libre"
            },
            {
                "key": "Historia del Blues en Madrid, una memoria fotográfica",
                "position": [
                    40.40939173676513,
                    -3.6532147773593313
                ],
                "children": "Historia del Blues en Madrid, una memoria fotográfica",
                "price": 0
            },
            {
                "key": "Historia del Retiro",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Historia del Retiro",
                "price": 0
            },
            {
                "key": "Historia y vida",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Historia y vida",
                "price": 0
            },
            {
                "key": "Historias Cantadas",
                "position": [
                    40.40647389284976,
                    -3.7327010920242034
                ],
                "children": "Historias Cantadas",
                "price": 0
            },
            {
                "key": "Historias menudas, ¡menudas historias!.",
                "position": [
                    0,
                    0
                ],
                "children": "Historias menudas, ¡menudas historias!.",
                "price": 0
            },
            {
                "key": "Home is the Cathedral of Life",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Home is the Cathedral of Life",
                "price": "Entrada libre"
            },
            {
                "key": "Homenaje a los 100 años de la llegada de Lorca a Madrid",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "Homenaje a los 100 años de la llegada de Lorca a Madrid",
                "price": 0
            },
            {
                "key": "HOMENAJE FRANCESC BETRIU. CUELLOS BLANCOS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "HOMENAJE FRANCESC BETRIU. CUELLOS BLANCOS",
                "price": 0
            },
            {
                "key": "HOMENAJE FRANCESC BETRIU. LA PLAZA DEL DIAMANTE. EPISODIOS DEL 1 AL 4",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "HOMENAJE FRANCESC BETRIU. LA PLAZA DEL DIAMANTE. EPISODIOS DEL 1 AL 4",
                "price": 0
            },
            {
                "key": "HOMENAJE FRANCESC BETRIU. UN DÍA VOLVERÉ. EPISODIO 1",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "HOMENAJE FRANCESC BETRIU. UN DÍA VOLVERÉ. EPISODIO 1",
                "price": 0
            },
            {
                "key": "HOMENAJE FRANCESC BETRIU. VIDA PRIVADA ? EPISODIO 1",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "HOMENAJE FRANCESC BETRIU. VIDA PRIVADA ? EPISODIO 1",
                "price": 0
            },
            {
                "key": "Hora del cuento en la Biblioteca Mario Vargas Llosa",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Hora del cuento en la Biblioteca Mario Vargas Llosa",
                "price": 0
            },
            {
                "key": "Hotel Chelsea",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Hotel Chelsea",
                "price": 0
            },
            {
                "key": "I love Madrid",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "I love Madrid",
                "price": "Por confirmar"
            },
            {
                "key": "III Concurso de Relatos: Cuarto y Mitad",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "III Concurso de Relatos: Cuarto y Mitad",
                "price": 0
            },
            {
                "key": "III Día Internacional del Paisaje del Consejo de Europa",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "III Día Internacional del Paisaje del Consejo de Europa",
                "price": 0
            },
            {
                "key": "III Festival LDC - Un lugar donde compartir",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "III Festival LDC - Un lugar donde compartir",
                "price": 0
            },
            {
                "key": "Ilusiones mágicas",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "Ilusiones mágicas",
                "price": 0
            },
            {
                "key": "Imagicnation",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Imagicnation",
                "price": 0
            },
            {
                "key": "Improtango",
                "position": [
                    40.43664778776818,
                    -3.611362970564875
                ],
                "children": "Improtango",
                "price": 0
            },
            {
                "key": "Improtango",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Improtango",
                "price": 0
            },
            {
                "key": "Incondicionales",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Incondicionales",
                "price": 0
            },
            {
                "key": "Inicio del nuevo curso  'Cuidar a quienes cuidan'",
                "position": [
                    0,
                    0
                ],
                "children": "Inicio del nuevo curso  'Cuidar a quienes cuidan'",
                "price": 0
            },
            {
                "key": "Inicio del nuevo curso 'Ejercicio al aire libre para personas mayores'",
                "position": [
                    0,
                    0
                ],
                "children": "Inicio del nuevo curso 'Ejercicio al aire libre para personas mayores'",
                "price": 0
            },
            {
                "key": "Instantes",
                "position": [
                    40.49082275610172,
                    -3.7216054330053647
                ],
                "children": "Instantes",
                "price": 0
            },
            {
                "key": "Instituto de Patrimonio Cultural de España (IPCE)",
                "position": [
                    40.35639654251886,
                    -3.69405018466109
                ],
                "children": "Instituto de Patrimonio Cultural de España (IPCE)",
                "price": 0
            },
            {
                "key": "Instituto Patrimonio Cultural de España",
                "position": [
                    40.39922276680456,
                    -3.6366543437448815
                ],
                "children": "Instituto Patrimonio Cultural de España",
                "price": 0
            },
            {
                "key": "Isabel II y su época",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Isabel II y su época",
                "price": 0
            },
            {
                "key": "ISLAND OF THE HUNGRY GHOSTS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "ISLAND OF THE HUNGRY GHOSTS",
                "price": 0
            },
            {
                "key": "Itinerario ornitológico por Madrid Rio",
                "position": [
                    40.40911512464532,
                    -3.679329078518436
                ],
                "children": "Itinerario ornitológico por Madrid Rio",
                "price": 0
            },
            {
                "key": "Itinierario ornitológico por El Pardo",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Itinierario ornitológico por El Pardo",
                "price": 0
            },
            {
                "key": "IV Carrera de autos locos Barrio del Pilar",
                "position": [
                    40.47266915640937,
                    -3.707125226601672
                ],
                "children": "IV Carrera de autos locos Barrio del Pilar",
                "price": 0
            },
            {
                "key": "IV salón de arte realista",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "IV salón de arte realista",
                "price": 0
            },
            {
                "key": "Jak el pirata mago",
                "position": [
                    40.46498334634005,
                    -3.650568266584692
                ],
                "children": "Jak el pirata mago",
                "price": 0
            },
            {
                "key": "Jardin Cyborg",
                "position": [
                    40.391054868587204,
                    -3.6958072892892164
                ],
                "children": "Jardin Cyborg",
                "price": 0
            },
            {
                "key": "Jazz en Conde Duque",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Jazz en Conde Duque",
                "price": 0
            },
            {
                "key": "JAZZTAÑUELA",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "JAZZTAÑUELA",
                "price": 0
            },
            {
                "key": "Joe Lovano Tapestry Trío",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Joe Lovano Tapestry Trío",
                "price": 0
            },
            {
                "key": "Johannes Vermeer, pintor de interiores. Bicentenario 1819-2019",
                "position": [
                    40.43371190964793,
                    -3.7104543597957766
                ],
                "children": "Johannes Vermeer, pintor de interiores. Bicentenario 1819-2019",
                "price": 0
            },
            {
                "key": "Jordi Sabatés presenta? ?Nosferatu, el vampiro?",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Jordi Sabatés presenta? ?Nosferatu, el vampiro?",
                "price": 0
            },
            {
                "key": "Jornada lúdica de Padel",
                "position": [
                    40.4789135943213,
                    -3.693540659747284
                ],
                "children": "Jornada lúdica de Padel",
                "price": 0
            },
            {
                "key": "Jornadas de Filosofía",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Jornadas de Filosofía",
                "price": 0
            },
            {
                "key": "Jornadas de realización cinematográfica",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Jornadas de realización cinematográfica",
                "price": 0
            },
            {
                "key": "Jornadas gratuitas de sevillanas",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Jornadas gratuitas de sevillanas",
                "price": 0
            },
            {
                "key": "José Hurtado Díaz",
                "position": [
                    40.42206601994432,
                    -3.6629680758652343
                ],
                "children": "José Hurtado Díaz",
                "price": 0
            },
            {
                "key": "Joseph Siankope and his New Orleans Jazz Band",
                "position": [
                    0,
                    0
                ],
                "children": "Joseph Siankope and his New Orleans Jazz Band",
                "price": 0
            },
            {
                "key": "Juan Esteban Cuacci y Romina Bianco",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Juan Esteban Cuacci y Romina Bianco",
                "price": 0
            },
            {
                "key": "Juan Pablo Saavedra. Cantautor Peruano",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "Juan Pablo Saavedra. Cantautor Peruano",
                "price": 0
            },
            {
                "key": "JUAN Y LAS BRUJAS / FUCK YOU / BUTTERFLY &amp; MOUSE / SI SOSPETTA IL MOVENTE PASSIONALE CON L?AGGRAVANTE DEI FUTILI MOTIVI",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "JUAN Y LAS BRUJAS / FUCK YOU / BUTTERFLY &amp; MOUSE / SI SOSPETTA IL MOVENTE PASSIONALE CON L?AGGRAVANTE DEI FUTILI MOTIVI",
                "price": 0
            },
            {
                "key": "Juana",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "Juana",
                "price": "ENTRADAS DE  5 A 22  euros(Incluido en Abonos de temporada)"
            },
            {
                "key": "Juego de luces y colores",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Juego de luces y colores",
                "price": 0
            },
            {
                "key": "Juego de Troncos",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "Juego de Troncos",
                "price": 0
            },
            {
                "key": "Juegos de mesa en la biblioteca",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Juegos de mesa en la biblioteca",
                "price": 0
            },
            {
                "key": "Juegos infantiles scout",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Juegos infantiles scout",
                "price": 0
            },
            {
                "key": "Jugando a la vida",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "Jugando a la vida",
                "price": 0
            },
            {
                "key": "Julián Redondo",
                "position": [
                    40.40647389284976,
                    -3.7327010920242034
                ],
                "children": "Julián Redondo",
                "price": 0
            },
            {
                "key": "Kimbo",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "Kimbo",
                "price": 0
            },
            {
                "key": "Kontxi Lorente Trio",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Kontxi Lorente Trio",
                "price": 0
            },
            {
                "key": "La artificialidad del límite",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "La artificialidad del límite",
                "price": "Entrada Libre"
            },
            {
                "key": "La avalancha del rock",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "La avalancha del rock",
                "price": 0
            },
            {
                "key": "LA BESTIA HUMANA",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "LA BESTIA HUMANA",
                "price": 0
            },
            {
                "key": "La casa de la llave",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "La casa de la llave",
                "price": "Entrada general - 16 eurosVenta anticipada - 13 eurosMartes y Miércoles - 14 euros (día del espectador)Amigos TFG - 12 euros.Grupos (+ de 15) - 12 eurosOTRAS TARIFAS:Tarifa reducida: 14 euros (Todos los días): Carné joven, mayores de 65, familia numerosa, desempleados, diversidad funcional y Carné de bibliotecas municipales de Madrid.Tarifa infantil (hasta 14 años) y grupos escolares (hasta 18 años) - 12 euros (todos los días por la tarde).Funciones matinales - 10 euros (campaña escolar)Reservas de grupos y Amigos TFG:  Contactar previamente en amigos@teatrofernangomez.com y grupos@teatrofernangomez.comTlfonos: 913 184 733 / 734 / Extensiones - 1733/1734/1742Descuentos no acumulables y sujetos a disponibilidad de la Sala.Amigos TFG: Reservas en amigos@teatrofernangomez.com - Teléfono: 913 184 733 / 734 / Extensiones - 1733/1734/1742Este espectáculo está acogido al Joven Bono Cultural. si tienes entre 16 y 26 años, apúntate aquí al JOBO y ven gratis (De martes a viernes incluidos).Para descuentos"
            },
            {
                "key": "La casa de Tomasa",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "La casa de Tomasa",
                "price": 0
            },
            {
                "key": "La casa de Tomasa",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "La casa de Tomasa",
                "price": 0
            },
            {
                "key": "La cenicienta, un mágico festval",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "La cenicienta, un mágico festval",
                "price": 0
            },
            {
                "key": "La cenicienta, un mágico festval",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "La cenicienta, un mágico festval",
                "price": 0
            },
            {
                "key": "La ceniza es el blanco más puro",
                "position": [
                    40.444774749021846,
                    -3.6129105844633775
                ],
                "children": "La ceniza es el blanco más puro",
                "price": 0
            },
            {
                "key": "LA CIGARRA Y LA HORMIGA' Y 'LA TORTUGA Y LA LIEBRE",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "LA CIGARRA Y LA HORMIGA' Y 'LA TORTUGA Y LA LIEBRE",
                "price": 0
            },
            {
                "key": "La Dama Boba",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "La Dama Boba",
                "price": 0
            },
            {
                "key": "La dama y el trovador",
                "position": [
                    40.43664778776818,
                    -3.611362970564875
                ],
                "children": "La dama y el trovador",
                "price": 0
            },
            {
                "key": "La disco de Ramón",
                "position": [
                    40.446818592300296,
                    -3.5727411638209152
                ],
                "children": "La disco de Ramón",
                "price": 0
            },
            {
                "key": "La enfermedad del domingo",
                "position": [
                    0,
                    0
                ],
                "children": "La enfermedad del domingo",
                "price": 0
            },
            {
                "key": "La espuma de los días /3D/",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "La espuma de los días /3D/",
                "price": 0
            },
            {
                "key": "La exposición de Beatriz García-Pantaleón",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "La exposición de Beatriz García-Pantaleón",
                "price": 0
            },
            {
                "key": "La extraña pareja",
                "position": [
                    40.519673311658686,
                    -3.7779055687726535
                ],
                "children": "La extraña pareja",
                "price": 0
            },
            {
                "key": "La extraña pareja",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "La extraña pareja",
                "price": 0
            },
            {
                "key": "La gallinita de los huevos de oro",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "La gallinita de los huevos de oro",
                "price": 0
            },
            {
                "key": "La herida luminosa",
                "position": [
                    40.46678159096302,
                    -3.7195669111891694
                ],
                "children": "La herida luminosa",
                "price": 0
            },
            {
                "key": "La historia de un huevo perdido",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "La historia de un huevo perdido",
                "price": 0
            },
            {
                "key": "La interpretación de los sueños",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "La interpretación de los sueños",
                "price": 0
            },
            {
                "key": "La isla de Santa Rena",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "La isla de Santa Rena",
                "price": 0
            },
            {
                "key": "La isla de Santa Rena, de Juan Carlos Merino",
                "position": [
                    40.39597072367931,
                    -3.7562716852987847
                ],
                "children": "La isla de Santa Rena, de Juan Carlos Merino",
                "price": 0
            },
            {
                "key": "La Lectora de Saramago",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "La Lectora de Saramago",
                "price": 0
            },
            {
                "key": "La luna es un globo",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "La luna es un globo",
                "price": 0
            },
            {
                "key": "La magia de Adolfo Andrés",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "La magia de Adolfo Andrés",
                "price": 0
            },
            {
                "key": "La mala vida en Madrid",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "La mala vida en Madrid",
                "price": 0
            },
            {
                "key": "La maldición de la gárgola",
                "position": [
                    0,
                    0
                ],
                "children": "La maldición de la gárgola",
                "price": 0
            },
            {
                "key": "La memoria",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "La memoria",
                "price": "10  euros general / 8  euros reducida"
            },
            {
                "key": "La Monja",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "La Monja",
                "price": 0
            },
            {
                "key": "La música clásica en el día a día",
                "position": [
                    40.39982891410407,
                    -3.621281890570377
                ],
                "children": "La música clásica en el día a día",
                "price": 0
            },
            {
                "key": "La Música de las 3 Culturas",
                "position": [
                    40.424470608043535,
                    -3.6504253324201104
                ],
                "children": "La Música de las 3 Culturas",
                "price": 0
            },
            {
                "key": "La Noche de las Tribadas",
                "position": [
                    40.39976467763712,
                    -3.775144917950533
                ],
                "children": "La Noche de las Tribadas",
                "price": 0
            },
            {
                "key": "La nutrición y su importancia en el tratamiento y prevención de la artrosis",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "La nutrición y su importancia en el tratamiento y prevención de la artrosis",
                "price": 0
            },
            {
                "key": "La odisea de Jorge",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "La odisea de Jorge",
                "price": 0
            },
            {
                "key": "La Patronita",
                "position": [
                    40.394522745106734,
                    -3.7000855961559855
                ],
                "children": "La Patronita",
                "price": 0
            },
            {
                "key": "La pintura flamenca en el Museo de El Prado",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "La pintura flamenca en el Museo de El Prado",
                "price": 0
            },
            {
                "key": "La población de Madrid",
                "position": [
                    40.47900813206291,
                    -3.7091383777024354
                ],
                "children": "La población de Madrid",
                "price": 0
            },
            {
                "key": "La primera luna llena del niño lobo",
                "position": [
                    40.43664778776818,
                    -3.611362970564875
                ],
                "children": "La primera luna llena del niño lobo",
                "price": 0
            },
            {
                "key": "La princesa Sara",
                "position": [
                    40.43200210571468,
                    -3.6709293330780213
                ],
                "children": "La princesa Sara",
                "price": 0
            },
            {
                "key": "La rebelión del océano",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "La rebelión del océano",
                "price": 0
            },
            {
                "key": "La red social",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "La red social",
                "price": 0
            },
            {
                "key": "La Regadera. Programa para escuelas infantiles y colegios públicos (De 0 a 5 años)",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "La Regadera. Programa para escuelas infantiles y colegios públicos (De 0 a 5 años)",
                "price": 0
            },
            {
                "key": "La Sirenita",
                "position": [
                    40.40159394334669,
                    -3.7491108414065617
                ],
                "children": "La Sirenita",
                "price": 0
            },
            {
                "key": "La situación de las niñas en el mundo. Monográfico conmemorativo Día Internacional de las Niñas",
                "position": [
                    40.433958260960964,
                    -3.7143358486689415
                ],
                "children": "La situación de las niñas en el mundo. Monográfico conmemorativo Día Internacional de las Niñas",
                "price": 0
            },
            {
                "key": "La traída de aguas a Madrid",
                "position": [
                    40.40939173676513,
                    -3.6532147773593313
                ],
                "children": "La traída de aguas a Madrid",
                "price": 0
            },
            {
                "key": "La Tribu",
                "position": [
                    40.35639654251886,
                    -3.69405018466109
                ],
                "children": "La Tribu",
                "price": 0
            },
            {
                "key": "La tribu",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "La tribu",
                "price": 0
            },
            {
                "key": "La vida de Brian",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "La vida de Brian",
                "price": 0
            },
            {
                "key": "La vida desde una mecedora, de JR. Menéndez Jiménez",
                "position": [
                    40.42738668300474,
                    -3.7105999955473625
                ],
                "children": "La vida desde una mecedora, de JR. Menéndez Jiménez",
                "price": 0
            },
            {
                "key": "La vida secreta de mamá",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "La vida secreta de mamá",
                "price": 0
            },
            {
                "key": "Laboratorio de Realidades Sintéticas (LabRS)",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "Laboratorio de Realidades Sintéticas (LabRS)",
                "price": 0
            },
            {
                "key": "Laboratorio fotográfico",
                "position": [
                    40.49231828430878,
                    -3.6906342081203283
                ],
                "children": "Laboratorio fotográfico",
                "price": 0
            },
            {
                "key": "Ladybug",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Ladybug",
                "price": 0
            },
            {
                "key": "Ladybug",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Ladybug",
                "price": 0
            },
            {
                "key": "Ladybug",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Ladybug",
                "price": 0
            },
            {
                "key": "Ladybug",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Ladybug",
                "price": 0
            },
            {
                "key": "Las Almohadas Mágicas",
                "position": [
                    40.378853797128336,
                    -3.781961611303212
                ],
                "children": "Las Almohadas Mágicas",
                "price": 0
            },
            {
                "key": "Las aventuras de Peter Pan",
                "position": [
                    40.46498334634005,
                    -3.650568266584692
                ],
                "children": "Las aventuras de Peter Pan",
                "price": 0
            },
            {
                "key": "Las chicas del Juernes",
                "position": [
                    40.43664778776818,
                    -3.611362970564875
                ],
                "children": "Las chicas del Juernes",
                "price": 0
            },
            {
                "key": "Las Cositas del Querer 1939, El Musical",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "Las Cositas del Querer 1939, El Musical",
                "price": 0
            },
            {
                "key": "Las flores de la guerra",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "Las flores de la guerra",
                "price": 0
            },
            {
                "key": "Las formas definidas del color. Pintura y collage.",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Las formas definidas del color. Pintura y collage.",
                "price": 0
            },
            {
                "key": "Las Juanita Banana",
                "position": [
                    40.38684744124125,
                    -3.7277403267439593
                ],
                "children": "Las Juanita Banana",
                "price": 0
            },
            {
                "key": "Las maravillas del Retiro",
                "position": [
                    40.40911512464532,
                    -3.679329078518436
                ],
                "children": "Las maravillas del Retiro",
                "price": 0
            },
            {
                "key": "Las parejas hoy en día",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Las parejas hoy en día",
                "price": 0
            },
            {
                "key": "Láser Kids",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Láser Kids",
                "price": "5 euros"
            },
            {
                "key": "LAST STREET",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "LAST STREET",
                "price": 0
            },
            {
                "key": "Latidos",
                "position": [
                    40.407405510530545,
                    -3.7119218940274026
                ],
                "children": "Latidos",
                "price": 0
            },
            {
                "key": "LE VIDE-ESSAI DE CIRQUE (EL VACÍO-ENSAYO DE CIRCO)",
                "position": [
                    40.405964231388396,
                    -3.6986013597538654
                ],
                "children": "LE VIDE-ESSAI DE CIRQUE (EL VACÍO-ENSAYO DE CIRCO)",
                "price": 0
            },
            {
                "key": "Lectura en voz alta",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Lectura en voz alta",
                "price": 0
            },
            {
                "key": "Lecturas a cargo de la Biblioteca María Zambrano.",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Lecturas a cargo de la Biblioteca María Zambrano.",
                "price": 0
            },
            {
                "key": "Leonor de Guzmán: la favorita",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "Leonor de Guzmán: la favorita",
                "price": 0
            },
            {
                "key": "Levadura 2019-2020. Convocatoria de creadores",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Levadura 2019-2020. Convocatoria de creadores",
                "price": 0
            },
            {
                "key": "Libro de aventuras",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "Libro de aventuras",
                "price": 0
            },
            {
                "key": "Libro de aventuras (vencer al monstruo)",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "Libro de aventuras (vencer al monstruo)",
                "price": 0
            },
            {
                "key": "Living Room Room",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Living Room Room",
                "price": "12 euros"
            },
            {
                "key": "Llegó a mi como un colibrí",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Llegó a mi como un colibrí",
                "price": 0
            },
            {
                "key": "Lo mejor de la zarzuela",
                "position": [
                    40.378853797128336,
                    -3.781961611303212
                ],
                "children": "Lo mejor de la zarzuela",
                "price": 0
            },
            {
                "key": "Lo mejor de Yllana",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Lo mejor de Yllana",
                "price": 0
            },
            {
                "key": "Lo nunca visto",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "Lo nunca visto",
                "price": "ENTRADAS 18  euros."
            },
            {
                "key": "Lola la oveja torpe",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Lola la oveja torpe",
                "price": 0
            },
            {
                "key": "Long lasting affair",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Long lasting affair",
                "price": 0
            },
            {
                "key": "Los caminos de Federico",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "Los caminos de Federico",
                "price": 0
            },
            {
                "key": "Los colores del otoño",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los colores del otoño",
                "price": 0
            },
            {
                "key": "Los colores del otoño",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los colores del otoño",
                "price": 0
            },
            {
                "key": "Los colores del otoño",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los colores del otoño",
                "price": 0
            },
            {
                "key": "Los colores del otoño",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los colores del otoño",
                "price": 0
            },
            {
                "key": "Los colores del otoño",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los colores del otoño",
                "price": 0
            },
            {
                "key": "Los colores del otoño",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los colores del otoño",
                "price": 0
            },
            {
                "key": "Los colores del otorño",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los colores del otorño",
                "price": 0
            },
            {
                "key": "Los colores del reciclaje",
                "position": [
                    40.41878362561595,
                    -3.6866519471003647
                ],
                "children": "Los colores del reciclaje",
                "price": 0
            },
            {
                "key": "Los cuentos del erizo, con Daniel Tornero",
                "position": [
                    40.45749513485957,
                    -3.710539712535917
                ],
                "children": "Los cuentos del erizo, con Daniel Tornero",
                "price": 0
            },
            {
                "key": "Los cuentos del erizo, de Daniel Tornero",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Los cuentos del erizo, de Daniel Tornero",
                "price": 0
            },
            {
                "key": "Los cuentos del erizo, de Daniel Tornero",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Los cuentos del erizo, de Daniel Tornero",
                "price": 0
            },
            {
                "key": "Los cuentos del erizo, de Daniel Tornero",
                "position": [
                    40.44640229188281,
                    -3.6117933204271098
                ],
                "children": "Los cuentos del erizo, de Daniel Tornero",
                "price": 0
            },
            {
                "key": "Los cuentos del erizo, de Daniel Tornero",
                "position": [
                    40.39982891410407,
                    -3.621281890570377
                ],
                "children": "Los cuentos del erizo, de Daniel Tornero",
                "price": 0
            },
            {
                "key": "Los mayores también cuentan",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Los mayores también cuentan",
                "price": 0
            },
            {
                "key": "Los molinos de la noche",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Los molinos de la noche",
                "price": 0
            },
            {
                "key": "Los pequeños también plantamos",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Los pequeños también plantamos",
                "price": 0
            },
            {
                "key": "Los tres pilares fundamentales en la práctica de Mindfulness",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Los tres pilares fundamentales en la práctica de Mindfulness",
                "price": 0
            },
            {
                "key": "Los tres tenores",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "Los tres tenores",
                "price": 0
            },
            {
                "key": "Los Voluble",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Los Voluble",
                "price": 0
            },
            {
                "key": "Ludoteca",
                "position": [
                    40.495045642116544,
                    -3.688007025609376
                ],
                "children": "Ludoteca",
                "price": 0
            },
            {
                "key": "Ludoteca",
                "position": [
                    40.519673311658686,
                    -3.7779055687726535
                ],
                "children": "Ludoteca",
                "price": 0
            },
            {
                "key": "Ludoteca",
                "position": [
                    40.519673311658686,
                    -3.7779055687726535
                ],
                "children": "Ludoteca",
                "price": 0
            },
            {
                "key": "Ludoteca",
                "position": [
                    40.519673311658686,
                    -3.7779055687726535
                ],
                "children": "Ludoteca",
                "price": 0
            },
            {
                "key": "Ludoteca",
                "position": [
                    40.495045642116544,
                    -3.688007025609376
                ],
                "children": "Ludoteca",
                "price": 0
            },
            {
                "key": "Ludoteca",
                "position": [
                    40.495045642116544,
                    -3.688007025609376
                ],
                "children": "Ludoteca",
                "price": 0
            },
            {
                "key": "Ludotecas en Distrito Latina",
                "position": [
                    0,
                    0
                ],
                "children": "Ludotecas en Distrito Latina",
                "price": 0
            },
            {
                "key": "LURRALDE HOTZAK",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "LURRALDE HOTZAK",
                "price": 0
            },
            {
                "key": "Lutero: forjador de la forma alemana de estar en el mundo",
                "position": [
                    40.397074625115906,
                    -3.7664885474841565
                ],
                "children": "Lutero: forjador de la forma alemana de estar en el mundo",
                "price": 0
            },
            {
                "key": "L.E.V. Matadero. Festival de música electrónica",
                "position": [
                    40.391054868587204,
                    -3.6958072892892164
                ],
                "children": "L.E.V. Matadero. Festival de música electrónica",
                "price": 0
            },
            {
                "key": "Macarena Ramírez",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Macarena Ramírez",
                "price": 0
            },
            {
                "key": "Mad Martin",
                "position": [
                    40.40159394334669,
                    -3.7491108414065617
                ],
                "children": "Mad Martin",
                "price": 0
            },
            {
                "key": "Madrid alzando la Mirada",
                "position": [
                    40.49082275610172,
                    -3.7216054330053647
                ],
                "children": "Madrid alzando la Mirada",
                "price": 0
            },
            {
                "key": "Madrid Gráfica 19. Ciudades sostenibles.",
                "position": [
                    40.394522745106734,
                    -3.7000855961559855
                ],
                "children": "Madrid Gráfica 19. Ciudades sostenibles.",
                "price": 0
            },
            {
                "key": "Madrid Isabelino",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Madrid Isabelino",
                "price": 0
            },
            {
                "key": "Madrid se escribe con M de Mingote",
                "position": [
                    40.42577054821346,
                    -3.700845660719608
                ],
                "children": "Madrid se escribe con M de Mingote",
                "price": 0
            },
            {
                "key": "Madrid, ciudad educadora 1898/1938). Memoria de la escuela pública.",
                "position": [
                    40.42577054821346,
                    -3.700845660719608
                ],
                "children": "Madrid, ciudad educadora 1898/1938). Memoria de la escuela pública.",
                "price": 0
            },
            {
                "key": "Magia al límite de lo absurdo",
                "position": [
                    40.446818592300296,
                    -3.5727411638209152
                ],
                "children": "Magia al límite de lo absurdo",
                "price": 0
            },
            {
                "key": "Magia en acción",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Magia en acción",
                "price": 0
            },
            {
                "key": "Magicéltica",
                "position": [
                    0,
                    0
                ],
                "children": "Magicéltica",
                "price": 0
            },
            {
                "key": "Magicéltica",
                "position": [
                    0,
                    0
                ],
                "children": "Magicéltica",
                "price": 0
            },
            {
                "key": "Magicéltica",
                "position": [
                    0,
                    0
                ],
                "children": "Magicéltica",
                "price": 0
            },
            {
                "key": "Mago de Oz",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Mago de Oz",
                "price": 0
            },
            {
                "key": "Magomino",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "Magomino",
                "price": 0
            },
            {
                "key": "Malabareando",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Malabareando",
                "price": 0
            },
            {
                "key": "Malabares contados de Ichi",
                "position": [
                    0,
                    0
                ],
                "children": "Malabares contados de Ichi",
                "price": 0
            },
            {
                "key": "MALVALANDA 13 AÑOS EN CORTO",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "MALVALANDA 13 AÑOS EN CORTO",
                "price": 0
            },
            {
                "key": "Mamá no quiero ser normal",
                "position": [
                    40.34636268334182,
                    -3.708524395897377
                ],
                "children": "Mamá no quiero ser normal",
                "price": 0
            },
            {
                "key": "Mamá, de mayor quiero ser ornitóloga",
                "position": [
                    40.402549313705286,
                    -3.668092320219012
                ],
                "children": "Mamá, de mayor quiero ser ornitóloga",
                "price": 0
            },
            {
                "key": "Mamá, no quiero ser normal",
                "position": [
                    40.379584618162156,
                    -3.623110349262378
                ],
                "children": "Mamá, no quiero ser normal",
                "price": 0
            },
            {
                "key": "MAN Rec",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "MAN Rec",
                "price": "Por confirmar"
            },
            {
                "key": "Mapeando Chamberí en femenino",
                "position": [
                    40.433958260960964,
                    -3.7143358486689415
                ],
                "children": "Mapeando Chamberí en femenino",
                "price": 0
            },
            {
                "key": "Marcia Ball",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Marcia Ball",
                "price": 0
            },
            {
                "key": "Margarito, las confesiones de un inspector de Hacienda",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Margarito, las confesiones de un inspector de Hacienda",
                "price": 0
            },
            {
                "key": "María de Molina: la reina consorte",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "María de Molina: la reina consorte",
                "price": 0
            },
            {
                "key": "María Gracia, en concierto",
                "position": [
                    40.424470608043535,
                    -3.6504253324201104
                ],
                "children": "María Gracia, en concierto",
                "price": 0
            },
            {
                "key": "María Toro",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "María Toro",
                "price": 0
            },
            {
                "key": "MARIACHIS LOS LEONES",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "MARIACHIS LOS LEONES",
                "price": 0
            },
            {
                "key": "Mark Vernon y Elodie (Andrew Chalk y Timo Van Luijk) UK",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Mark Vernon y Elodie (Andrew Chalk y Timo Van Luijk) UK",
                "price": 0
            },
            {
                "key": "Más cuentos que Calleja, de Juan Gamba",
                "position": [
                    40.405283650744316,
                    -3.60862782329228
                ],
                "children": "Más cuentos que Calleja, de Juan Gamba",
                "price": 0
            },
            {
                "key": "Más cuentos que Calleja, de Juan Gamba",
                "position": [
                    40.397074625115906,
                    -3.7664885474841565
                ],
                "children": "Más cuentos que Calleja, de Juan Gamba",
                "price": 0
            },
            {
                "key": "Más cuentos que Calleja, de Juan Gamba",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Más cuentos que Calleja, de Juan Gamba",
                "price": 0
            },
            {
                "key": "Más cuentos que Calleja, de Juan Gamba",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Más cuentos que Calleja, de Juan Gamba",
                "price": 0
            },
            {
                "key": "Masque 2",
                "position": [
                    40.40647389284976,
                    -3.7327010920242034
                ],
                "children": "Masque 2",
                "price": 0
            },
            {
                "key": "Matar a Dios",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "Matar a Dios",
                "price": 0
            },
            {
                "key": "Mayka Kaïma",
                "position": [
                    40.39976467763712,
                    -3.775144917950533
                ],
                "children": "Mayka Kaïma",
                "price": 0
            },
            {
                "key": "MAYTE MAYA AL CANTE, ACOMPAÑADA DE JOSÉ ARENAS A LA GUITARRA",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "MAYTE MAYA AL CANTE, ACOMPAÑADA DE JOSÉ ARENAS A LA GUITARRA",
                "price": 0
            },
            {
                "key": "Mazinger Z Infinity",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Mazinger Z Infinity",
                "price": 0
            },
            {
                "key": "Medio Limón",
                "position": [
                    40.40647389284976,
                    -3.7327010920242034
                ],
                "children": "Medio Limón",
                "price": 0
            },
            {
                "key": "Meditación",
                "position": [
                    40.42941133441142,
                    -3.6416899839787695
                ],
                "children": "Meditación",
                "price": 0
            },
            {
                "key": "Meditación y experiencias compartidas 4. Sintonízate",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "Meditación y experiencias compartidas 4. Sintonízate",
                "price": 0
            },
            {
                "key": "Melanie de Biasio",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Melanie de Biasio",
                "price": "18  euros general / 15  euros reducida"
            },
            {
                "key": "Memento - Talleres | Tatuajes, memoria y cuerpos",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Memento - Talleres | Tatuajes, memoria y cuerpos",
                "price": 0
            },
            {
                "key": "Memoria de la letra. Obsequium.",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "Memoria de la letra. Obsequium.",
                "price": 0
            },
            {
                "key": "Meneo",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Meneo",
                "price": "Entrada libre"
            },
            {
                "key": "Meraki",
                "position": [
                    40.378853797128336,
                    -3.781961611303212
                ],
                "children": "Meraki",
                "price": 0
            },
            {
                "key": "MERCURIO / CON LOS OJOS ABIERTOS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "MERCURIO / CON LOS OJOS ABIERTOS",
                "price": 0
            },
            {
                "key": "Mesa redonda: 'Los cines de barrio'.",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "Mesa redonda: 'Los cines de barrio'.",
                "price": 0
            },
            {
                "key": "METAMORPHOSIS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "METAMORPHOSIS",
                "price": 0
            },
            {
                "key": "Métete en el cuento: creación de escenografías",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Métete en el cuento: creación de escenografías",
                "price": 0
            },
            {
                "key": "Métete en el cuento: creación de escenografías",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Métete en el cuento: creación de escenografías",
                "price": 0
            },
            {
                "key": "Métete en el cuento: Ricitos de oro y Los tres osos",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Métete en el cuento: Ricitos de oro y Los tres osos",
                "price": 0
            },
            {
                "key": "Métete en el cuento: Ricitos de oro y Los tres osos",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Métete en el cuento: Ricitos de oro y Los tres osos",
                "price": 0
            },
            {
                "key": "México en acuarela",
                "position": [
                    40.465101515878985,
                    -3.6937642273215663
                ],
                "children": "México en acuarela",
                "price": 0
            },
            {
                "key": "Mi diario",
                "position": [
                    0,
                    0
                ],
                "children": "Mi diario",
                "price": 0
            },
            {
                "key": "Mi Primer Festival de Cine",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Mi Primer Festival de Cine",
                "price": "Consultar precio en cada actividad"
            },
            {
                "key": "Mi querida Maribel",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "Mi querida Maribel",
                "price": 0
            },
            {
                "key": "MIAM MIAM / OCHO DE CADA DIEZ",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "MIAM MIAM / OCHO DE CADA DIEZ",
                "price": 0
            },
            {
                "key": "Microarquitecturas: jugar y construir",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Microarquitecturas: jugar y construir",
                "price": 0
            },
            {
                "key": "Microarquitecturas: jugar y construir",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Microarquitecturas: jugar y construir",
                "price": 0
            },
            {
                "key": "Microarquitecturas: jugar y construir",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Microarquitecturas: jugar y construir",
                "price": 0
            },
            {
                "key": "Miguel Benlloch. Cuerpo conjugado",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Miguel Benlloch. Cuerpo conjugado",
                "price": "Entrada libreMirar de frente, publicación a la venta en el punto de Información del centro, planta 2. Precio: 10  euros"
            },
            {
                "key": "Mike Stern/Jeff Lorber Band y D. Chambers &amp; J. Haslip",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Mike Stern/Jeff Lorber Band y D. Chambers &amp; J. Haslip",
                "price": 0
            },
            {
                "key": "Mikolaj Bielski",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Mikolaj Bielski",
                "price": 0
            },
            {
                "key": "Mindfulness para la gestión de estrés",
                "position": [
                    40.41410290844665,
                    -3.709859121273588
                ],
                "children": "Mindfulness para la gestión de estrés",
                "price": 0
            },
            {
                "key": "Mis orígenes",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "Mis orígenes",
                "price": 0
            },
            {
                "key": "MODERN SHEPERDESS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "MODERN SHEPERDESS",
                "price": 0
            },
            {
                "key": "Moisés P. Sánchez Project",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Moisés P. Sánchez Project",
                "price": 0
            },
            {
                "key": "Mójate conmigo",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "Mójate conmigo",
                "price": 0
            },
            {
                "key": "Momo de Michael Ende",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Momo de Michael Ende",
                "price": "5 euros"
            },
            {
                "key": "Moncloa a ritmo de Jazz. Beatriz Zaragoza Quartet",
                "position": [
                    40.43520939382668,
                    -3.7188765163188284
                ],
                "children": "Moncloa a ritmo de Jazz. Beatriz Zaragoza Quartet",
                "price": 0
            },
            {
                "key": "Moncloa a ritmo de Jazz. Iván Sangüesa",
                "position": [
                    40.46678159096302,
                    -3.7195669111891694
                ],
                "children": "Moncloa a ritmo de Jazz. Iván Sangüesa",
                "price": 0
            },
            {
                "key": "Moncloa a ritmo de Jazz. Javier Colina, A. Serrano y G. McGill",
                "position": [
                    40.43520939382668,
                    -3.7188765163188284
                ],
                "children": "Moncloa a ritmo de Jazz. Javier Colina, A. Serrano y G. McGill",
                "price": 0
            },
            {
                "key": "Moncloa a ritmo de Jazz. Jorge Vera Quintet",
                "position": [
                    40.43520939382668,
                    -3.7188765163188284
                ],
                "children": "Moncloa a ritmo de Jazz. Jorge Vera Quintet",
                "price": 0
            },
            {
                "key": "Moncloa a ritmo de Jazz. Latinjazz",
                "position": [
                    40.46678159096302,
                    -3.7195669111891694
                ],
                "children": "Moncloa a ritmo de Jazz. Latinjazz",
                "price": 0
            },
            {
                "key": "Monográfico decoración",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Monográfico decoración",
                "price": 0
            },
            {
                "key": "Monográfico infantil a partir de 5 años",
                "position": [
                    40.44842892576264,
                    -3.59809698881874
                ],
                "children": "Monográfico infantil a partir de 5 años",
                "price": 0
            },
            {
                "key": "Monográfico Tai Chi Taoísta",
                "position": [
                    40.446818592300296,
                    -3.5727411638209152
                ],
                "children": "Monográfico Tai Chi Taoísta",
                "price": 0
            },
            {
                "key": "Monsieur Goya, una indagación",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Monsieur Goya, una indagación",
                "price": "Entrada general - 20 eurosDía del espectador (martes y miércoles)- 18 eurosAmigos TFG - 16 eurosGrupos (+ de 15) - 16 eurosGrupos escolares (hasta 18 años) - 14 euros (todos los días por la tarde)OTRAS TARIFAS:Tarifa reducida - 17 euros. Todos los días: Carné joven, mayores de 65, familia numerosa, desempleados, discapacitados y Carné de bibliotecas municipales de Madrid.Tarifa infantil (hasta 14 años) y grupos escolares (hasta 18 años) - 14 euros (todos los días por la tarde).Reservas de grupos y Funciones matinales de campaña escolar:MENCHOSA.  Contacto y reservas AQUÍ:  menchosa@menchosa.org - Tlfonos: 91 34 83 310 ? 91 00 52 251 ? 607894634Reservas de Amigos TFG:  Contactar previamente en amigos@teatrofernangomez.comTlfonos: 913 184 733 / 734 / Extensiones - 1733/1734/1742Descuentos no acumulables y sujetos a disponibilidad de la Sala.Este espectáculo está acogido al JOBO - Joven Bono Cultural. si tienes entre 16 y 26 años, apúntate aquí al JOBO y ven gratis. (Funciones de marte"
            },
            {
                "key": "Mosaico español: Gala de becados dSyR",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "Mosaico español: Gala de becados dSyR",
                "price": 0
            },
            {
                "key": "Mountain",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Mountain",
                "price": 0
            },
            {
                "key": "Moverse y comer bien",
                "position": [
                    40.386261433320925,
                    -3.7000825227295007
                ],
                "children": "Moverse y comer bien",
                "price": 0
            },
            {
                "key": "Moverse y comer bien",
                "position": [
                    40.386261433320925,
                    -3.7000825227295007
                ],
                "children": "Moverse y comer bien",
                "price": 0
            },
            {
                "key": "Moverse y comer bien",
                "position": [
                    40.386261433320925,
                    -3.7000825227295007
                ],
                "children": "Moverse y comer bien",
                "price": 0
            },
            {
                "key": "Mucha Muchacha",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Mucha Muchacha",
                "price": "5 euros"
            },
            {
                "key": "Mudar la piel",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Mudar la piel",
                "price": 0
            },
            {
                "key": "Mujeres compositoras II",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "Mujeres compositoras II",
                "price": 0
            },
            {
                "key": "Mula",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Mula",
                "price": 0
            },
            {
                "key": "Munduko beat",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Munduko beat",
                "price": 0
            },
            {
                "key": "Mural participativo de poetas históricos",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Mural participativo de poetas históricos",
                "price": 0
            },
            {
                "key": "Museo de Farmacia",
                "position": [
                    40.390097282918894,
                    -3.6653290637247817
                ],
                "children": "Museo de Farmacia",
                "price": 0
            },
            {
                "key": "Museo del Seguro",
                "position": [
                    40.390097282918894,
                    -3.6653290637247817
                ],
                "children": "Museo del Seguro",
                "price": 0
            },
            {
                "key": "Music In Action",
                "position": [
                    0,
                    0
                ],
                "children": "Music In Action",
                "price": 0
            },
            {
                "key": "Música con lenguaje de signos. Grupo Enchiloson.",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Música con lenguaje de signos. Grupo Enchiloson.",
                "price": 0
            },
            {
                "key": "Músicas y trovas del mundo",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Músicas y trovas del mundo",
                "price": 0
            },
            {
                "key": "Música: 'Del Cuplé a la Revista'  A cargo de Olga María Ramos.",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "Música: 'Del Cuplé a la Revista'  A cargo de Olga María Ramos.",
                "price": 0
            },
            {
                "key": "MY PSYCHO FAN / HUACHICOLERO",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "MY PSYCHO FAN / HUACHICOLERO",
                "price": 0
            },
            {
                "key": "Myra Melford Solo Piano",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Myra Melford Solo Piano",
                "price": 0
            },
            {
                "key": "M.A.R",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "M.A.R",
                "price": 0
            },
            {
                "key": "NaNa? Una canción de cuna diferente",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "NaNa? Una canción de cuna diferente",
                "price": 0
            },
            {
                "key": "Naneando",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Naneando",
                "price": 0
            },
            {
                "key": "Nanuk",
                "position": [
                    0,
                    0
                ],
                "children": "Nanuk",
                "price": 0
            },
            {
                "key": "Narraciones de luz al óleo",
                "position": [
                    40.402190438836826,
                    -3.6772826298329084
                ],
                "children": "Narraciones de luz al óleo",
                "price": 0
            },
            {
                "key": "NATI DE VALLECAS Y ANTONIO AMAYA A LA GUITARRA",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "NATI DE VALLECAS Y ANTONIO AMAYA A LA GUITARRA",
                "price": 0
            },
            {
                "key": "NEFTA FOOTBALL CLUB ? SOLAR PLEXUS ? ARE YOU LISTENING MOTHER? - TOUT SE MÉRITE",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "NEFTA FOOTBALL CLUB ? SOLAR PLEXUS ? ARE YOU LISTENING MOTHER? - TOUT SE MÉRITE",
                "price": 0
            },
            {
                "key": "No sistem punk",
                "position": [
                    40.45843103553325,
                    -3.785855667139094
                ],
                "children": "No sistem punk",
                "price": 0
            },
            {
                "key": "Noche Real",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Noche Real",
                "price": 0
            },
            {
                "key": "Nora y el Dragón",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Nora y el Dragón",
                "price": 0
            },
            {
                "key": "NUCLEAR NEIGHBOUR",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "NUCLEAR NEIGHBOUR",
                "price": 0
            },
            {
                "key": "Nuestra tertulia",
                "position": [
                    40.402190438836826,
                    -3.6772826298329084
                ],
                "children": "Nuestra tertulia",
                "price": 0
            },
            {
                "key": "Obras alumnos talleres Centro",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Obras alumnos talleres Centro",
                "price": 0
            },
            {
                "key": "Octubre musical",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Octubre musical",
                "price": 0
            },
            {
                "key": "Oficina de Información Juvenil Zona 3",
                "position": [
                    40.3796366471018,
                    -3.765949244875905
                ],
                "children": "Oficina de Información Juvenil Zona 3",
                "price": 0
            },
            {
                "key": "Oído infinito",
                "position": [
                    40.419011767401095,
                    -3.692206111679656
                ],
                "children": "Oído infinito",
                "price": "Entrada libre"
            },
            {
                "key": "Ojos negros",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "Ojos negros",
                "price": 0
            },
            {
                "key": "Ola de crímenes",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Ola de crímenes",
                "price": 0
            },
            {
                "key": "Ola de crímenes. Centro Sociocultural Ágata",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Ola de crímenes. Centro Sociocultural Ágata",
                "price": 0
            },
            {
                "key": "One Path",
                "position": [
                    40.436444648624814,
                    -3.637300067272268
                ],
                "children": "One Path",
                "price": 0
            },
            {
                "key": "Open Windows",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Open Windows",
                "price": 0
            },
            {
                "key": "Opera Rock",
                "position": [
                    40.446818592300296,
                    -3.5727411638209152
                ],
                "children": "Opera Rock",
                "price": 0
            },
            {
                "key": "Orfeón Moratalaz - Coral Nuestra Señora de la Merced",
                "position": [
                    40.405419690009424,
                    -3.6450211563044648
                ],
                "children": "Orfeón Moratalaz - Coral Nuestra Señora de la Merced",
                "price": 0
            },
            {
                "key": "Orquesta Amas",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Orquesta Amas",
                "price": 0
            },
            {
                "key": "Orquesta Dispersa",
                "position": [
                    0,
                    0
                ],
                "children": "Orquesta Dispersa",
                "price": 0
            },
            {
                "key": "Overload",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Overload",
                "price": "12  euros general / 10  euros reducida"
            },
            {
                "key": "Ozzy",
                "position": [
                    40.42342659084215,
                    -3.651841641389484
                ],
                "children": "Ozzy",
                "price": 0
            },
            {
                "key": "Pachanga Jazz Band",
                "position": [
                    40.373585643647296,
                    -3.66025460649054
                ],
                "children": "Pachanga Jazz Band",
                "price": 0
            },
            {
                "key": "PAPER OR PLASTIC / ZANIKI",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PAPER OR PLASTIC / ZANIKI",
                "price": 0
            },
            {
                "key": "Parecer Felices",
                "position": [
                    40.46903299144093,
                    -3.6976620067965
                ],
                "children": "Parecer Felices",
                "price": 0
            },
            {
                "key": "Parque móvil del Estado: el gran desconocido",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Parque móvil del Estado: el gran desconocido",
                "price": 0
            },
            {
                "key": "Pasa un buen rato en la SALA DE EXPOSICIONES",
                "position": [
                    40.37953682427197,
                    -3.616901585603186
                ],
                "children": "Pasa un buen rato en la SALA DE EXPOSICIONES",
                "price": 0
            },
            {
                "key": "Pasea Madrid",
                "position": [
                    0,
                    0
                ],
                "children": "Pasea Madrid",
                "price": 0
            },
            {
                "key": "Pasea Swing",
                "position": [
                    0,
                    0
                ],
                "children": "Pasea Swing",
                "price": 0
            },
            {
                "key": "Paseos por Usera / Storywalker: Historias de Qingtian a Usera",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Paseos por Usera / Storywalker: Historias de Qingtian a Usera",
                "price": "Gratuita"
            },
            {
                "key": "Pasión y arte",
                "position": [
                    40.459071306158215,
                    -3.700271645324868
                ],
                "children": "Pasión y arte",
                "price": 0
            },
            {
                "key": "Patricia Barber Trío",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Patricia Barber Trío",
                "price": 0
            },
            {
                "key": "PAYASOS: 'COLORIN Y COLORADO",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "PAYASOS: 'COLORIN Y COLORADO",
                "price": 0
            },
            {
                "key": "Peaches + Pussykew",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Peaches + Pussykew",
                "price": 0
            },
            {
                "key": "Pedro Costa + Os Musicos Do Tejo - As Filhas Do Fogo",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Pedro Costa + Os Musicos Do Tejo - As Filhas Do Fogo",
                "price": 0
            },
            {
                "key": "Pedro Maia + Robert Lippok - Negative Space",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Pedro Maia + Robert Lippok - Negative Space",
                "price": 0
            },
            {
                "key": "PEDRO OBREGÓN AL CANTE Y DAVID DURÁN A LA GUITARRA",
                "position": [
                    40.47484735634347,
                    -3.6455438664985538
                ],
                "children": "PEDRO OBREGÓN AL CANTE Y DAVID DURÁN A LA GUITARRA",
                "price": 0
            },
            {
                "key": "PESADILLA EN ELM STREET 2: LA VENGANZA DE FREDDY",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PESADILLA EN ELM STREET 2: LA VENGANZA DE FREDDY",
                "price": 0
            },
            {
                "key": "Peter Pan, el musical",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Peter Pan, el musical",
                "price": 0
            },
            {
                "key": "Piccola &amp; Reyes",
                "position": [
                    40.3829835905706,
                    -3.7800890564106613
                ],
                "children": "Piccola &amp; Reyes",
                "price": 0
            },
            {
                "key": "Pictoricopoética",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Pictoricopoética",
                "price": 0
            },
            {
                "key": "Pieza del mes: 'El Mosaico de la Villa Tardoantigua de Carabanchel'",
                "position": [
                    40.41207900253883,
                    -3.7108161027466378
                ],
                "children": "Pieza del mes: 'El Mosaico de la Villa Tardoantigua de Carabanchel'",
                "price": 0
            },
            {
                "key": "Píldoras de Empleo",
                "position": [
                    40.44661949643803,
                    -3.703467785151993
                ],
                "children": "Píldoras de Empleo",
                "price": 0
            },
            {
                "key": "Pintar con la mirada",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Pintar con la mirada",
                "price": "Inscripción Gratuita (tanto como participante y como oyente).  Adquiriendo la entrada para la obra de teatro Monsieur Goya, una indagación. Destinatarios del taller:  Personas vinculadas con las artes escénicas en general (amateur, semiprofesional y profesional): actrices y actores, dramaturgos y directores.El cupo disponible es de 12 plazas de participantes activos + 15 oyentes (que pasan a lista de espera, por si se liberan plazas).Inscripción: Gratuita (tanto para participantes como oyentes).Completa tus datos para el proceso de INSCRIPCIÓN  y envíanoslo hasta el 23 septiembre por email a gestiondeaudiencias@teatrofernangomez.es o a al  Nº de teléfono 606522506 "
            },
            {
                "key": "Pintores italianos en la Corte Española",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "Pintores italianos en la Corte Española",
                "price": 0
            },
            {
                "key": "PIRIPKURA",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PIRIPKURA",
                "price": 0
            },
            {
                "key": "Plácido",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "Plácido",
                "price": 0
            },
            {
                "key": "Planeta quinta",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Planeta quinta",
                "price": 0
            },
            {
                "key": "Planeta quinta",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Planeta quinta",
                "price": 0
            },
            {
                "key": "Planeta quinta",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Planeta quinta",
                "price": 0
            },
            {
                "key": "Planificando nuestra motivación",
                "position": [
                    40.46745337921317,
                    -3.684611277444272
                ],
                "children": "Planificando nuestra motivación",
                "price": 0
            },
            {
                "key": "Pobreza verbal en la redacción de textos narrativos",
                "position": [
                    40.42664221536817,
                    -3.699722994908341
                ],
                "children": "Pobreza verbal en la redacción de textos narrativos",
                "price": 0
            },
            {
                "key": "Poemad",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Poemad",
                "price": "Consultar precio en cada actividad"
            },
            {
                "key": "Poesía y Espiritualidad",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Poesía y Espiritualidad",
                "price": 0
            },
            {
                "key": "Poesía y pinceladas musicales para La Paz",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Poesía y pinceladas musicales para La Paz",
                "price": 0
            },
            {
                "key": "Pongamos que hablo de Madrid - Let's say I'm talking about Madrid",
                "position": [
                    40.42737760210632,
                    -3.7106116887809817
                ],
                "children": "Pongamos que hablo de Madrid - Let's say I'm talking about Madrid",
                "price": 0
            },
            {
                "key": "Ponyo en el acantilado",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Ponyo en el acantilado",
                "price": 0
            },
            {
                "key": "Pop Meets Clasics",
                "position": [
                    40.382818999487256,
                    -3.606140062044455
                ],
                "children": "Pop Meets Clasics",
                "price": 0
            },
            {
                "key": "Pregón",
                "position": [
                    40.480166024972036,
                    -3.7112978051427565
                ],
                "children": "Pregón",
                "price": 0
            },
            {
                "key": "PREMIO MIRADA INTERNACIONAL 2. LA CALLE DE LA AMARGURA",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PREMIO MIRADA INTERNACIONAL 2. LA CALLE DE LA AMARGURA",
                "price": 0
            },
            {
                "key": "PREMIO MIRADA INTERNACIONAL. ASÍ ES LA VIDA",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PREMIO MIRADA INTERNACIONAL. ASÍ ES LA VIDA",
                "price": 0
            },
            {
                "key": "PREMIO MIRADA INTERNACIONAL. EL EVANGELIO DE LAS MARAVILLAS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PREMIO MIRADA INTERNACIONAL. EL EVANGELIO DE LAS MARAVILLAS",
                "price": 0
            },
            {
                "key": "PREMIO MIRADA INTERNACIONAL. LA PERDICIÓN DE LOS HOMBRES",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PREMIO MIRADA INTERNACIONAL. LA PERDICIÓN DE LOS HOMBRES",
                "price": 0
            },
            {
                "key": "PREMIO MIRADA INTERNACIONAL. LAS RAZONES DEL CORAZÓN",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PREMIO MIRADA INTERNACIONAL. LAS RAZONES DEL CORAZÓN",
                "price": 0
            },
            {
                "key": "Premios píldoras de danza 2019",
                "position": [
                    40.490353101573774,
                    -3.655261744717257
                ],
                "children": "Premios píldoras de danza 2019",
                "price": 0
            },
            {
                "key": "PRENDERSE",
                "position": [
                    40.405964231388396,
                    -3.6986013597538654
                ],
                "children": "PRENDERSE",
                "price": 0
            },
            {
                "key": "Presentación Ciclovía del tren de Arganda + Eurovelovers",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Presentación Ciclovía del tren de Arganda + Eurovelovers",
                "price": 0
            },
            {
                "key": "Presentación del libro. Taras Shevchenko: ' La voz de Ucrania libre'",
                "position": [
                    40.369689508453575,
                    -3.708167914482908
                ],
                "children": "Presentación del libro. Taras Shevchenko: ' La voz de Ucrania libre'",
                "price": 0
            },
            {
                "key": "Presentación libro 'Cuida y descubre la naturaleza'",
                "position": [
                    40.41789950036311,
                    -3.7309390858931137
                ],
                "children": "Presentación libro 'Cuida y descubre la naturaleza'",
                "price": 0
            },
            {
                "key": "Presentaciones de libros y recitales poéticos en las bibliotecas",
                "position": [
                    40.43329162597362,
                    -3.610566231192745
                ],
                "children": "Presentaciones de libros y recitales poéticos en las bibliotecas",
                "price": 0
            },
            {
                "key": "Proyecto artístico desde . Conde Duque",
                "position": [
                    40.42802889001877,
                    -3.7101823535818417
                ],
                "children": "Proyecto artístico desde . Conde Duque",
                "price": "Actividad gratuita"
            },
            {
                "key": "Proyecto de Comunidades Activas en Salud",
                "position": [
                    40.394522745106734,
                    -3.7000855961559855
                ],
                "children": "Proyecto de Comunidades Activas en Salud",
                "price": 0
            },
            {
                "key": "Pss, pss...pajarito",
                "position": [
                    40.39552931214335,
                    -3.7562667464373214
                ],
                "children": "Pss, pss...pajarito",
                "price": 0
            },
            {
                "key": "Púas de erizo",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Púas de erizo",
                "price": 0
            },
            {
                "key": "Púas de erizo",
                "position": [
                    40.51337745339972,
                    -3.6897406722711366
                ],
                "children": "Púas de erizo",
                "price": 0
            },
            {
                "key": "Pulgarcita detective",
                "position": [
                    40.46088953531135,
                    -3.6544210187969433
                ],
                "children": "Pulgarcita detective",
                "price": 0
            },
            {
                "key": "PULSIÓN / LEOFOROS PATISION / LITTLE MISS SUMO / HÉCTOR / MY MOTHER?S EYES",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "PULSIÓN / LEOFOROS PATISION / LITTLE MISS SUMO / HÉCTOR / MY MOTHER?S EYES",
                "price": 0
            },
            {
                "key": "Pum-Pum - La Vero Paz",
                "position": [
                    40.381095838993176,
                    -3.710973351109332
                ],
                "children": "Pum-Pum - La Vero Paz",
                "price": 0
            },
            {
                "key": "PUM-PUM: al cerro voy",
                "position": [
                    40.392413678488076,
                    -3.6972594678653663
                ],
                "children": "PUM-PUM: al cerro voy",
                "price": 0
            },
            {
                "key": "Punto de encuentro LGTBI",
                "position": [
                    40.449003967549075,
                    -3.606916137721353
                ],
                "children": "Punto de encuentro LGTBI",
                "price": 0
            },
            {
                "key": "Punto LGTBI",
                "position": [
                    40.36902428128397,
                    -3.710212677306876
                ],
                "children": "Punto LGTBI",
                "price": 0
            },
            {
                "key": "PUSE MI PATRIA EN EL VUELO",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "PUSE MI PATRIA EN EL VUELO",
                "price": "ENTRADAS DE 5 A 22  euros."
            },
            {
                "key": "Push",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Push",
                "price": 0
            },
            {
                "key": "QáTEAL: Evolución de Paradigmas Organizacionales",
                "position": [
                    40.410560776119,
                    -3.6937931079230735
                ],
                "children": "QáTEAL: Evolución de Paradigmas Organizacionales",
                "price": 0
            },
            {
                "key": "Qué bonita es mi tierra",
                "position": [
                    40.44810636195715,
                    -3.6762309620097406
                ],
                "children": "Qué bonita es mi tierra",
                "price": 0
            },
            {
                "key": "Qué ruina de función",
                "position": [
                    40.42027705095575,
                    -3.621741078700336
                ],
                "children": "Qué ruina de función",
                "price": 0
            },
            {
                "key": "Qué ruina de función.",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Qué ruina de función.",
                "price": 0
            },
            {
                "key": "Que viene mi marido, de Carlos Arniches",
                "position": [
                    40.40609591857167,
                    -3.6465361070635063
                ],
                "children": "Que viene mi marido, de Carlos Arniches",
                "price": 0
            },
            {
                "key": "Quién te cantará",
                "position": [
                    40.35087114162283,
                    -3.6915089092551865
                ],
                "children": "Quién te cantará",
                "price": 0
            },
            {
                "key": "Quién te cantará",
                "position": [
                    0,
                    0
                ],
                "children": "Quién te cantará",
                "price": 0
            },
            {
                "key": "QUINQUI STARS",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "QUINQUI STARS",
                "price": 0
            },
            {
                "key": "Rafael Rojo Martínez - exposición de pintura sobre lienzo y acuarelas.",
                "position": [
                    40.45224737965276,
                    -3.6580402287911937
                ],
                "children": "Rafael Rojo Martínez - exposición de pintura sobre lienzo y acuarelas.",
                "price": 0
            },
            {
                "key": "Rayito! - School of Noise - Talleres de sonido para chavales ruidosos",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "Rayito! - School of Noise - Talleres de sonido para chavales ruidosos",
                "price": 0
            },
            {
                "key": "RAYMONDE OU L?ÉVASION VERTICALE / LA SIESTA / ELU24 / TOI AUSSI ÇA TE CHATOUILLE?",
                "position": [
                    40.391053041229135,
                    -3.6958079719260084
                ],
                "children": "RAYMONDE OU L?ÉVASION VERTICALE / LA SIESTA / ELU24 / TOI AUSSI ÇA TE CHATOUILLE?",
                "price": 0
            },
            {
                "key": "Rayo. Festival de artes visuales expandidas",
                "position": [
                    40.391054868587204,
                    -3.6958072892892164
                ],
                "children": "Rayo. Festival de artes visuales expandidas",
                "price": 0
            },
            {
                "key": "Rebekka Bakken",
                "position": [
                    40.42492634761077,
                    -3.6899208519663436
                ],
                "children": "Rebekka Bakken",
                "price": 0
            },
            {
                "key": "Rebota rebota y en tu cara explota",
                "position": [
                    40.41482868269558,
                    -3.7001663599562105
                ],
                "children": "Rebota rebota y en tu cara explota",
                "price": 0
            },
            {
                "key": "Recetas Urbanas",
                "position": [
                    40.39241374953321,
                    -3.697247685884226
                ],
                "children": "Recetas Urbanas",
                "price": 0
            },
            {
                "key": "Recital de canción napolitana y española",
                "position": [
                    40.43200210571468,
                    -3.6709293330780213
                ],
                "children": "Recital de canción napolitana y española",
                "price": 0
            },
            {
                "key": "Recital de dúo de violines",
                "position": [
                    40.44863106357685,
                    -3.7045265016586013
                ],
                "children": "Recital de dúo de violines",
                "price": 0
            },
            {
                "key": "Recital de Piano y Violonchelo",
                "position": [
                    40.519673311658686,
                    -3.7779055687726535
                ],
                "children": "Recital de Piano y Violonchelo",
                "price": 0
            },
            {
                "key": "Recital de Poesía y más",
                "position": [
                    40.38629368480189,
                    -3.6718658006661915
                ],
                "children": "Recital de Poesía y más",
                "price": 0
            },
            {
                "key": "Recuerdos borrados por el Alzheimer",
                "position": [
                    40.43200210571468,
                    -3.6709293330780213
                ],
                "children": "Recuerdos borrados por el Alzheimer",
                "price": 0
            },
            {
                "key": "Redforesta 2019 Madrid",
                "position": [
                    40.41906024374357,
                    -3.684061538792696
                ],
                "children": "Redforesta 2019 Madrid",
                "price": 0
            },
            {
                "key": "Residencia de Estudiantes",
                "position": [
                    40.334751832113774,
                    -3.7008095609215967
                ],
                "children": "Residencia de Estudiantes",
                "price": 0
            },
            {
                "key": "Retrato de Corte en la Monarquía de los Habsburgo",
                "position": [
                    40.393612303425975,
                    -3.6556073868098484
                ],
                "children": "Retrato de Corte en la Monarquía de los Habsburgo",
                "price": 0
            },
            {
                "key": "Ría a día",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Ría a día",
                "price": 0
            },
            {
                "key": "Ría a día",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Ría a día",
                "price": 0
            },
            {
                "key": "Ría a día",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Ría a día",
                "price": 0
            },
            {
                "key": "Ría a día",
                "position": [
                    40.44774002225867,
                    -3.6292874542291633
                ],
                "children": "Ría a día",
                "price": 0
            }
        ];


        const center = [this.state.lat, this.state.lng];

        // const markers = [
        //   {
        //     key: "marker1",
        //     position: [45.69836455, 9.6472798], // TODO: enlazar con endpoint localhost:8895/events
        //     children: "Lampione rotto"
        //   },
        //   {
        //     key: "marker2",
        //     position: [45.6980459, 9.6872748],
        //     children: "Segnalazione: tombino rotto"
        //   },
        //   {
        //     key: "marker3",
        //     position: [45.69856455, 9.6570798],
        //     children: "Segnalazione: rumore di notte"
        //   }
        // ];

        return (
            <Map center={center} zoom={this.state.zoom}>
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
              <MyMarkersList markers={markers} />
            </Map>
        );
    }
}
