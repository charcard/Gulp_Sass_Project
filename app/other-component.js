"use strict";
const otherComponent = {
    template: `
    <div class="container">
    <h1 class="title">User Info</h1> 
    <p class="user-info">Username: {{$ctrl.userInfo.name}}</p>
    <p class="user-info">Password: {{$ctrl.userInfo.password}}</p>
    </div>
    `,

    controller: ["DataService", function(DataService) {
        const vm = this;
        vm.userInfo = DataService.getData();
    }]
}


angular
    .module("app")
    .component("otherComponent", otherComponent);