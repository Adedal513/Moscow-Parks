import React from 'react';
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import 'client'
import DetailCard from './DetailCard';


class MapView extends  React.Component {
    state = {
        parks: [],
        displayDetails: false,
    };

    ShowDetailsCard = (park_id) => {
        this.setState({displayDetails: true, details_id: park_id})
    }

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
        if (this.state.displayDetails) {
            let park_details = this.state.parks.find(park => park.id == this.state.details_id)
            return (
                <div className="leaflet-container">
                    <DetailCard detailsData={park_details}/>
                    <Map
                        park_polygons={this.state.parks}
                        onDetailsClick={this.ShowDetailsCard}
                    />
                </div> 
            )
        } else {
            return (
                <div className="leaflet-container">
                    { this.state.displayDetails ? <DetailCard/> : null }
                    <Map
                        park_polygons={this.state.parks}
                        onDetailsClick={this.ShowDetailsCard}
                    />
                </div>
            )
        }
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
                park_id={polygon.id}
                handleDetailsClick={this.props.onDetailsClick}
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

class ParkPolygon extends React.Component {
    
    handlePolygonClick = () => {
        this.props.handleDetailsClick(this.props.park_id)
        console.log(`Clicked on polygon!`);
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