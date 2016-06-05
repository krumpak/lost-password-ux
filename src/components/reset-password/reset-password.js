app.controller('resetController', function(storeFactory, $location){
	var vm = this;

	vm.username = storeFactory.getUsername();

	vm.validation = { required: 'text-muted', length: 'text-muted', digits: 'text-muted', upper: 'text-muted', lower: 'text-muted', special: 'text-muted', match: 'text-muted', percentage: 0, bar: 'progress-warning', valid: false};


	vm.reset = function(input){
		storeFactory.setChanged(true);
		$location.path('login'); 
	};

	vm.validate = function(input){
		var counting = 0;
		
		if( input==undefined ){ input = ''; }

		if( input.length > 0 ){
			vm.validation.required = 'text-success';
			counting++;
		}else{
			vm.validation.required = 'text-danger';
		}

		if( input.length >= 8 ){
			vm.validation.length = 'text-success';
			counting++;
		}else{
			vm.validation.length = 'text-danger';
		}

		if( /\d+/.test(input) ){
			vm.validation.digits = 'text-success';
			counting++;
		}else{
			vm.validation.digits = 'text-danger';
		}

		if( /[A-Z]/.test(input) ){
			vm.validation.upper = 'text-success';
			counting++;
		}else{
			vm.validation.upper = 'text-danger';
		}

		if( /[a-z]/.test(input) ){
			vm.validation.lower = 'text-success';
			counting++;
		}else{
			vm.validation.lower = 'text-danger';
		}

		if( /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(input) ){
			vm.validation.special = 'text-success';
			counting++;
		}else{
			vm.validation.special = 'text-danger';
		}

		if( input == vm.retypePassword && input != '' ){
			vm.validation.match = 'text-success';
			counting++;
		}else{
			vm.validation.match = 'text-danger';
		}

		if( vm.validation.required == 'text-success' && vm.validation.length == 'text-success' && vm.validation.digits == 'text-success' && vm.validation.upper == 'text-success' && vm.validation.lower == 'text-success' && vm.validation.special == 'text-success' && vm.validation.match == 'text-success' ){
			vm.validation.valid = true;
		}else{
			vm.validation.valid = false;
		}
		
		if( counting/7 == 1 ) {
			vm.validation.bar = 'progress-success';
		} else if( counting/7 >= 0.3 ){
			vm.validation.bar = 'progress-warning';
		} else {
			vm.validation.bar = 'progress-danger';
		}

		vm.validation.percentage = counting;
	};

});