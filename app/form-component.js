"use strict";
const formComponent ={
    template:`
    <form class="login" ng-submit="$ctrl.formSubmit($ctrl.user);">
    <h1 class="logintitle">Login</h1>
    <input type="text" class="name" placeholder="Username" ng-model="$ctrl.user.name">
    <input type="password" class="password" placeholder="Password" ng-model="$ctrl.user.password">
    <button>Login now</button>
    <p class="message">Not signed up yet? <span class="sign-up">Sign up now.</span><p>
    </form>
    `,

    controller: ["$location", "DataService", function($location, DataService) {
        const vm = this;
        vm.formSubmit = (user) => {
            DataService.sendData(user);
            $location.path("/other-component");
        }
    }]
}

angular
    .module("app")
    .component("formComponent", formComponent);