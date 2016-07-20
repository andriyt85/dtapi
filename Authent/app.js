(function () {
    'use strict';

     angular.module('app', ['ui.router'])
         .constant('myAppConst', {
             logInURL: 'http://dtapi.local/login/index',
             logOutURL: 'http://dtapi.local/login/logout',
             IsLoggedURL: 'http://dtapi.local/login/isLogged',
             getSubjects: 'http://dtapi.local/subject/getRecords',
             getRangeOfSubjects: 'http://dtapi.local/subject/getRecordsRange',
             countSubjects: 'http://dtapi.local/subject/countRecords',
             addSubject: 'http://dtapi.local/subject/insertData',
             editSubject: 'http://dtapi.local/subject/update/',
             delSubject: 'http://dtapi.local/subject/del/'
         })
        .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
            $stateProvider

            //route for login page
                .state('login', {
                    url: '/login',
                    templateUrl: 'Authent/login.html',
                    controller: 'LoginCtrl as login'
                })

                //route for admin page
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'Authent/admin.html'
                })

                //route for admin subjects page
                .state('admin.subjects', {
                    url: '/subjects',
                    views: {
                        'content': {
                            templateUrl: 'admin/subject/subjects.html',
                            controller: 'SubjectCtrl as subjects'
                        }
                    }
                })

                //route for form to add new Subject
                .state('admin.newSubject', {
                    url: '/newSubject',
                    views: {
                        'content': {
                            templateUrl: 'admin/subject/newSubject.html',
                            controller: 'SubjectCtrl as subjects'
                        }
                    }
                })

            ;

            $urlRouterProvider.otherwise('/');
        }])
})();
