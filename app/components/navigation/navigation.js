function NavigationController($scope, $element, $attrs) {
  var self = this;

  $scope.isMenuOpen = false;

  $scope.links = [
      {
        text: "Projects", 
        url: "root.projects",
        icon: "fa fa-bar-chart"
      },
      {
        text: "Games", 
        url: "root.games",
        icon: "fa fa-puzzle-piece"
      },
      {
        text: "Resume", 
        url: "root.resume",
        icon: "fa fa-drivers-license"
      },
      {
        text: "Contact", 
        url: "root.contact",
        icon: "fa fa-envelope"
      }
  ];

  $scope.openMenu = function(){
    $scope.isMenuOpen = !$scope.isMenuOpen;
  };

  $scope.closeMenu = function(){
    $scope.isMenuOpen = false;
  };
}

app.component('navigation', {
  templateUrl: 'app/components/navigation/navigation.html',
  controller: NavigationController
});

