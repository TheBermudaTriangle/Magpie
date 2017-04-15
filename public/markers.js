var makeMyMap = function(){
	initMap();
	var currentPosJson,currentDataJson;
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    }
	}
<<<<<<< HEAD
	currentPosJson={
		lat: position.coords.latitude,
		lng: position.coords.longitude
	}
	//console.log(currentPosJson);
}
function initMap() {
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
			currentDataJson={
=======
	function showPosition(position) {
		currentDataJson={
>>>>>>> 3e10e73982af77e74813dcec9870275623759f52
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			username:"xcepti0n"
		}
		currentPosJson={
			lat: position.coords.latitude,
			lng: position.coords.longitude
		}
<<<<<<< HEAD
		//console.log(currentPosJson);

        var map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 8,
	      center: currentPosJson
	    });
		//currentDataText = JSON.stringify(currentDataJson);
		//console.log(currentDataText);
	    $.post("https://magpie-server.herokuapp.com",currentDataJson,function(data){
	    	//var data = JSON.parse(data);
	    	//console.log(data);
	    	// json=JSON.parse(data);
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
	    	//setTimeout(initMap,60000);

	    });
	  });
    }
  }
=======
		console.log(currentPosJson);
	}
	function initMap() {
		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function(position){
				currentDataJson={
				lat: position.coords.latitude,
				lng: position.coords.longitude,
				username:"xcepti0n"
			}
			currentPosJson={
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}
			//console.log(currentPosJson);        	
	        
	        var map = new google.maps.Map(document.getElementById('map'), {
		      zoom: 8,
		      center: currentPosJson
		    });
			//currentDataText = JSON.stringify(currentDataJson);
			//console.log(currentDataText);
		    $.post("https://magpie-server.herokuapp.com",currentDataJson,function(data){
		    	//var data = JSON.parse(data);
		    	//console.log(data);
		    	// json=JSON.parse(data);
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
		    	//setTimeout(initMap,60000);

		    });
		  });
	    }
	  }
}
>>>>>>> 3e10e73982af77e74813dcec9870275623759f52
