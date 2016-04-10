app.controller('BioController', ['$scope', 'dataService', function($scope, dataService){
    $scope.aboutMeText = dataService.Profile.Description;
    $scope.profileImage = dataService.Profile.Photo;
}]);