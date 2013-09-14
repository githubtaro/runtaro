//https://developers.google.com/maps/documentation/javascript/overlays?hl=ja#Markers
//http://tanaka8.com/2011/11/google-map-markers/
//http://www.ajaxtower.jp/googlemaps/gmap2/index4.html
/*
function on_refresh_click() {
	
	
	//var arr1 = [];
	//arr1[0] = 39.694111;
	//arr1[1] = 141.129756;
	//var arr2 = [];
	//arr2[0] = 39.706229;
	//arr2[1] = 141.141393;
	//var arr3 = [];
	//arr3[0] = 39.70055;
	//arr3[1] = 141.151307;

	var datarr = [ [],[],[] ];
	datarr[0][0] = 39.694111;
	datarr[0][1] = 141.129756;
	datarr[1][0] = 39.706229;
	datarr[1][1] = 141.141393;
	datarr[2][0] = 39.701574;
	datarr[2][1] = 141.151779;
	
	//var data = new Array();//マーカー位置の緯度経度
 	//data.push({position: new google.maps.LatLng(39.694111, 141.129756), content: '子ども科学館'});
 	//data.push({position: new google.maps.LatLng(39.706229, 141.141393), content: '啄木新婚の家'});
	//data.push({position: new google.maps.LatLng(39.70055, 141.151307), content: '岩手公園'});

	read_lanlog(datarr);

}
*/

//機能；
//引数index:divタグのid
//　　　latitude:緯度
//　　　longitude:経度
function set_lanlog(index, latitude, longitude) {

	var mapdiv = document.getElementById("map_canvas"+index);
	
	/*中央は、配列0の緯度経度でよいでしょう*/
	//var latitude_input = document.getElementById("latitude");
	//var longitude_input = document.getElementById("longitude");	
	//var latitude = latitude_input.value;
	//var longitude = longitude_input.value;
	var latlng = new google.maps.LatLng(latitude, longitude);

 	var myOptions = {
    	zoom: 16,
    	center: latlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
		scaleControl: true
 	};

	var map = new google.maps.Map(mapdiv, myOptions);
	
	var latlng2 = new google.maps.LatLng(latitude, longitude);
	var marker = new google.maps.Marker({
	  positon: latlng2,
	  map: map
	});
	
	
	
	/*配列の数だけ、押しピンマーカーを追加する。*/	
	
	//var data = new Array();//マーカー位置の緯度経度
 	//data.push({position: new google.maps.LatLng(39.694111, 141.129756), content: '子ども科学館'});
 	//data.push({position: new google.maps.LatLng(39.706229, 141.141393), content: '啄木新婚の家'});
	//data.push({position: new google.maps.LatLng(39.70055, 141.151307), content: '岩手公園'});
	//data.push({position: new google.maps.LatLng(latlng_arr[0][0], latlng_arr[0][1]), content: '子ども科学館'});
 	//data.push({position: new google.maps.LatLng(latlng_arr[1][0], latlng_arr[1][1]), content: '啄木新婚の家'});
	//data.push({position: new google.maps.LatLng(latlng_arr[2][0], latlng_arr[2][1]), content: '岩手公園'    });
	
	
	//for (var i = 0; i < /*data.length*/3; i++) {
    //	var myMarker = new google.maps.Marker({
    //		position: data[i].position,
    //		map: map
    //	});
    //	attachMessage(myMarker, data[i].content);
	//}
}

/*
google.maps.event.addDomListener(
    window,
	'load',
	set_lanlog
);
*/

/*
function attachMessage(marker, msg) {//押しピン表示用
	google.maps.event.addListener(marker, 'click', function(event) {
		new google.maps.InfoWindow({
			content: msg
		}).open(marker.getMap(), marker);
	});
}
*/
