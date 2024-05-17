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
    //Video & Photo
    document.getElementById("listeningToGek").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Gek");
        clickedOnArray.push(13);
        checkingArray();
    });

    document.getElementById("listeningToDomein").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Domein");
        clickedOnArray.push(14);
        checkingArray();
    });

    document.getElementById("listeningToDog").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Dog");
        clickedOnArray.push(15);
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