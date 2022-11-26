import React from 'react';
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";


class MapWrapper extends  React.Component {
    state = {
        polygons: [
            {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              37.42768350970894,
              55.747695314778895
            ],
            [
              37.43054473073224,
              55.746318654775024
            ],
            [
              37.43022168984845,
              55.74564329463328
            ],
            [
              37.43197534035494,
              55.74457827988783
            ],
            [
              37.43331365258334,
              55.742630006956944
            ],
            [
              37.439589875449144,
              55.73972040494664
            ],
            [
              37.44185116162953,
              55.73907091059593
            ],
            [
              37.44125122856144,
              55.73842140543607
            ],
            [
              37.440420552005264,
              55.73842140543607
            ],
            [
              37.43871305019664,
              55.7374081558026
            ],
            [
              37.439220685869,
              55.73704441874878
            ],
            [
              37.44508157045661,
              55.734835942437115
            ],
            [
              37.44715826184702,
              55.735147734903364
            ],
            [
              37.4488196149577,
              55.734991838981585
            ],
            [
              37.46021834325077,
              55.73733021243379
            ],
            [
              37.46654071481285,
              55.73933070963318
            ],
            [
              37.463587198171666,
              55.742032517101705
            ],
            [
              37.45768016488603,
              55.74049978389979
            ],
            [
              37.454911243033365,
              55.74021401342418
            ],
            [
              37.45149623941455,
              55.74021401342418
            ],
            [
              37.44683522096318,
              55.741279147288196
            ],
            [
              37.44295873036998,
              55.74278587237154
            ],
            [
              37.43982061893712,
              55.744474374453915
            ],
            [
              37.436820953598016,
              55.74613682819478
            ],
            [
              37.4353441952758,
              55.74709790195155
            ],
            [
              37.43497500569566,
              55.74756544278722
            ],
            [
              37.43515960048575,
              55.74842258643366
            ],
            [
              37.43548264136794,
              55.74907192514408
            ],
            [
              37.43391358565151,
              55.74920179158943
            ],
            [
              37.43197534035494,
              55.749695280138525
            ],
            [
              37.43054473073224,
              55.74964333426945
            ],
            [
              37.42874493152786,
              55.74852648135359
            ],
            [
              37.42768351148371,
              55.7481368739771
            ],
            [
              37.42768350970894,
              55.747695314778895
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}
        ]
    }

    render() {
        return(
            <div className="leaflet-container">
                <Map
                    park_polygons={this.state.polygons}
                />
            </div>
        )
    }
}

class Map extends React.Component {

    state = {
        center: [55.751244, 37.618423]
    }

    style_polygon() {
        return {
            opacity: 0,
            fillColor: "green",
            weight: 0.3,
            fillOpacity: 0.5,
        }
    }

    render() {

        const park_pols = this.props.park_polygons.map((polygon) => (
            <GeoJSON
                data={polygon}
                style={this.style_polygon()}
            />
        ))
        return(
            <MapContainer
                center={this.state.center}
                zoom={6}
                maxZoom={100}
                minZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url="https://api.maptiler.com/maps/voyager-v2/{z}/{x}/{y}.png?key=MLlAaC0qFFY9qCaMIbQL"
                />
                {park_pols}
            </MapContainer>
        )
    }
}

export default MapWrapper;