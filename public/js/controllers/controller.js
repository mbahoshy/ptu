//controller.js

ptu.controller("HomeController", function ($scope, $http, $location) {

	$http.get('/customer').success(function(data, status) {
		console.dir(data);
		$scope.customerList = data;
	});


	$scope.customerClick = function (customer) {
		console.dir(customer);
		$location.url('/display-customer/' + customer._id);

	}

	$scope.instantSearch = function () {
		if (this.stoppedTyping) clearTimeout(this.stoppedTyping);
		// set a new timer to execute 3 seconds from last keypress
		this.stoppedTyping = setTimeout(function(){
		    // $('#customer_search').trigger('click');
		    $scope.search();
		}, 100); 
	}

	$scope.search = function () {


	    var searchterms = $scope.search.terms.toUpperCase();
	    var searchparameters = 'search.' + $scope.search.parameters;
	    console.log(searchterms);
	    console.log(searchparameters);

	    if (searchterms == '') {
	        $.get('/customer', function(data) {
	            $scope.customerList = data;

	        });                
	    } else {

	        var y = {};
	        y[searchparameters] = searchterms;

	        $http.post('/customersearch', y).success(function(data, status) {
	            $scope.customerList = data;
	            console.dir(data);
	        });
	    }
	}

	console.log('home page');
});

ptu.controller("displayCustomerController", function ($scope, $http, $routeParams) {

	var id = $routeParams.id
	console.log('display customer' + id);
	$http.get('/customerid/' + id).success(function(data, status) {
		console.dir(data);
		$scope.customer = data;
	});
});