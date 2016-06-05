app.controller('loginController', function(storeFactory, $timeout, $location){
	
	var vm = this;

	vm.passwordShow = false;
	vm.inputType = 'password';
	vm.wrongPassword = false;

	vm.username = storeFactory.getUsername();
	vm.changed = storeFactory.getChanged();
	
	$timeout(function(){
		storeFactory.setChanged(false);
		vm.changed = storeFactory.getChanged();
	},8000);

	vm.changeUsername = function(input){
		storeFactory.setUsername(input);
		vm.username = storeFactory.getUsername();
	};
	
	vm.togglePassword = function(){
		vm.passwordShow == true ? vm.passwordShow = false : vm.passwordShow = true;
		vm.passwordShow == true ? vm.inputType = 'text' : vm.inputType = 'password';
	};

	vm.login = function(){
		vm.wrongPassword = true;
		$timeout(function(){
			vm.wrongPassword = false;
		},8000);
	};

	vm.lost = function(){
		$location.path('lost-password'); 
	};
	
});
