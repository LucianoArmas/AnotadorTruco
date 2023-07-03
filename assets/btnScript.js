import{addCount, substCountNos, substCountEllos} from './countScript.js';
const btnsAdd = document.getElementsByClassName("button-add");
const btnsSubst = document.getElementsByClassName("button-subst");

for(let i=0; i< btnsAdd.length; i++){
  btnsAdd[i].addEventListener("click", ()=>{
    if(btnsAdd[i].classList.contains("btn-add-nos")){
      addCount("nos");
    }else(addCount("ellos"))
  })
}

for(let i=0; i< btnsSubst.length; i++){
  btnsSubst[i].addEventListener("click", ()=>{
    if(btnsSubst[i].classList.contains("btn-substract-nos")){
      substCountNos();
    }else if(btnsSubst[i].classList.contains("btn-substract-ellos")){
      substCountEllos()}
  })
}

