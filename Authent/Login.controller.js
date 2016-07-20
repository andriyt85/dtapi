(function() {
    'use strict';
    angular.module('app')
        .controller('loginCtrl', logController);
        logController.$ingect = ['logService', '$state'];


        function logController(logService, $state) {
            var self = this;
            self.user = {
                username: "",
                password: ""
            };
            self.enter = enter;
            function enter() {
                logService.logEnter(self.user).then(fullfilled);
            }
            function fullfilled(response) {
                if (response.data.response == "ok" && response.data.roles[1] == 'admin') {
                    $state.go('admin');
                } else if(response.data.response == "ok" && response.data.roles[1] == 'student') {
                    $state.go('student');
                }
            }
        }

})();