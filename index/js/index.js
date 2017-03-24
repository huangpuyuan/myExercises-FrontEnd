"use strict";

angular.module('myindex', [])
    .controller('myCtrl', ['$http', '$scope', function($http, $scope) {
        $http.get('../data/myRepo.json').then(function(resp) {
            $scope.list = resp.data;
        });
    }]);
