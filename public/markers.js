var timeoutRepeat=true;
var map;
function EraseTimeout(){
	timeoutRepeat=false;
	map=null;
  	console.log("timeoutReapeat: "+timeoutRepeat+" map: "+map);
  }
var makeMyMap = function(){
	initMap();
	var currentPosJson,currentDataJson;
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    }
	}
	function showPosition(position) {
		currentDataJson={
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			username:user__name
		}
		currentPosJson={
			lat: position.coords.latitude,
			lng: position.coords.longitude
		}
		console.log(currentPosJson);
	}
	function initMap() {
		console.log(user__name +"continue: "+timeoutRepeat);
		if(user__name && timeoutRepeat)
		{
			if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function(position){
				currentDataJson={
				lat: position.coords.latitude,
				lng: position.coords.longitude,
				username:user__name
			}
			currentPosJson={
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}
			//console.log(currentPosJson);        	
	        
	        map = new google.maps.Map(document.getElementById('map'), {
		      zoom: 14,
		      center: currentPosJson
		    });


	        var client_location = new google.maps.LatLng(currentDataJson.lat, currentDataJson.lng);
	        var client_marker = new google.maps.Marker({
								   position: client_location,
								   map: map,
								   });
	        var infoWindow ;
	        

			//currentDataText = JSON.stringify(currentDataJson);
			//console.log(currentDataText);

			$("#submit").on("click",function(){
				var dismsg = $("#message").val();
				console.log(dismsg);
				dismsg = user__name + " : " + dismsg;
				infoWindow= new google.maps.InfoWindow({content:dismsg});
				infoWindow.open(map, client_marker);
				$("#message").val(" ");
			})

		    $.post("https://magpie-server.herokuapp.com",currentDataJson,function(data){
		    	json=data;
		    	//console.log(json);
		    	var marker=[];
		    	for(var i=0;i<data.length;i++){
		    		var pos={
							lat: Number(data[i].lat),
							lng: Number(data[i].lng)
						}
					//console.log(pos);
		    		marker[i] = new google.maps.Marker({
			          position: pos,
			          map: map,
			          title:data[i].username
			        });
		    	}
		    	
		    	
		    	setTimeout(initMap,60000);		    	

		    });
		  });
		}

	    }
	  }
}


