$(function(){
	$('#ajax_test').click(
		function(){
			$.ajax({
				url:'gnavi_jsonp.php?freeword='+$('#freeword').val(),
				type: 'GET',
				dataType: 'json'
			})
			.success(function(data){
				
				console.log(data);
				// それぞれのレストラン情報について繰り返す
				var idx = 0;//地図用div id
				jQuery.each(data['response']['rest'], function(index){
					// テーブルにレコード行を追加
					var rest = data['response']['rest'][index];
					console.log(rest);
					var ido = rest.latitude;
					var keido = rest.longitude;
					
					$('#results').append(
						'<tr>'
						+'<td>'+rest.name+'</td>'
						+'<td><img width="100px" src="'+rest.image_url.shop_image1+'"/></td>'
						+'<td><img width="100px" src="'+rest.image_url.shop_image2+'"/></td>'
						+'<td>'+rest.latitude+','+rest.longitude+'"/></td>'
						+ '<td><div id="map_canvas'+i+' "style=width : 100px; height : 100px;"></div></td>'
						+'</tr>\n'
					);
					
					set_lanlog(idx, ido, keido);
					idx++;
				});
			});
			
		}
	);
});
