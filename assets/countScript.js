import {winMsg} from "./winnerMsg.js";
import {setPos} from "./positionStickHead.js";
const contNos = document.querySelector(".countnos");
const contEllos = document.querySelector(".countellos");
let countGroupNos = 0;
let countGroupEllos = 0;

export function addCount(who){
  const contG = document.querySelector(`.count${who}`);
  let count = 0;
  let atributes = [];

  if(who==="nos"){
    count = ++countGroupNos;
  }else{
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

  // verifyWinner(count, who);

  //stickH, stickW, stickX, stickY, headRadiusXY, headX, headY, rotation

}


export function substCountNos(){
  if(countGroupNos > 0){
      const grupoN = contNos.getElementById(`${countGroupNos}nos`);
      contNos.removeChild(grupoN); //MEDIO Q SE BUGUE ACON ESTO...PODRIA PROBAR HACERLO CON "grupoN.remove()"
      countGroupNos--
    }else{
      countGroupNos = 0
    }
}


export function substCountEllos(){
  if(countGroupEllos > 0){
    const grupoE = contEllos.getElementById(`${countGroupEllos}ellos`);
    contEllos.removeChild(grupoE);
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
    countGroupEllos = 0;
    countGroupNos = 0;
    
    const elemGNos = contNos.querySelectorAll("g");
    elemGNos.forEach(g => {
      g.remove()
    });

    const elemGEllos = contEllos.querySelectorAll("g");
    elemGEllos.forEach(g =>{
      g.remove()
    });
    
  }
}