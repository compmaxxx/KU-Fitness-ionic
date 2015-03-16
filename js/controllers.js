angular.module('starter.controllers', [])

.controller('ResultCtrl', function($scope, Results) {
	$scope.results = Results.all();
	$scope.remove = function(result) {
		Results.remove(result);
	}
})

.controller('TabsCtrl', function($scope) {

})

.controller('CourseCtrl', function($scope, Courses) {
	Courses.all().then(function(data) {
		$scope.courses = data;
	});
	$scope.remove = function(chat) {
		Courses.remove(chat);
	}
})

.controller('CourseDetailCtrl', function($scope, $stateParams, Courses) {
	$scope.course = Courses.get($stateParams.course_id);
})

.controller('SettingCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
