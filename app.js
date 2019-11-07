/*Create a pin on the map
function initMap () {
    var huddinge = {lat: 59.236528, lng: 17.978868}
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: huddinge});
    var marker = new google.maps.Marker({position: huddinge, map: map});
}*/
//setInterval(initMap, 5000);

var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'),  {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18
    
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setTimeout(initMap, 5000);
      marker.setPosition(pos);
      //infoWindow.iconImage;
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
    
    //Add pin
    //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var marker = new google.maps.Marker({
        map: map,
        position:{lat:59.236528,lng:17.978868},
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 5
        }
    });

    // Define the LatLng coordinates for the polygon.
    var triangleCoords = [
        {lat: 59.311968, lng: 18.021612},
        {lat: 59.311054, lng: 18.020646},
        {lat: 59.311016, lng: 18.022631}
    ]
    
    var triangleCoords1 = [
        {lat: 59.310943, lng: 18.024516},
        {lat: 59.310856, lng: 18.024173},
        {lat: 59.310737, lng: 18.024605}
    ]

    // Construct the polygon.
    var parkTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    parkTriangle.setMap(map);

    var tracksTriangle = new google.maps.Polygon({
        paths: triangleCoords1,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      tracksTriangle.setMap(map);

/*
    //Info box
    var infoWindow = new google.maps.InfoWindow ({
        content:'<h2>Huddinge station</h2>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
*/

    var markers = [
    {
        coords:{lat:59.311229,lng:18.021559},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h2>Parken</h2>'
    },
    {
        coords:{lat:59.311060,lng:18.025221},
        iconImage: {
            path: google.maps.SymbolPath.CIRCLE,
      scale: 7
        }
    },
    {
        coords:{lat:59.310205,lng:18.025572},
    }
    ]

    //Loop markers
    for (var i =0;i < markers.length;i++){
        addMarker(markers[i]);
    }
      
    
    //Add marker function
    
        function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            icon: props.iconImage
        });

        if(props.content){
            var infoWindow = new google.maps.InfoWindow ({
                content:props.content
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}
}
