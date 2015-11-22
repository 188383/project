var map;
/**
	Initialization of the map object
**/
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  
  map.addListener('click', function(e) {
   	placeMarkerOnMap(e.latLng,map);
  });

}

function placeMarkerOnMap(latLng,map){
	 // 3 seconds after the center of the map has changed, pan back to the
    // marker.
     var variables = {position:latLng,map:map};
   	 var marker = new google.maps.Marker(variables);
}






