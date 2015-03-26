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

.controller('TestDetailCtrl', function($scope, $stateParams, Tests, Results,
	$ionicPopup, $q) {
	var test_id = $stateParams.test_id;
	var course_id = $stateParams.course_id;
	$scope.test = Tests.get(test_id);
	$scope.result = {};

	var showAlert = function(title, message) {
		var deferred = $q.defer();
		var alertPopup = $ionicPopup.alert({
			title: title,
			template: message
		});
		alertPopup.then(function(res) {;
			deferred.resolve(res);
		});

		return deferred.promise;
	};

	var showConfirm = function(title, message) {
		var deferred = $q.defer();
		var confirmPopup = $ionicPopup.confirm({
			title: title,
			template: message
		});
		confirmPopup.then(function(res) {
			if (res) {
				deferred.resolve(res);
			} else {
				deferred.reject(res);
			}
		});

		return deferred.promise;
	};

	$scope.AlertTestInput = function(data) {
		showAlert('สำเร็จ', 'บันทึกข้อมูลของ ' + $scope.result.tester_tag +
				' เรียบร้อย')
			.then(function(data) {
				$scope.clear();
			});
	}

	$scope.ConfirmTestInput = function(error) {
		if (error == 422) {
			showConfirm('ระวัง!!!', 'มีข้อมูลของ ' + $scope.result
					.tester_tag +
					' อยู่แล้ว <br/>ท่านต้องการบันทึกแทนที่หรือไม่?')
				.then(function(data) {
					Results.getResult({
							test_id: test_id,
							course_id: course_id,
							tester_tag: $scope.result.tester_tag
						})
						.then(function(data) {
							Results.updateToServer({
									value: $scope.result.value,
									tester_tag: $scope.result.tester_tag,
									id: data.id
								})
								.then($scope.AlertTestInput, $scope.ConfirmTestInput);
						})

				}, function(error) {
					$scope.clear();
				})
		} else if (error == 406) {
			showAlert('ผิดพลาด', 'ผู้เข้าทดสอบหมายเลข ' + $scope.result.tester_tag +
				' ยัง<b>ไม่ลงทะเบียน</b>')
		}
	}


	$scope.clear = function() {
		$scope.result.value = '';
		$scope.result.tester_tag = '';
	}



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
				})
				.then($scope.AlertTestInput, $scope.ConfirmTestInput);
		}
	}

})

.controller('SettingCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
