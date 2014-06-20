//controller.js

ptu.controller("HomeController", function ($scope, $http, $location) {
	$scope.data = {};
	$http.get('/customer').success(function(data, status) {
		$scope.data.customerList = data;

	});


	$scope.customerClick = function (customer) {
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


	    var searchterms = $scope.data.search.terms.toUpperCase();
	    var searchparameters = 'search.' + $scope.data.search.parameters;

	    if (searchterms == '') {
	        $.get('/customer', function(data) {
	            $scope.data.customerList = data;

	        });                
	    } else {

	        var y = {};
	        y[searchparameters] = searchterms;

	        $http.post('/customersearch', y).success(function(data, status) {
	            $scope.data.customerList = data;
	        });
	    }
	}

	console.log('home page');
});

ptu.controller("displayCustomerController", function ($scope, $http, $routeParams, $location, $rootScope, navService) {
	$scope.data = {};

	var id = $routeParams.id;

	console.log('display customer' + id);

	$http.get('/customerid/' + id).success(function(data, status) {
		$scope.data.customer = data;
		var title = data.nameLast + ', ' + data.nameFirst;
		navService.registerTab($scope.data, title, $location.url());
	});

	$scope.pmClick = function (pm) {
		$location.url('/pm/' + id + '/' + pm.pmid);
	}
	

});

ptu.controller("addCustomerController", function ($scope, $http, $routeParams, $rootScope, $location, navService) {
	$scope.data = {};


	$scope.addCustomer = function () {
		$http.post('/customer', $scope.customer);
	}

	var title = "Add Customer";

	$scope.$watch('data', function () {
		navService.registerTab($scope.data, title, $location.url());
	});
	

});

ptu.controller("navigationController", function ($scope, $http, $rootScope, $location, navService) {
	// $rootScope.navArray = [];
	$rootScope.$on('updateNav', function () {
		$('.active-nav').removeClass('active-nav');
		for (var i = 0; i < navService.navArray.length; i++) {
			if(navService.navArray[i].url == $location.url()) {
				navService.navArray[i].class = 'active-nav';
				break;
			}
		}
		$scope.tabs = navService.navArray;

	});



	$scope.switchTab = function (tab, $event) {
		$('.active-nav').removeClass('active-nav');
		$(event.target).addClass('active-nav');
		if (tab === 0) {
			$location.url('/');
		} else {
			$scope.$on('$routeChangeSuccess', function (evt, next, prev) {
				next.scope.data = tab.data;
			});
			$location.url(tab.url);
		}
	}

	$scope.closeTab = function (tab) {
		var numTabs = navService.navArray.length;
		for(var i = 0; i < numTabs; i ++) {
			if(tab.url === navService.navArray[i].url) {
				navService.navArray.splice(i,1);
				$location.url('/');
				break;
			}
		}
	}

});

ptu.factory('navService', function($rootScope, $location) {
	return {
		navArray: [],

		pushNav: function (data) {

		
		},

		registerTab: function (data, title, url) {
			var that = this;
			// var location = $location;
			// pushNav(scope);


			// scope.$on('$routeChangeStart', function(evt, next, current) {
			// 	pushNav(scope);
			// 	// console.dir($scope);


			// });


			function pushNav (data) {
				// console.dir(location);
				var numTabs = that.navArray.length;
				var x = (function () {
					for(var i = 0; i < numTabs; i ++) {
						if (that.navArray[i].url == url) {
							that.navArray[i].data = data;
							$rootScope.$emit('updateNav');
							return true;
						}
					}
				})();
				console.dir(x);
				if (x != true) {
					if (numTabs === 5) {
						that.navArray.pop();
					}

					that.navArray.unshift({
						url: url,
						title: title,
						data: data
					});


					$rootScope.$emit('updateNav');
				}

			}
			pushNav(data);

		}
	}


});

// ptu.run(['$rootScope', '$location', function($rootScope, $location, navService){

// }]);


ptu.controller("pmController", function ($scope, $http, $routeParams, $location, navService) {
	$scope.data = {};
	var title = '';
	$scope.$watch('data', function () {
		navService.registerTab($scope.data, title, $location.url());
	});

	var customerid = $routeParams.customerid,
		pmid = $routeParams.pmid;


	$http.get('/customerid/' + customerid).success(function(data, status){
		console.dir(data);
		var pm;
		for(var i=0; i < data.pm.length; i++) {
			if(data.pm[i].pmid == pmid) {
				pm = data.pm[i];
				break;
			}
		}
		title = data.nameLast;
		$scope.data = pm;

		console.dir(pm);
	});

});