"use strict";

//clearing the localStorage, just in case.
localStorage.clear();

//creating an array to see what 
let clickedOnArray = [];
console.log(clickedOnArray);

function init(){
    console.log("Initialising...");
    listeningToItems();
};

function listeningToItems(){
    //illustration
    document.getElementById("listeningToAlbum").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Album");
        clickedOnArray.push(9);
        checkingArray();
    });

    document.getElementById("listeningToCafe").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Cafe");
        clickedOnArray.push(10);
        checkingArray();
    });

    document.getElementById("listeningToHell").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Hell");
        clickedOnArray.push(11);
        checkingArray();
    });

    document.getElementById("listeningToRoot").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Root");
        clickedOnArray.push(12);
        checkingArray();
    });

};

function checkingArray(){
    console.log("Checking array contents ...");
    console.log(clickedOnArray);
    savingLastIndexInStorage();
};

function savingLastIndexInStorage(){
    console.log("Storing item ...");
    const lastItem = clickedOnArray.pop();
    console.log("Popped number: " + lastItem);

    localStorage.setItem("ClickedOn", lastItem);
    navToTemplatePage();
};

function navToTemplatePage(){
    window.location.href = '/html/project_pages/template/projectInfoPageTemplate.html';
};

init();