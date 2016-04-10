function NavigationController($scope, $element, $attrs) {
  var self = this;

  $scope.links = [
      {
        text: "Home", 
        url: "root.home"
      },
      {
        text: "Projects", 
        url: "root.projects"
      },
      {
        text: "Games", 
        url: "root.games"
      },
      {
        text: "Resume", 
        url: "root.resume"
      },
      {
        text: "Contact", 
        url: "root.contact"
      }
  ];
}

app.component('navigation', {
  templateUrl: 'app/components/navigation/navigation.html',
  controller: NavigationController
});

