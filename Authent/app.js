(function () {
    'use strict';
    var mainURL = "http://dtapi.local/";
     angular.module('myApp', [])
         .constant('myAppConst', {
            loginURL: mainURL + 'login/index',
            logOutURL: mainURL + 'login/logout',
            isLogURL: mainURL + 'login/isLogged'
         });
})();
