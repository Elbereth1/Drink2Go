function initMap() {
  var coordinates = {lat: 59.968406, lng: 30.317529},

    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates
    }),

    marker = new google.maps.Marker({
      position: coordinates,
      map: map
    });
}

image = 'img/other/mapPin.svg',
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });
