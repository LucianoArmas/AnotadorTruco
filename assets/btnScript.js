import{addCountNos, addCountEllos, substCountNos, substCountEllos} from './countScript.js';
const btnAddNos = document.querySelector(".btn-add-nos");
const btnSubsNos = document.querySelector(".btn-substract-nos");
const btnAddEllos = document.querySelector(".btn-add-ellos");
const btnSubsEllos = document.querySelector(".btn-substract-ellos");


btnAddNos.addEventListener("click",()=>{
  soundBtnEffect();
  addCountNos();
});


btnSubsNos.addEventListener("click",()=>{
  soundBtnEffect();
  substCountNos();
});


btnAddEllos.addEventListener("click",()=>{
  soundBtnEffect();
  addCountEllos();
});


btnSubsEllos.addEventListener("click",()=>{
  soundBtnEffect();
  substCountEllos();
});


const soundBtnEffect=()=>{
  let audio = new Audio("../sounds/boton.mp3");
  audio.play();
}
