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
    Courses.remove(chat.id);
  }
})

.controller('CourseDetailCtrl', function($scope, $stateParams, Courses, Tests) {
  var course_id = $stateParams.course_id;
  $scope.course = Courses.get(course_id);
  Tests.ByCourse(course_id).then(function(data) {
    $scope.tests = data;
  });
})

.controller('TestDetailCtrl', function($scope, $stateParams, Tests) {
  var test_id = $stateParams.test_id;
  $scope.test = Tests.get(test_id);

})

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
