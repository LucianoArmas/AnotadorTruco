import{addCount, substCountNos, substCountEllos} from './countScript.js';
const btnsAdd = document.getElementsByClassName("button-add");
const btnsSubst = document.getElementsByClassName("button-subst");
let who = "";

for(let i=0; i< btnsAdd.length; i++){
  btnsAdd[i].addEventListener("click", ()=>{
    if(btnsAdd[i].classList.contains("btn-add-nos")){
      who = "nos";
    }else{
      who = "ellos";
  }
  soundBtnEffect();
  addCount(who);
  })
}


for(let i=0; i< btnsSubst.length; i++){
  btnsSubst[i].addEventListener("click", ()=>{
    soundBtnEffect();
    if(btnsSubst[i].classList.contains("btn-substract-nos")){
      substCountNos();
    }else if(btnsSubst[i].classList.contains("btn-substract-ellos")){
      substCountEllos()}
  })
}

function soundBtnEffect(){
  let audio = new Audio("../sounds/boton.mp3");
  audio.play();
}
