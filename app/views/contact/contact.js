app.controller('ContactController', ['$scope', 'dataService', function($scope, dataService){
    $scope.contactInfo = dataService.ContactInfo;
}]);