angular.module('starter.controllers', [])

.controller('ResultCtrl', function($scope, Results) {
	$scope.results = Results.all();
	$scope.remove = function(result) {
		Results.remove(result);
	}
})

.controller('CourseCtrl', function($scope, Courses) {
	$scope.courses = Courses.all();
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
