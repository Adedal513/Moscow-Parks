import React from 'react';
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import 'client'


class MapView extends  React.Component {
    state = {
        parks: [],
    };

    componentDidMount() {
        this.loadParksFromServer();
    }

    loadParksFromServer = () => {
        client.getParkPolygons((serverParks) => (
            this.setState({parks: serverParks})
            )
        );
    };

    render() {
        return(
            <div className="leaflet-container">
                <Map
                    park_polygons={this.state.parks}
                />
            </div>
        )
    }
}

class Map extends React.Component {

    state = {
        center: [55.751244, 37.618423]
    }

    render() {

        const park_pols = this.props.park_polygons.map((polygon) => (
            <ParkPolygon
                data={polygon.geofence}
                title={polygon['title']}
                description={polygon.description}
            />
        ))
        return(
            <MapContainer
                center={this.state.center}
                zoom={6}
                maxZoom={100}
                //minZoom={10}
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

class ParkPolygon extends React.Component {
  handlePolygonClick = () => {
      console.log(`Clicked on ${this.props.title}`);
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.handlePolygonClick.bind(this)
    });
  }

  render() {
    return(
        <GeoJSON
          data={this.props.data}
          style={{
            opacity: 0,
            fillColor: "green",
            weight: 0.3,
            fillOpacity: 0.5,
          }}
          onEachFeature={this.onEachFeature.bind(this)}
        />
    )
  }
}

export default MapView;