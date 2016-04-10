app.controller('GamesController', ['$scope', 'dataService', function($scope, dataService){
    $scope.games = dataService.Games;
}]);