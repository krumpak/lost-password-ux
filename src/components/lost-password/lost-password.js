app.controller('lostController', function(storeFactory){
	var vm = this;

	vm.username = storeFactory.getUsername();
	vm.confirmation = false;

	vm.changeUsername = function(input){
		storeFactory.setUsername(input);
		vm.username = storeFactory.getUsername();
	};

	vm.send = function(input){
		vm.confirmation = true;
	};

});