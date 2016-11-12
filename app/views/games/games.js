app.controller('GamesController', ['$scope', 'dataService', '$sce', function($scope, dataService, $sce){
    $scope.games = dataService.Games;

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };
}]);