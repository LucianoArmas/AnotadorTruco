import {winMsg} from "./winnerMsg.js";
import  {addPointNos, addPointEllos} from "./positionScript.js";

let contEllos = 0;
let contNos = 0;

export const addCountNos = ()=>{
  contNos++;
  addPointNos(contNos);
  if(contNos === 30){
    soundWinner();
    winMsg("nos");
  }
  console.log(`Nos: ${contNos}`)
};

export const addCountEllos = ()=>{
  contEllos++;
  addPointEllos(contEllos);
  if(contEllos === 30){
    soundWinner();
    winMsg("ellos");
  }
  console.log(`Ellos: ${contEllos}`)
};

export const substCountNos = ()=>{
  if(contNos !== 0){
    contNos--;
  }else {
    contNos = 0;
  }
  console.log(`Nos: ${contNos}`)
};

export const substCountEllos = ()=>{
  if(contEllos !== 0){
    contEllos--;
  }else {
    contEllos = 0;
  }
  console.log(`Ellos: ${contEllos}`)
};


export const resetCount =()=>{
  contEllos = 0;
  contNos = 0;
}



const soundWinner=()=>{
  let audio = new Audio("../sounds/winner.mp3");
  audio.play();
}