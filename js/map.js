$.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&region=in&key=AIzaSyCqRt3B_pKGbkTBK_1f24qM2KewweBmAw4&async=2&callback=MapApiLoaded", function () {});
function MapApiLoaded() {
//$(document).ready(function() {
    /** Google Map **/
    function init_map() {
        var locations = [
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">Shree Rajput Seva Samaj</h4></div><div class="col-md-12">  <p>Besides Sharnam-IV, </p><p>Jodhpur Tekra, Ahmedabad</p><p>Gujarat 380015</p>  </div>  </div>', 21.520637, 70.474625, 1],
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">Shree Rajput Seva Samaj</h4></div><div class="col-md-12">  <p>Besides Sharnam-IV, </p><p>Jodhpur Tekra, Ahmedabad</p><p>Gujarat 380015</p>  </div>  </div>', 21.520637, 70.474625, 1]
        ];
        var myOptions = {
            scrollwheel: false,
            zoom: 18,
            center: new google.maps.LatLng(21.520637, 70.474625),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                icon: 'img/map_pin.png'
            });

        }
        infowindow = new google.maps.InfoWindow({
            content: ''
        });

    }
    google.maps.event.addDomListener(window, 'load', init_map);
//});
}