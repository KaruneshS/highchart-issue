angular.module('myapp.dashboard').
	directive('mttrChart',[function(){

		function createMTTRChart(element, mttrData){
			element.highcharts({
		        chart: {
			        type: 'column',
			        zoomType: 'xy'
			    },
			    title: {
			        text: 'Test'
			    },
			    xAxis: {
			        type: 'category',
			        title: {
			            text: 'Test Name'
			        },
			        labels: {
			            rotation: -45,
			            style: {
			                fontSize: '13px',
			                fontFamily: 'Verdana, sans-serif'
			            }
			        }
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: 'Test Data'
			        }
			    },

		        credits: {
				    enabled: false
				},

		        dataLabels: {
		            enabled: true,
		            rotation: -90,
		            color: '#FFFFFF',
		            align: 'right',
		            format: '{point.y:.1f}', // one decimal
		            y: 10, // 10 pixels down from the top
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        },
		        series: mttrData
		    });

		}

		return {
			restrict: 'AE',
			template: '<div></div>',
			replace: true,
			scope: {
				mttrData: '='
			},
			link: function(scope, element){
				scope.$watch('mttrData', function(newVal){
					if(newVal){
						createMTTRChart(element, newVal);	
					}
					
				});
				
			}
		};

	}]);