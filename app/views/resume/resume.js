app.controller('ResumeController', ['$scope', 'dataService', function($scope, dataService){
    $scope.Resumes = dataService.Resumes;
}]);