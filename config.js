var unixcoin = {
	getDataLocal: function(){
		var deferred = new $.Deferred();
		var data = {};
		$('head script:not([src])').each(function(){
			if($(this).html().indexOf('usr_idty_dt')>-1){
				eval($(this).html());
				var ucoinUser = new usr_idty_dt;
				data.uid = ucoinUser.uid();
			}
		});
		deferred.resolve(data);
		return deferred.promise();
	}

}