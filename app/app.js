var app = angular.module('myapp',[
	'ngRoute',
	'myapp.dashboard'
]);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/home',{
		controller: 'dashboardCtrl',
		templateUrl: 'app/templates/pages/dashboardTpl.html'
	});

	$routeProvider.otherwise('/home');

}]);