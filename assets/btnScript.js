import{addCount, substCountNos, substCountEllos} from './countScript.js';
const btnsAdd = document.getElementsByClassName("button-add");
const btnsSubst = document.getElementsByClassName("button-subst");

for(let i=0; i< btnsAdd.length; i++){
  btnsAdd[i].addEventListener("click", ()=>{
    if(btnsAdd[i].classList.contains("btn-add-nos")){
      soundBtnEffect();
      addCount("nos");
    }else{
      soundBtnEffect();
      addCount("ellos")
  }
  })
}

for(let i=0; i< btnsSubst.length; i++){
  btnsSubst[i].addEventListener("click", ()=>{
    if(btnsSubst[i].classList.contains("btn-substract-nos")){
      soundBtnEffect();
      substCountNos();
    }else if(btnsSubst[i].classList.contains("btn-substract-ellos")){
      soundBtnEffect();
      substCountEllos()}
  })
}

function soundBtnEffect(){
  let audio = new Audio("../sounds/boton.mp3");
  audio.play();
}
