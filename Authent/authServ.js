/*(function(){
    'use strict';
    angular.module('app')
        .factory('authServ', authServ);

    authServ.$inject = ['$http', 'myAppConst'];

    function authServ($http, myAppConst) {
        return {
            authentification: auth
        };

        function auth(data) {
            return $http.post(myAppConst.authURL, data)
        }
    }
})();*/