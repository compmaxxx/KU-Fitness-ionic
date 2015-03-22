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
})

.controller('CourseDetailCtrl', function($scope, $stateParams, Courses, Tests) {
	var course_id = $stateParams.course_id;
	$scope.course = Courses.get(course_id);
	Tests.ByCourse(course_id).then(function(data) {
		$scope.tests = data;
	});
})

.controller('TestDetailCtrl', function($scope, $stateParams, Tests, Results) {
	var test_id = $stateParams.test_id;
	var course_id = $stateParams.course_id;
	$scope.test = Tests.get(test_id);
	$scope.result = {};

	$scope.save = function() {
		//validation

		if (!Helper.isNumber($scope.result.value)) {
			alert($scope.result.value + ' is not real number');
		} else if (!Helper.isInt($scope.result.tester_tag)) {
			alert('Tester tag is not integer');
		} else {
			Results.saveToServer({
				'value': $scope.result.value,
				'test_id': test_id,
				'tester_tag': $scope.result.tester_tag,
				'course_id': course_id
			}).then(function(data) {
				alert(data);
			})
		}
	}

})

.controller('SettingCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
