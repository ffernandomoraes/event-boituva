function initMap() {

  var positionEvent = {
    lat: -23.295926,
    lng: -47.680285
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: positionEvent,
    scrollwheel: false,
    streetViewControl: false
  });

  var marker = new google.maps.Marker({
    position: positionEvent,
    map: map
  });
}
