angular.module('todo')

    .controller('listCtrl', ['$scope', '$stateParams', '$rootScope', '$state', function($scope, $stateParams, $rootScope, $state) {


        $scope.listTitle = $stateParams.title;


        $scope.goBack = function() {
            $state.go($rootScope.home);
        };

    }]);
