var testApp = angular.module('testApp',[]);

testApp.controller('HelloController', function ($scope){
	$scope.greeting = {text: 'Hello³'};
});


testApp.controller('CartController', function ($scope){
	$scope.items = [
		{title: "wódka", qnt: 5, price: 25},
		{title: "szmpan", qnt: 1, price: 100},
		{title: "piwo", qnt: 15, price: 5}
	];
	
	$scope.item = {title: "test", qnt: 1, price: 10}
	
	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}
	
	$scope.add = function(item){
		var itemm = {title:item.title, qnt:item.qnt, price:item.price};
		$scope.items.splice(0,0,itemm);
	}
});
