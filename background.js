(function() {
	'user strict';
	var keyCount = 0;
	var keyCode = 27; // Esc

	var searchThemes = [
		'http://stackoverflow.com/questions/tagged/angularjs',
		'http://stackoverflow.com/questions/38206509/node-client-side-angular-service-or-server-side-object',
		'https://github.com/protobi/js-xlsx#cell-styles',
		'https://docs.angularjs.org/api/ng/function/angular.extend',
		'https://www.ics.uci.edu/~fielding/pubs/dissertation/software_arch.htm#sec_1_1',
		'https://angular.io/news.html'
	];


	$('body').keydown(function(key){
		if(key.keyCode === keyCode){
			if(keyCount !== 0) window.open(searchThemes[Math.floor(Math.random()*searchThemes.length)]);
			keyCount++;
		}else{
			keyCount = 0;
		}
	});

})();