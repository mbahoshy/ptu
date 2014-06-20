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

ptu.directive('pmrender', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {

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
            console.dir(typeof(scope.$pmtype));
            // console.dir(scope.pmtype.val());
            console.dir(scope.$pmtype);
            console.dir(scope['pmtype']);
            // console.log(attrs.pmtype);
            var loader = getTemplate(scope.pmtype);

            var promise = loader.success(function(html) {
                element.html(html);
            }).then(function (response) {
                element.replaceWith($compile(element.html())(scope));
            });
        }

        return {
            restrict: 'E',
            scope: {
                $pmtype:'@pmtype'
            },
            link: linker
        };
    }]);