var app = angular.module('app', ["ui.router"]);

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


app.config(function($stateProvider, $urlRouterProvider){
    
$urlRouterProvider.otherwise("/home");

$stateProvider
    .state('root', {
        abstract: true,
        templateUrl: 'app/views/root/root.html'
    })
    .state('root.home', {
        url: '/home',
        templateUrl: 'app/views/bio/bio.html',
        controller: 'BioController'
    })
    .state('root.games', {
        url: '/games',
        templateUrl: 'app/views/games/games.html',
        controller: 'GamesController'
    })
    .state('root.projects', {
        url: '/projects',
        templateUrl: 'app/views/projects/projects.html',
        controller: 'ProjectsController' 
    })
    .state('root.resume', {
        url:'/resume',
        templateUrl: 'app/views/resume/resume.html',
        controller: 'ResumeController'
    })
    .state('root.contact', {
        url: '/contact',
        templateUrl: 'app/views/contact/contact.html',
        controller: 'ContactController'
    })
    .state('error',{
        url: '/error',
        templateUrl: 'app/views/error/error.html',
        controller: 'ErrorController'
    });
});
app.service('dataService', function(){
    var data = {
        "Profile":{
            "Name": "Brian Fuller",
            "Photo": "https://upload.wikimedia.org/wikipedia/commons/6/62/Hon._James_Buchanan_-_NARA_-_528318-crop.jpg",
            "Description": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales diam quis sollicitudin sagittis. Vivamus mollis tincidunt placerat. Aliquam venenatis volutpat pellentesque. Curabitur sed vulputate turpis. Integer vel lacinia arcu. Ut risus ipsum, pharetra eu aliquet ac, porta vitae lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam vitae est eu erat pharetra finibus. Morbi congue orci ut mauris porta, sit amet pellentesque justo pulvinar.", 
                
                "Cras a lectus nec nulla tincidunt molestie sed eu justo. Quisque nec erat auctor, elementum lacus id, aliquam nunc. Morbi laoreet tincidunt ante, dignissim interdum metus viverra ut. Praesent ultricies consectetur augue, non eleifend enim luctus vel. Nullam viverra accumsan pulvinar. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque non est eget metus mattis aliquet sed vel tellus. Nulla a risus sem. Donec sed auctor metus. Vivamus quis ante quis enim malesuada euismod et ut dolor. Sed ultrices efficitur velit eu elementum. Mauris at justo ultrices, porttitor libero quis, tincidunt leo. Nulla ultrices lorem sed sem faucibus, vitae ultrices sem gravida. Aenean faucibus quam nec mollis semper."
            ]  
        },
        "Games": {
            "THHD": {
                "Key": "THHD",
                "Name": "Tony Hawk's Pro Skater HD",
                "Date": "05-01-2012",
                "Photo": "https://upload.wikimedia.org/wikipedia/en/a/ac/TonyHawkHDArt.jpg",
                "Trailer": "https://youtu.be/fXkW_FY1SMg",
                "Genre": "Action/Sports",
                "Tags": ["Action", "Sports", "Skateboarding", "Tony Hawk"],
                "Tech": ["Unrealscript", "C++"],
                "GameEngine": "Unreal Development Kit - UE3",
                "Publisher": "Activision",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "TheBeasties": {
                "Key": "TheBeasties",
                "Name": "The Beasties: Hello World",
                "Date": "08-30-2012",
                "Photo": "",
                "Trailer": "https://youtu.be/0WAK4g-K8zo",
                "Genre": "Digital Pet Simulator",
                "Tags": ["Virtual Pet", "Pet"],
                "Tech": ["C#"],
                "GameEngine": "Unity 3D",
                "Publisher": "Toy Studio",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "SkateboardSlam": {
                "Key": "SkateboardSlam",
                "Name": "Skateboard Slam",
                "Date": "09-30-2013",
                "Photo": "",
                "Trailer": "https://youtu.be/74DBR8Tmg-k",
                "Genre": "Action/Sports",
                "Tags": ["Action", "Sports", "Skateboarding"],
                "Tech": ["C#", "Objective-C", "Java"],
                "GameEngine": "Unity 3D",
                "Publisher": "Zynga",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "HungerGames": {
                "Key": "HungerGames",
                "Name": "Hunger Games: Panem Run",
                "Date": "11-15-2013",
                "Photo": "",
                "Trailer": "https://www.youtube.com/watch?v=VNtwcNmbCrc",
                "Genre": "Action",
                "Tags": ["Action", "Endless Runner", "Hunger Games"],
                "Tech": ["C#"],
                "GameEngine": "Unity 3D",
                "Publisher": "Reliance Entertainment",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "ZombieYoga": {
                "Key": "ZombieYoga",
                "Name": "Zombie Yoga",
                "Date": "11-15-2012",
                "Photo": "",
                "Trailer": "",
                "Genre": "Action/Experimental Storytelling",
                "Tags": ["Action", "Zombies", "Yoga", "IndieCade"],
                "Tech": ["C#"],
                "GameEngine": "Unity 3D",
                "Publisher": "DePaul University",
                "Developer": "DePaul University",
                "DevTitle": "Lead Software Engineer"
            }
        },
        "Projects": [
            {
                "Key": "diji-touch",
                "Name": "diji-touch Vending Machine",
                "Description": "",
                "Date": "",
                "Clients": ["Mondelez International"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "ASP.NET", "MVC", "WPF", "WCF Services", "SQL", "jQuery"]
            },
            {
                "Key": "Import",
                "Name": "Import Brokerage Website Prototype",
                "Description": "",
                "Date": "",
                "Clients": ["Livingston International"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "KnockoutJS"]
            },
            {
                "Key": "Converge",
                "Name": "Clarity Converge",
                "Description": "",
                "Date": "",
                "Clients": ["AT&T", "Verizon Communications", "BT Group", "InterCall Inc", "Level3 Communications"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "ASP.NET", "MVC", "SQL", "UCMA"]
            },
            {
                "Key": "Attendant",
                "Name": "Clarity Converge Attendant",
                "Description": "",
                "Date": "",
                "Clients": ["Qualcomm Inc"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "AngularJS"]
            }
        ],
        "Resumes": [
            {
                "Photo": "app/content/images/pdf_icon.jpg",
                "FileLocation": "http://www.google.com",
                "AltText" : "Download Resume.pdf Image",
                "Description": "Resume (.pdf)"
            },
            {
                "Photo": "app/content/images/docx_icon.jpeg",
                "FileLocation": "http://www.google.com",
                "AltText" : "Download Resume.docx Image",
                "Description": "Resume (.docx)"
            }
        ],
        "ContactInfo": [
            {
                "Key": "Email",
                "Info": "contactme@brianfuller.us"
            }
        ]
    };
    
    return data;
});
app.controller('BioController', ['$scope', 'dataService', function($scope, dataService){
    $scope.aboutMeText = dataService.Profile.Description;
    $scope.profileImage = dataService.Profile.Photo;
}]);
app.controller('ContactController', ['$scope', 'dataService', function($scope, dataService){
    $scope.contactInfo = dataService.ContactInfo;
}]);
app.controller('ErrorController', ['$scope', function($scope){
    
}]);
app.controller('GamesController', ['$scope', 'dataService', function($scope, dataService){
    $scope.games = dataService.Games;
}]);
app.controller('ProjectsController', ['$scope', 'dataService', function($scope, dataService){
    $scope.projects = dataService.Projects;
}]);
app.controller('ResumeController', ['$scope', 'dataService', function($scope, dataService){
    $scope.Resumes = dataService.Resumes;
}]);