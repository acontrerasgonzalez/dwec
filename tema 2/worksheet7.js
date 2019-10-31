      var map;
      function initMap() {
        navigator.geolocation.getCurrentPosition(function(position) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: position.coords.latitude, lng: position.coords.longitude},
          zoom: 18,
        });
        var pos={lat: position.coords.latitude, lng: position.coords.longitude};
        var marker = new google.maps.Marker(
            {
        position:pos,
        map: map,
      title: 'Posicion actual'
        });
        doReverseGeocoding();
      },error);
       
      }
      
      /*navigator.geolocation.watchPosition(function(position) {
        var pos={lat: position.coords.latitude, lng: position.coords.longitude};
        var marker = new google.maps.Marker(
            {
        position:pos,
        map: map,
	    title: 'Posicion actual'
        }
        
      
        );},error);*/
        
      
      function setMarkerPosition(marker, position) {
          marker.setPosition(
              new google.maps.LatLng(
                  position.coords.latitude,
                  position.coords.longitude)
          );}
          function doReverseGeocoding() {
            ///btn.style.display = 'none';
            var markers = map.getMarkers();
            var reverseGeocodingService = new cercalia.service.ReverseGeocoding();
            for (var i = 0; i < markers.length; i++) {
              var marker = markers[i];
              doMarkerReverseGeocoding(reverseGeocodingService, marker);
            }
          }
          function doMarkerReverseGeocoding(reverseGeocodingService, marker) {
            var position = marker.getPosition();
            reverseGeocodingService.getDirection(position, function(data) {
              var text = cercalia.Util.getProximityFormattedAddress(data);
              var simpleLabel = new cercalia.SimpleLabel({
                text: text
              });
              marker.setSimpleLabel(simpleLabel);
            });
          }
          
function error(err) {
  document.write('ERROR(' + err.code + '): ' + err.message);
};