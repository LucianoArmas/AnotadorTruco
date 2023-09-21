import{addCountNos, addCountEllos, substCountNos, substCountEllos} from './countScript.js';
const btnAddNos = document.querySelector(".btn-add-nos");
const btnSubsNos = document.querySelector(".btn-substract-nos");
const btnAddEllos = document.querySelector(".btn-add-ellos");
const btnSubsEllos = document.querySelector(".btn-substract-ellos");
const popup = document.getElementById("btnMenu");


btnAddNos.addEventListener("click",()=>{
  if(!(popup.classList.contains("popup"))){
    soundBtnEffect();
    addCountNos();
  }
});


btnSubsNos.addEventListener("click",()=>{
  if(!(popup.classList.contains("popup"))){
    soundBtnEffect();
    substCountNos();
  }
});


btnAddEllos.addEventListener("click",()=>{
  if(!(popup.classList.contains("popup"))){
    soundBtnEffect();
    addCountEllos();
  }
});


btnSubsEllos.addEventListener("click",()=>{
  if(!(popup.classList.contains("popup"))){
    soundBtnEffect();
    substCountEllos();
  }
});


const soundBtnEffect=()=>{
  let audio = new Audio("../sounds/boton.mp3");
  audio.play();
}
