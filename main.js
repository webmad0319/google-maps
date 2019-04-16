// main.js

function setMarker(lat, lng, theMap, title) {
    new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng
        },
        map: theMap,
        title: title
    });
}

// HTML5 geolocation API
if (navigator.geolocation) {
    // Get current position
    // The permissions dialog will pop up
    navigator.geolocation.getCurrentPosition(function (position) {
        setMarker(
            position.coords.latitude, 
            position.coords.longitude, 
            theMap, 
            "I am here!!!"
        )
    }, function () {
        // If something goes wrong
        console.log('Error in the geolocation service.');
    });
} else {
    // Browser says: Nah! I do not support this.
    console.log('Browser does not support geolocation.');
}

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

class Airport {
    constructor(lng, lat, desc) {
        if (lng < -180 || lng > 180) throw new RangeError("longitude is not valid")
        if (lat < -90 || lat > 90) throw new RangeError("latitude is not valid")

        this.lng = lng
        this.lat = lat
        this.desc = desc
    }
}

const coords = [
    new Airport(88.0845, 47.7406, "Altay Airport"),
    new Airport(-46.9653, -19.5603, "Romeu Zuma Airport")
]

coords.forEach(airportData => {
    new google.maps.Marker({
        position: {
            lat: airportData.lat,
            lng: airportData.lng
        },
        map: theMap,
        title: airportData.desc
    });
})