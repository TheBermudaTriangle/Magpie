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
		console.log(user__name);
		if(user__name)
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
	        
	        var map = new google.maps.Map(document.getElementById('map'), {
		      zoom: 16,
		      center: currentPosJson
		    });
			//currentDataText = JSON.stringify(currentDataJson);
			//console.log(currentDataText);
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
		    	setTimeout(initMap,90000);

		    });
		  });
		}

	    }
	  }
}