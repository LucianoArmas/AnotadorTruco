import {winMsg} from "./winnerMsg.js";
import {setPos, resetAux, substAux, substAuxEllos, modFlagsNos, modFlagsEllos,
  resetFlagVerNos, resetFlagHorNos, resetFlagVerEllos, resetFlagHorEllos,
  // modFlagVerNosSbstBtn, modFlagHorNosSbstBtn, modFlagVerEllosSbstBtn, modFlagHorEllosSbstBtn
} from "./positionStickHead.js";
const contNos = document.querySelector(".countnos");
const contEllos = document.querySelector(".countellos");
let countGroupNos = 0;
let countGroupEllos = 0;


export function addCount(who){
  console.log("Antes + " + countGroupNos); //--------------------------CONSOLE LOG
  const contG = document.querySelector(`.count${who}`);
  let count = 0;
  let atributes = [];

  if(who==="nos"){
    if(countGroupNos==0){
      resetFlagHorNos();
      resetFlagVerNos();
    }
    count = ++countGroupNos;
  }else{
    if(countGroupEllos==0){
      resetFlagHorEllos();
      resetFlagVerEllos();
    }
    count = ++countGroupEllos;
  }

  setPos(count, who, atributes);

  const grupo = document.createElementNS("http://www.w3.org/2000/svg", "g");
  grupo.setAttribute("id",`${count}${who}`);
  grupo.classList.add("match");

  const stick = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  stick.classList.add("stick");
  

  stick.setAttributeNS(null,"x",(atributes[2]));
  stick.setAttributeNS(null,"y",(atributes[3]));
  stick.setAttributeNS(null,"width",(atributes[1]));
  stick.setAttributeNS(null,"height",(atributes[0]));
  stick.style.transform = atributes[7];

  const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  head.classList.add("head");
  head.setAttributeNS(null,"cx",(atributes[5]));
  head.setAttributeNS(null,"cy",(atributes[6]));
  head.setAttributeNS(null,"rx",(atributes[4]));
  head.setAttributeNS(null,"ry",(atributes[4]));

  grupo.appendChild(stick);
  grupo.appendChild(head);
  contG.appendChild(grupo);

  verifyWinner(count, who);
  console.log("Desp + " + countGroupNos); //--------------------------CONSOLE LOG

}


export function substCountNos(){
  if(countGroupNos > 0){
      const grupoN = contNos.getElementById(`${countGroupNos}nos`);
      contNos.removeChild(grupoN); //MEDIO Q SE BUGUEA CON ESTO...PODRIA PROBAR HACERLO CON "grupoN.remove()"
      console.log("El count vale 1°: " + countGroupNos); // -------------------------CONSOLE LOG
      modFlagsNos(countGroupNos);
      // if((countGroupNos%2)==0){
      //   modFlagHorNosSbstBtn();
      // }else{
      //   modFlagVerNosSbstBtn();
      // }
      if((countGroupNos%5)==0){
        substAux();
      }
      countGroupNos--
    }else{
      countGroupNos = 0
    }
    console.log("El count vale 2°: " + countGroupNos); // -------------------------CONSOLE LOG
}


export function substCountEllos(){
  if(countGroupEllos > 0){
    const grupoE = contEllos.getElementById(`${countGroupEllos}ellos`);
    contEllos.removeChild(grupoE);
    modFlagsEllos(countGroupEllos);
    // if((countGroupNos%2)==0){
    //   modFlagHorEllosSbstBtn();
    // }else{
    //   modFlagVerEllosSbstBtn();
    // }
    if((countGroupEllos%5)==0){
      substAuxEllos();
    }
    substAuxEllos();
    countGroupEllos--
  }else{
    countGroupEllos = 0
  }
}

const verifyWinner = (count, who)=>{
  if(count==30){
    let audio = new Audio("../sounds/winner.mp3");
    audio.play();
    winMsg(who);
  }
}

export function resetCount(){  
  countGroupEllos = 0;
  countGroupNos = 0;
  resetAux();
  
  const elemGNos = contNos.querySelectorAll("g");
  elemGNos.forEach(g => {
    g.remove()
  });

  const elemGEllos = contEllos.querySelectorAll("g");
  elemGEllos.forEach(g =>{
    g.remove()
  });
}