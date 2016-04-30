/**
 * Created by Dhayyam on 4/28/2016.
 */
angular.module('todo')

    .controller('deletectrl', ['$scope', '$stateParams', '$rootScope', '$state', function($scope, $stateParams, $rootScope, $state) {


        $scope.listTitle = $stateParams.title;


        $scope.goBack = function() {
            $state.go($rootScope.home);
        };

    }]);
