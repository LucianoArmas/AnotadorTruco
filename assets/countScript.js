import {winMsg} from "./winnerMsg.js";
const contNos = document.querySelector(".countnos");
const contEllos = document.querySelector(".countellos");
let countGroupNos = 0;
let countGroupEllos = 0;

export function addCount(who){
  const contG = document.querySelector(`.count${who}`);
  let count = 0;

  if(who==="nos"){
    count = ++countGroupNos;
  }else{
    count = ++countGroupEllos;
  }
  const grupo = document.createElementNS("http://www.w3.org/2000/svg", "g");
  grupo.setAttribute("id",`${count}${who}`);
  console.log(grupo);
  console.log(contG);
  contG.appendChild(grupo);
  console.log(count);

  verifyWinner(count, who);


}


export function substCountNos(){
  if(countGroupNos > 0){
      const grupoN = contNos.getElementById(`${countGroupNos}nos`);
      contNos.removeChild(grupoN);
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
  if(count==5){
    let audio = new Audio("../sounds/winner.mp3");
    audio.play();
    winMsg(who);
    countGroupEllos = 0;
    countGroupNos = 0;
  }
}