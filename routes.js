// main.js
const directionsService = new google.maps.DirectionsService;
const directionsDisplay = new google.maps.DirectionsRenderer;

const myCurrentCoords = {
    lat: 41.3977381,
    lng: 2.190471916
};

const theMap = new google.maps.Map(
    document.getElementById('map'),
    {
        zoom: 3,
        center: myCurrentCoords
    }
);

const directionRequest = {
    origin: { lat: 41.3977381, lng: 2.190471916 },
    destination: 'Madrid, ES',
    travelMode: 'DRIVING'
};

directionsService.route(
    directionRequest,
    function (response, status) {
        if (status === 'OK') {
            // everything is ok
            directionsDisplay.setDirections(response);

        } else {
            // something went wrong
            window.alert('Directions request failed due to ' + status);
        }
    }
);

directionsDisplay.setMap(theMap);

