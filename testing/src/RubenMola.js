import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export class MyGreatPlace extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 4
        },
        zoom: 1
    };

    renderMarkers(map, maps) {
        let marker = new maps.Marker({
            position: { lat: 3, lng: 5 },
            map,
            title: 'Hello World!'
        });
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAw4qUsdMirbYGbl3PWKOMFXGshWn5r2GQ" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;