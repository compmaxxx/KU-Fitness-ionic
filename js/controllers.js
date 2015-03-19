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

.controller('CourseDetailCtrl', function($scope, $stateParams, Courses) {
  var course_id = $stateParams.course_id;
  $scope.course = Courses.get(course_id);
  Courses.get_tests(course_id).then(function(data) {
    $scope.tests = data;
  });
})

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
