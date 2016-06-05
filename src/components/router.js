app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider.state('login', 
  {
    url: '/login',
    templateUrl: './templates/login.html'
  });

  $stateProvider.state('lost-password', 
  {
    url: '/lost-password',
    templateUrl: './templates/lost-password.html'
  });

  $stateProvider.state('reset-password', 
  {
    url: '/reset-password/:token',
    templateUrl: './templates/reset-password.html'
  });

});
