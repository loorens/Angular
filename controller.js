var testApp = angular.module('testApp',[]);

testApp.controller('HelloController', function ($scope){
	$scope.greeting = {text: 'Hello³'};
});
