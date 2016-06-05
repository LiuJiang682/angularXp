(function(angular) {
  'use strict';
angular.module('myModule', [])
.controller('myController', ['$scope', function($scope) {
	
}])
.directive("bsbValidator", [function(){
    return {
        restrict: "A",
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {

            function fromUser(text) {
                if (!text)
                    return text;

                if (text.length > 3) {
                	var correctText = text.substr(0, 3);
                	ngModelCtrl.$setViewValue(correctText);
                    ngModelCtrl.$render();
                    return correctText;
                }
                return text;
            }
            ngModelCtrl.$parsers.push(fromUser);
        },
        templateUrl: 'bsb.html'
    }
}]);
})(window.angular);
