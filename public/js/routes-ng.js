// pv4.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
ptu.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: '../views/home-view.html',
		controller: 'HomeController'
	});

}]);