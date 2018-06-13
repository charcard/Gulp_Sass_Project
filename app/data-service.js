"use strict";

function DataService () {
    let newUser = {};
    const sendData = (user) => {
        newUser = user;
        console.log(newUser);
    }
    const getData = () => {
        return newUser;
    }

    return  {
        sendData,
        getData
    }


}


angular
    .module("app")
    .factory("DataService", DataService);