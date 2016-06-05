var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.factory('storeFactory', function(){
	var username = { 'body' : '' };
	var changed = { 'status' : false };
	
  function getUsername() {
    return username.body;
  }

	function setUsername(input){
		username.body = input;
	}
	
  function getChanged() {
    return changed.status;
  }

	function setChanged(input){
		changed.status = input;
	}

	return {
		getUsername: getUsername,
		setUsername: setUsername,
		getChanged: getChanged,
		setChanged: setChanged
	};

});
