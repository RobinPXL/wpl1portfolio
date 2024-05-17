"use strict";

//Importing all the project contents from a seperate file.
import {sharkInfo} from "./allProjectsInfo.js";
import {nectosiaInfo} from "./allProjectsInfo.js";
import {cuddleInfo} from "./allProjectsInfo.js";
import {bxlInfo} from "./allProjectsInfo.js";

import {missieInfo} from "./allProjectsInfo.js";
import {soulsInfo} from "./allProjectsInfo.js";
import {nightInfo} from "./allProjectsInfo.js";
import {godInfo} from "./allProjectsInfo.js";

import { albumInfo } from "./allProjectsInfo.js";
import { cafeInfo } from "./allProjectsInfo.js";
import { hellInfo } from "./allProjectsInfo.js";
import { rootInfo } from "./allProjectsInfo.js";

import { gekInfo } from "./allProjectsInfo.js";
import { domeinInfo } from "./allProjectsInfo.js";
import { dogInfo } from "./allProjectsInfo.js";

//bringing over the number from localStorage
let clickedOn = localStorage.getItem("ClickedOn");
//Parsing it to avoid potential turning into a string
clickedOn = parseInt(clickedOn);

console.log("This is clickeOn number: " + clickedOn);

function init(){
    console.log("Initialising ...");
    checkingNumberToProject();
};

function checkingNumberToProject(){
    console.log("Checking the number to the right project... ");

    switch(clickedOn){
        case 1:
            showShark();
            break;
        case 2:
            showNectosia();
            break;
        case 3:
            showCuddle();
            break;
        case 4:
            showBxl();
            break;
        case 5:
            showMissie();
            break;
        case 6:
            showSouls();
            break;
        case 7:
            showNight();
            break;
        case 8:
            showGod();
            break;
        case 9:
            showAlbum();
            break;
        case 10:
            showCafe();
            break;
        case 11:
            showHell();
            break;
        case 12:
            showRoot();
            break;
        case 13:
            showGek();
            break;
        case 14:
            showDomein();
            break;
        case 15:
            showDog();
            break;
        default:
            console.log("Error found, not a valid 'ClickedOn'. Check it.");
            break;
    };
};


// design items
function showShark(){
    console.log("showing shark...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = sharkInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = sharkInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = sharkInfo.previousCrumb;
    document.getElementById("previousCrumb").href = sharkInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = sharkInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${sharkInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = sharkInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = sharkInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = sharkInfo.introTextProject;
    document.getElementById("downloadProject").href = sharkInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${sharkInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${sharkInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${sharkInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = sharkInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = sharkInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = sharkInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = sharkInfo.projectQuote;
};

function showNectosia(){
    console.log("showing nectosia...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = nectosiaInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = nectosiaInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = nectosiaInfo.previousCrumb;
    document.getElementById("previousCrumb").href = nectosiaInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = nectosiaInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${nectosiaInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = nectosiaInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = nectosiaInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = nectosiaInfo.introTextProject;
    document.getElementById("downloadProject").href = nectosiaInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${nectosiaInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${nectosiaInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${nectosiaInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = nectosiaInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = nectosiaInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = nectosiaInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = nectosiaInfo.projectQuote;
};

function showCuddle(){
    console.log("showing cuddle...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = cuddleInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = cuddleInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = cuddleInfo.previousCrumb;
    document.getElementById("previousCrumb").href = cuddleInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = cuddleInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${cuddleInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = cuddleInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = cuddleInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = cuddleInfo.introTextProject;
    document.getElementById("downloadProject").href = cuddleInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${cuddleInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${cuddleInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${cuddleInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = cuddleInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = cuddleInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = cuddleInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = cuddleInfo.projectQuote;
};

function showBxl(){
    console.log("showing bxl...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = bxlInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = bxlInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = bxlInfo.previousCrumb;
    document.getElementById("previousCrumb").href = bxlInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = bxlInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${bxlInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = bxlInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = bxlInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = bxlInfo.introTextProject;
    document.getElementById("downloadProject").href = bxlInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${bxlInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${bxlInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${bxlInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = bxlInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = bxlInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = bxlInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = bxlInfo.projectQuote;
}

// dev items
function showMissie(){
    console.log("showing missie...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = missieInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = missieInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = missieInfo.previousCrumb;
    document.getElementById("previousCrumb").href = missieInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = missieInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${missieInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = missieInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = missieInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = missieInfo.introTextProject;
    document.getElementById("downloadProject").classList.add("buttonVariant2Disabled");
    document.getElementById("downloadProject").innerHTML = "Unavaible at the moment";
    document.getElementById("downloadProject").removeAttribute("href");
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${missieInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${missieInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${missieInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = missieInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = missieInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = missieInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = missieInfo.projectQuote;
}

function showSouls(){
    console.log("showing souls...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = soulsInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = soulsInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = soulsInfo.previousCrumb;
    document.getElementById("previousCrumb").href = soulsInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = soulsInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${soulsInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = soulsInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = soulsInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = soulsInfo.introTextProject;
    document.getElementById("downloadProject").href = soulsInfo.downloadProject;
    document.getElementById("downloadProject").innerHTML = "Check out the Toyhou.se page";
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${soulsInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${soulsInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${soulsInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = soulsInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = soulsInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = soulsInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = soulsInfo.projectQuote;
};

function showNight(){
    console.log("showing night...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = nightInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = nightInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = nightInfo.previousCrumb;
    document.getElementById("previousCrumb").href = nightInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = nightInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${nightInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = nightInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = nightInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = nightInfo.introTextProject;
    document.getElementById("downloadProject").href = nightInfo.downloadProject;
    document.getElementById("downloadProject").innerHTML = "Check out the Toyhou.se page";
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${nightInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${nightInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${nightInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = nightInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = nightInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = nightInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = nightInfo.projectQuote;
};

function showGod(){
    console.log("showing god...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = godInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = godInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = godInfo.previousCrumb;
    document.getElementById("previousCrumb").href = godInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = godInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${godInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = godInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = godInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = godInfo.introTextProject;
    document.getElementById("downloadProject").href = godInfo.downloadProject;
    document.getElementById("downloadProject").innerHTML = "Check out the Toyhou.se page";
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${godInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${godInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${godInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = godInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = godInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = godInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = godInfo.projectQuote;
};

// illustration items
function showAlbum(){
    console.log("showing album...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = albumInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = albumInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = albumInfo.previousCrumb;
    document.getElementById("previousCrumb").href = albumInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = albumInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${albumInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = albumInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = albumInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = albumInfo.introTextProject;
    document.getElementById("downloadProject").href = albumInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${albumInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${albumInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${albumInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = albumInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = albumInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = albumInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = albumInfo.projectQuote;
};

function showCafe(){
    console.log("showing cafe...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = cafeInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = cafeInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = cafeInfo.previousCrumb;
    document.getElementById("previousCrumb").href = cafeInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = cafeInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${cafeInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = cafeInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = cafeInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = cafeInfo.introTextProject;
    document.getElementById("downloadProject").href = cafeInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${cafeInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${cafeInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${cafeInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = cafeInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = cafeInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = cafeInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = cafeInfo.projectQuote;
};

function showHell(){
    console.log("showing hell...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = hellInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = hellInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = hellInfo.previousCrumb;
    document.getElementById("previousCrumb").href = hellInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = hellInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${hellInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = hellInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = hellInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = hellInfo.introTextProject;
    document.getElementById("downloadProject").href = hellInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${hellInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${hellInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${hellInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = hellInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = hellInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = hellInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = hellInfo.projectQuote;
};

function showRoot(){
    console.log("showing root...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = rootInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = rootInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = rootInfo.previousCrumb;
    document.getElementById("previousCrumb").href = rootInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = rootInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${rootInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = rootInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = rootInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = rootInfo.introTextProject;
    document.getElementById("downloadProject").href = rootInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${rootInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${rootInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${rootInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = rootInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = rootInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = rootInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = rootInfo.projectQuote;
};

//video & photo
function showGek(){
    console.log("showing gek...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = gekInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = gekInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = gekInfo.previousCrumb;
    document.getElementById("previousCrumb").href = gekInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = gekInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${gekInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = gekInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = gekInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = gekInfo.introTextProject;
    document.getElementById("downloadProject").href = gekInfo.downloadProject;
    document.getElementById("downloadProject").innerHTML = "Check it out on Youtube";
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${gekInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${gekInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${gekInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = gekInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = gekInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = gekInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = gekInfo.projectQuote;
};

function showDomein(){
    console.log("showing domein...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = domeinInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = domeinInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = domeinInfo.previousCrumb;
    document.getElementById("previousCrumb").href = domeinInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = domeinInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${domeinInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = domeinInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = domeinInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = domeinInfo.introTextProject;
    document.getElementById("downloadProject").href = domeinInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${domeinInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${domeinInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${domeinInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = domeinInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = domeinInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = domeinInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = domeinInfo.projectQuote;
};

function showDog(){
    console.log("showing dog...");
    //Top parts
    document.getElementById("nameProjectTitle").innerHTML = dogInfo.nameProjectTitle;
    document.getElementById("projectBackArrowNav").href = dogInfo.projectBackArrowNav;
    document.getElementById("previousCrumb").innerHTML = dogInfo.previousCrumb;
    document.getElementById("previousCrumb").href = dogInfo.projectBackArrowNav;
    document.getElementById("currentCrumb").innerHTML = dogInfo.currentCrumb;
    //banner
    document.getElementById("bannerProject").style.backgroundImage = `url('${dogInfo.bannerProject}')`;
    //main info 
    document.getElementById("nameProject").innerHTML = dogInfo.nameProject;
    document.getElementById("endDateProject").innerHTML = dogInfo.projectEndDate;
    document.getElementById("introTextProject").innerHTML = dogInfo.introTextProject;
    document.getElementById("downloadProject").href = dogInfo.downloadProject;
    //extra images
    document.getElementById("extraContent1").style.backgroundImage = `url('${dogInfo.extraContent1}')`;
    document.getElementById("extraContent2").style.backgroundImage = `url('${dogInfo.extraContent2}')`;
    document.getElementById("extraContent3").style.backgroundImage = `url('${dogInfo.extraContent3}')`;
    //text
    document.getElementById("projectParagraph1").innerHTML = dogInfo.projectParagraph1;
    document.getElementById("projectParagraph2").innerHTML = dogInfo.projectParagraph2;
    document.getElementById("projectParagraph3").innerHTML = dogInfo.projectParagraph3;
    document.getElementById("projectQuote").innerHTML = dogInfo.projectQuote;
};

init();