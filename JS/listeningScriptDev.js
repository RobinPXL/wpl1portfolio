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
    //development
    document.getElementById("listeningToMissie").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Missie");
        clickedOnArray.push(5);
        checkingArray();
    });

    document.getElementById("listeningToSouls").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Souls");
        clickedOnArray.push(6);
        checkingArray();
    });

    document.getElementById("listeningToNight").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Night");
        clickedOnArray.push(7);
        checkingArray();
    });

    document.getElementById("listeningToGod").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on God");
        clickedOnArray.push(8);
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