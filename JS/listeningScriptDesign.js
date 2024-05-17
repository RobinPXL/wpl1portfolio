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
    console.log("Listening to clicking on Project ...");
    //design
    document.getElementById("listeningToSharks").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on sharks");
        clickedOnArray.push(1);
        checkingArray();
    });

    document.getElementById("listeningToNectosia").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Nectosia");
        clickedOnArray.push(2);
        checkingArray();
    });

    document.getElementById("listeningToCuddle").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on Cuddle");
        clickedOnArray.push(3);
        checkingArray();
    });

    document.getElementById("listeningToBXL").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Clicked on BXL");
        clickedOnArray.push(4);
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