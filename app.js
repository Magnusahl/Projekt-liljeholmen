var x = document.getElementById("mapholder");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon);
    var mapholder = document.getElementById("mapholder");
    /*mapholder.style.height='250px';
                  mapholder.style.width='100%';*/

    var myOptions = {
        center: latlon,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };
    var map = new google.maps.Map(
        document.getElementById("mapholder"),
        myOptions
    );
    var marker = new google.maps.Marker({
        position: latlon,
        map: map,
        title: "You are here!"
    });
}

//Add marker

var marker = new google.maps.Marker({
    position: { lat: 59.236477, lng: 17.979028 },
    map: map
});