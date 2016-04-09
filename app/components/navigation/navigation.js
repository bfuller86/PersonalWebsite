function NavigationController($scope, $element, $attrs) {
  var self = this;

  $scope.links = [
      {
        text: "Home", 
        url: "home"
      },
      {
        text: "Projects", 
        url: "projects"
      },
      {
        text: "Games", 
        url: "games"
      },
      {
        text: "Resume", 
        url: "resume"
      },
      {
        text: "Contact", 
        url: "contact"
      }
  ];
}

app.component('navigation', {
  templateUrl: 'app/components/navigation/navigation.html',
  controller: NavigationController
});

