angular.module('todo', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'partialss/home.html',
                controller: 'homeCtrl'
            })

            .state('list', {
                url: '/list/:title',
                templateUrl: 'partialss/list.html',
                controller: 'listCtrl'
            })

            .state('delete', {
                url: '/deletelist/:title',
                templateUrl: 'partialss/deletelist.html',
                controller:'deletectrl'
            });


    }]);
