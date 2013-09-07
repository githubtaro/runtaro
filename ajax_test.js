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
				jQuery.each(data['response']['rest'], function(index){
					// テーブルにレコード行を追加
					rest = data['response']['rest'][index];
					console.log(rest);
					$('#results').append(
						'<tr>'
						+'<td>'+rest.name+'</td>'
						+'<td><img width="300px" src="'+rest.image_url.shop_image1+'"/></td>'
						+'<td><img width="300px" src="'+rest.image_url.shop_image2+'"/></td>'
						+'</tr>\n'
					);
				});
			});
			
		}
	);
});
