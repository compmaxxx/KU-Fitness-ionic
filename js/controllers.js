angular.module('starter.controllers', [])

.controller('ResultCtrl', function($scope) {})

.controller('CourseCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
})

.controller('CourseDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.courseID);
})

.controller('SettingCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
