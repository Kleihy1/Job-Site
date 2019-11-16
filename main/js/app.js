var app = angular.module("techHireApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProveider
    .when({
        templateUrl : "homepage.html"
    })
    .when({
        templateUrl : "jobseeker-nologin.html"
    })
    .when({
        templateUrl : "JobseekerCreateAccount.html"
    })
    .when({
        templateUrl : "AvailablePositions.html"
    })
    .when({
        templateUrl : "EmployersCreateAccount.html"
    })
    .when({
        templateUrl : "resume.html"
    })
    .when({
        templateUrl : "JobDetail.html"
    });
});