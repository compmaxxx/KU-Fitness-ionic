angular.module('starter.services', [])

.factory('Chats', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var chats = [{
		id: 0,
		name: 'Ben Sparrow',
		lastText: 'You on your way?',
		face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
	}, {
		id: 1,
		name: 'Max Lynx',
		lastText: 'Hey, it\'s me',
		face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
	}, {
		id: 2,
		name: 'Andrew Jostlin',
		lastText: 'Did you get the ice cream?',
		face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
	}, {
		id: 3,
		name: 'Adam Bradleyson',
		lastText: 'I should buy a boat',
		face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
	}, {
		id: 4,
		name: 'Perry Governor',
		lastText: 'Look at my mukluks!',
		face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
	}];

	return {
		all: function() {
			return chats;
		},
		remove: function(chat) {
			chats.splice(chats.indexOf(chat), 1);
		},
		get: function(chatId) {
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(chatId)) {
					return chats[i];
				}
			}
			return null;
		}
	};
})

.factory('Results', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var results = [{
		tester_tag: 0,
		course_name: 'IWING Course',
		test_name: 'ชั่งน้ำหนัก-BMI',
		value: '67.5',
		unit: 'กิโลกรัม'
	}, {
		tester_tag: 1,
		course_name: 'IWING Course',
		test_name: 'ชั่งน้ำหนัก-BMI',
		value: '46.95',
		unit: 'กิโลกรัม'
	}, {
		tester_tag: 2,
		course_name: 'IWING Course',
		test_name: 'วัดส่วนสูง-BMI',
		value: '159',
		unit: 'เซนติเมตร'
	}, {
		tester_tag: 3,
		course_name: 'IWING Course',
		test_name: 'จำนวนเที่ยว-Pacer',
		value: '44',
		unit: 'เที่ยว'
	}, {
		id: 4,
		tester_tag: 4,
		course_name: 'IWING Course',
		test_name: 'Curl Up-Curl Up',
		value: '50',
		unit: 'รอบ'
	}];

	return {
		all: function() {
			return results;
		},
		remove: function(chat) {
			results.splice(results.indexOf(chat), 1);
		},
		get: function(result_id) {
			for (var i = 0; i < results.length; i++) {
				if (results[i].id === parseInt(result_id)) {
					return results[i];
				}
			}
			return null;
		}
	};
})
