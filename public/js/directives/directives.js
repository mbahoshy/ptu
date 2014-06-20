// ptu.directive('pmrender', function() {
//     return {
//         restrict: 'E',
//         replace:true,
//         scope: {
//             type: '@type'
//         },
//         controller: function($scope) {
//             console.dir('hello');
//         },
//         templateUrl: '/templates/{{type}}PM.html'
//     }
// });

ptu.directive('pmrender', ['$compile', '$http', '$templateCache', '$routeParams', function($compile, $http, $templateCache, $routeParams) {

        var getTemplate = function(contentType) {
            var templateLoader,
            baseUrl = '/templates/',
            templateMap = {
                gas: 'gasPM.html',
                electric: 'electricPM.html'
            };

            var templateUrl = baseUrl + templateMap[contentType];
            templateLoader = $http.get(templateUrl, {cache: $templateCache});

            return templateLoader;

        }

        var linker = function(scope, element, attrs) {
                scope.data = {};
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
                    // title = data.nameLast;
                    // $scope.data = pm;

                    scope.data = pm;

                    console.dir(pm);
              
                    var loader = getTemplate(pm.type);

                    var promise = loader.success(function(html) {
                        element.html(html);
                    }).then(function (response) {
                        element.replaceWith($compile(element.html())(scope));
                    });

              });
        }

        // var Controller = function (scope, element, attrs) {
        //     // console.dir(scope);
        // }

        return {
            restrict: 'E',
            // scope: {
            //     $pmtype:'@pmtype'
            // },
            link: linker,
            // controller: Controller
        };
    }]);