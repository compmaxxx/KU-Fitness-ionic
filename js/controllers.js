angular.module('starter.controllers', [])

.controller('ResultCtrl', function($scope, Results) {
	$scope.results = Results.all();
	$scope.remove = function(result) {
		Results.remove(result);
	}
})

.controller('CourseCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
})

.controller('CourseDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.courseId);
})

.controller('SettingCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
