angular.module('starter.services', [])

.factory('Courses', function($http, $q) {
  // Might use a resource here that returns a JSON array

  var url = 'http://' + Config.HOST + ':8008/course-rest';

  return {
    all: function() {
      var deferred = $q.defer();
      $http({
          url: url,
          method: 'GET',
        })
        .success(function(data, status, headers, config) {
          courses = data;
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          //handle error
          alert('Cant\'t connnect to server');
        });
      return deferred.promise;
    },

    get: function(course_id) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id === parseInt(course_id)) {
          return courses[i];
        }
      }
      return null;
    }
  };
})

.factory('Tests', function($http, $q) {
  var url = 'http://' + Config.HOST + ':8008/test-rest';
  return {
    ByCourse: function(course_id) {
      var deferred = $q.defer();
      $http({
          url: url + '/by-course',
          method: 'GET',
          params: {
            'id': course_id
          }
        })
        .success(function(data, status, headers, config) {
          tests = data;
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          //handle error
          alert('Cant\'t connnect to server');
        });
      return deferred.promise;
    },
    get: function(test_id) {
      for (var i = 0; i < tests.length; i++) {
        if (tests[i].id === parseInt(test_id)) {
          return tests[i];
        }
      }
      return null;
    },
  }

})

.factory('Results', function($http, $q) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var results = [{
  //   tester_tag: 0,
  //   course_name: 'IWING Course',
  //   test_name: 'ชั่งน้ำหนัก-BMI',
  //   value: '67.5',
  //   unit: 'กิโลกรัม'
  // }, {
  //   tester_tag: 1,
  //   course_name: 'IWING Course',
  //   test_name: 'ชั่งน้ำหนัก-BMI',
  //   value: '46.95',
  //   unit: 'กิโลกรัม'
  // }, {
  //   tester_tag: 2,
  //   course_name: 'IWING Course',
  //   test_name: 'วัดส่วนสูง-BMI',
  //   value: '159',
  //   unit: 'เซนติเมตร'
  // }, {
  //   tester_tag: 3,
  //   course_name: 'IWING Course',
  //   test_name: 'จำนวนเที่ยว-Pacer',
  //   value: '44',
  //   unit: 'เที่ยว'
  // }, {
  //   id: 4,
  //   tester_tag: 4,
  //   course_name: 'IWING Course',
  //   test_name: 'Curl Up-Curl Up',
  //   value: '50',
  //   unit: 'รอบ'
  // }];
  var url = 'http://' + Config.HOST + ':8008/result-rest';
  var results = window.localStorage.getItem('results');
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
    },
    saveToServer: function(result) {
      var deferred = $q.defer();
      $http({
          url: url,
          method: 'PUT',
          data: {
            'value': result.value,
            'test_id': result.test_id,
            'tester_tag': result.tester_tag,
            'course_id': result.course_id
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        })
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          alert('Can\'t connect to server')
        });

      return deferred.promise;
    },
  };
})
