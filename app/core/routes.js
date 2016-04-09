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