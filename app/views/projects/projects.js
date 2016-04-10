app.controller('ProjectsController', ['$scope', 'dataService', function($scope, dataService){
    $scope.projects = dataService.Projects;
}]);