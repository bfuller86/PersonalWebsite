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