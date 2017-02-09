(function(){
    
    var app = angular.module("app", ["ui.router", "duScroll"]);
    app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        var home = {
            name: 'home',
            url: '',
            templateUrl: 'quizview.html'
        }

        var info = {
            name: 'info',
            url: '/info',
            templateUrl: 'infoview.html'
        }

        var infobasic = {
            name: "info.infobasic",
            url: "/infobasic",
            templateUrl: "info.basic.html",
        }

        var infoimg = {
            name: "info.infoimg",
            url: "/infoimg",
            templateUrl: "info.img.html"
        }

        var skill = {
            name: "info.skill",
            url: "/infoskill",
            templateUrl: "info.skill.html"
        }

        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix("!");

        $stateProvider.state(home)
                    .state(info)
                    .state(infobasic)
                    .state(infoimg);

        $urlRouterProvider.when("/info", "/info/infobasic")
    });
})()
