var map;
var infoWindow;
var toggleVar = 0;
var makeMyMap = function(){
	if(typeof latitude == 'undefined'){
		setTimeout(makeMyMap,10000)
	}
	else{
		initMap();
	}
}
function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: new google.maps.LatLng(latitude,longitude)
    });
}
function addMarker(lat,lng,msg,user){
	if(user == user__name && toggleVar == 1)
	{
		infoWindow.close();
	}
	toggleVar = 1;
    var client_location = new google.maps.LatLng(lat,lng);
    var client_marker = new google.maps.Marker({
						   position: client_location,
						   map: map,
						   });
    console.log('marker');
	infoWindow= new google.maps.InfoWindow({content:user + " : " + msg});
	infoWindow.open(map, client_marker);
}