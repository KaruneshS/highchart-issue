angular.module('myapp.dashboard').
	service('dashboardServ',['$http','$q',
		function($http, $q){
			
			this.getMTTR= function(){

				var defer = $q.defer();

				var httpPromise = $http.get('app/data/0.json');

				httpPromise.then(function(result){
					
					data = result.data;
					defer.resolve(data);

				});

				return defer.promise;

			};

		}]);