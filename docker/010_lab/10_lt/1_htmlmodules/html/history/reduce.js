(function(){
	myApp.reduce = function(arr, iterrartee) {
		var index = 0,
			length = arr.length,
			memo = arr[index];
		
		index += 1;
		for(; index < length; index += 1){
			memo = iterrartee(memo, arr[index])
		}
		return memo;
	}
})();
