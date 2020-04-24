function initMap(){
	var location = {lat:41.835028,lng:-87.627083};
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 16,
		center: location
	});
	var marker = new google.maps.Marker({
		position:location,
		map:map,
	});
}
google.maps.event.addDomListener(window,'load',init);