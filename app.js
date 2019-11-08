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
    zoom: 16,
    //Remove zoom, fullscreen and streetview options from the map
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false
  });
  infoWindow = new google.maps.InfoWindow;


  //Get user position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      //Refresh the user position
      setTimeout(initMap, 50000);
      marker.setPosition(pos);
      //infoWindow.iconImage;
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
    
    //Add image to user
    //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var marker = new google.maps.Marker({
        map: map,
        position:{lat:59.236528,lng:17.978868},
        icon: 'placeholder.png'
    });

    //Place a triangle on the map
    var triangleCoords = [
        {lat: 59.311968, lng: 18.021612},
        {lat: 59.311054, lng: 18.020646},
        {lat: 59.311016, lng: 18.022631}
    ]
    
    var triangleCoords1 = [
        {lat: 59.309645, lng: 18.021274},
        {lat: 59.309170, lng: 18.021546},
        {lat: 59.309475, lng: 18.022347}
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

      if (initMap == triangleCoords1) {
          alert("STI!")
      }
      
/*
    //Info box
    var infoWindow = new google.maps.InfoWindow ({
        content:'<h2>Huddinge station</h2>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
*/
    //Make markers on the map
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
        },
        content:'<h2>Backen</h2>'
    },
    {
        coords:{lat:59.310205,lng:18.025572},
        iconImage: {
            path: google.maps.SymbolPath.CIRCLE,
      scale: 5
        },
        content:'<h2>Rondell</h2>'
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
