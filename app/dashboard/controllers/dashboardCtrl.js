angular.module('myapp.dashboard').
	controller('dashboardCtrl',['$scope', '$filter', 'dashboardServ',
		function($scope, $filter, dashboardServ){
			
			promise = dashboardServ.getMTTR();

			promise.then(function(data){
				$scope.mttrData = data;
				$scope.showChart = true;
				usSpinnerService.stop('spinner-1');
			}, function(){
				console.log('Error in Dashboard Ctrl for frames');
			});		

		}]);