var geocoder;
var map;

function initialize() {

  geocoder = new google.maps.Geocoder();
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: new google.maps.LatLng(39.074208, 21.824311999999964),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}

function codeAddress() {

  var address = $('#address_geo').text();

  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      map.setZoom(15);
      var marker = new google.maps.Marker({
        map: map,        
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}