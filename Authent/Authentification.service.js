(function(){
    'use strict';
    angular.module('app')
        .factory('logService', logService);

    logService.$inject = ['$http', 'myAppConst', '$state'];

    function logService($http, myAppConst, $state) {
        return {
            logEnter: logEnter,
            logOut: logOut
        };

        function logEnter(data) {
            return $http.post(myAppConst.loginURL, data)
                .then(function successRequest(response) {
                    return response;
                },
                function errorRequest(response) {
                    return response;
                })
        }

        function logOut() {
            return $http.get(myAppConst.logOutURL)
                .then(toLoginPage, toLoginPage)
        }

        function toLoginPage() {
            $state.go("login");
        }
    }
})();