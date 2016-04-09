var app = angular.module('app', ["ui.router"]);

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


app.config(function($stateProvider, $urlRouterProvider){
    
$urlRouterProvider.otherwise("/home");

$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/bio/bio.html',
        controller: 'BioController'
    })
    .state('games', {
        url: '/games',
        templateUrl: 'app/views/games/games.html',
        controller: 'GamesController'
    })
    .state('projects', {
        url: '/projects',
        templateUrl: 'app/views/projects/projects.html',
        controller: 'ProjectsController'  
    })
    .state('resume', {
        url:'/resume',
        templateUrl: 'app/views/resume/resume.html',
        controller: 'ResumeController'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/views/contact/contact.html',
        controller: 'ContactController'
    });
});
app.controller('BioController', ['$scope', function($scope){
    $scope.aboutMeText = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales diam quis sollicitudin sagittis. Vivamus mollis tincidunt placerat. Aliquam venenatis volutpat pellentesque. Curabitur sed vulputate turpis. Integer vel lacinia arcu. Ut risus ipsum, pharetra eu aliquet ac, porta vitae lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam vitae est eu erat pharetra finibus. Morbi congue orci ut mauris porta, sit amet pellentesque justo pulvinar.", 
    "Cras a lectus nec nulla tincidunt molestie sed eu justo. Quisque nec erat auctor, elementum lacus id, aliquam nunc. Morbi laoreet tincidunt ante, dignissim interdum metus viverra ut. Praesent ultricies consectetur augue, non eleifend enim luctus vel. Nullam viverra accumsan pulvinar. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque non est eget metus mattis aliquet sed vel tellus. Nulla a risus sem. Donec sed auctor metus. Vivamus quis ante quis enim malesuada euismod et ut dolor. Sed ultrices efficitur velit eu elementum. Mauris at justo ultrices, porttitor libero quis, tincidunt leo. Nulla ultrices lorem sed sem faucibus, vitae ultrices sem gravida. Aenean faucibus quam nec mollis semper."];
    
    $scope.profileImage = "https://upload.wikimedia.org/wikipedia/commons/6/62/Hon._James_Buchanan_-_NARA_-_528318-crop.jpg";
}]);
app.controller('ContactController', ['$scope', function($scope){
    
}]);
app.controller('GamesController', ['$scope', function($scope){
    
}]);
app.controller('ProjectsController', ['$scope', function($scope){
    
}]);
app.controller('ResumeController', ['$scope', function($scope){
    
}]);