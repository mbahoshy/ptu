//controller.js

ptu.controller("HomeController", function ($scope, $http) {

	$http.get('/customer').success(function(data, status) {
		console.dir(data);
		$scope.customerList = data;
	});


	console.log('home page');
});