"use strict";

angular
    .module("app", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/form-component", {
            template: `<form-component></form-component>`
        })
        .when("/other-component", {
            template: `<other-component></other-component>`
        })
        .otherwise({ redirectTo: "/form-component"});
    }]);