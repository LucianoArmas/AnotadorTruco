let flagHeadPosYNos = 1;
let flagHeadPosXNos = 1;

let flagHeadPosYEllos = 1;
let flagHeadPosXEllos = 1;

let auxCont = 0;
let auxContEllos = 0;

export function setPos(cont, who, atributes){
  console.log("Flag Antes: "+ flagHeadPosXNos); //------------------CONSOLE.LOG
  console.log("aux: " + auxCont);
  console.log("El cont vale: "+cont);
  const porcLong = 14/125; /*CREO Q A ESTAS CONST LAS DEBERIA... */
  const porcThick = 1/75;/*...HACER PROPORCIONAL A LA DIMENSION DE LA WEB*/

  const porcPosX = 21/250; //ESTE MEPA Q NO LO NECESITO USAR
  const porcPosY = 3/25; //ESTE TENGO Q ANALIZAR BIEN SI ESQ FUNKA CON OTRAS RESOLU

  const hCount = (document.querySelector(`.count${who}`)).clientHeight;
  const wCount = (document.querySelector(`.count${who}`)).clientWidth;

  let aux = 0;

  let stickH = 0;
  let stickW = 0;
  let stickX = 0;
  let stickY = 0;
  let headRadiusXY = 0;
  let headX = 0;
  let headY=0;
  let rotation = "";

  let multiPosY = 0;

  if(who === "nos"){
    aux = auxCont;
  }else{ aux = auxContEllos};

  //depends on the value of cont (which means what group of matchstick has to be completed) set a multiplier for the Y position
  if((cont>=6) && (cont<=10)){
    multiPosY = 1
  }else if((cont>=11) && (cont<=15)){
    multiPosY = 2
  }else if((cont>=16) && (cont<=20)){
    multiPosY = 3
  }else if((cont>=21) && (cont<=25)){
    multiPosY = 4
  }else if((cont>=26) && (cont<=30)){
    multiPosY = 5
  }


  //verify the "matchstick" position (horizontal, diagonal, vertical) using the "cont" and set the parameters
  
  if(((cont-(5*aux))%2)==0){ //HORIZONTAL
    stickW = hCount * porcLong;
    stickH = wCount * porcThick;
    stickX =(wCount/2)-(stickW/2);
    headRadiusXY = porcThick * wCount;

    if(who === "nos"){
      if(flagHeadPosXNos === 1){
        stickY = wCount * porcPosY + (stickW * multiPosY) + (multiPosY * (hCount/60));
        headX = stickX + stickW;
        headY = stickY;

      }else{
        stickY = wCount * porcPosY + (stickW * multiPosY) + (multiPosY * (hCount/60)) + stickW;
        headX = stickX;
        headY = stickY;
      }
      flagHeadPosXNos = flagHeadPosXNos*(-1);

    }else{
      if(flagHeadPosXEllos === 1){
        stickY = wCount * porcPosY + (stickW * multiPosY) + (multiPosY * (hCount/60));
        headX = stickX + stickW;
        headY = stickY;
        
      }else{   //    PosY                  GroupPosY       SpaceBetwGroups              
        stickY = wCount * porcPosY + (stickW * multiPosY) + (multiPosY * (hCount/60)) + stickW;
        headX = stickX;
        headY = stickY;    
      }
      flagHeadPosXEllos = flagHeadPosXEllos*(-1); 
    }
    rotation = "rotate(0deg)";




  }else if(((cont-(5*aux))%5)==0){ //DIAGONAL
    stickH = hCount * porcLong;
    stickW = wCount * porcThick;
    stickX = (wCount/2) + 0.1*((stickH/(Math.sqrt(2)))) +   ((Math.sqrt(stickH) + (stickH + 1)/Math.sqrt(2))* multiPosY);
    stickY = (stickH/2) - 2.3*((stickH/(Math.sqrt(2)))) +   ((Math.sqrt(stickH) + (stickH + 1)/Math.sqrt(2))* multiPosY);
    headRadiusXY = porcThick * wCount; 

    headX = (wCount/2) + 0.5*((stickH/(Math.sqrt(2))));
    headY = ((stickH/2) + ((stickH/(Math.sqrt(2)))/8))   + ((stickH + (hCount/60) + 2/(Math.sqrt(2))) * multiPosY);
    
    rotation = "rotate(45deg)"
    
    if(who === "nos"){
      auxCont++
    }else {auxContEllos++}


  }else{ //VERTICAL
    stickH = hCount * porcLong;
    stickW = wCount * porcThick;
    stickY = (wCount * porcPosY) + (stickH * multiPosY) + (multiPosY * (hCount/60));
    headRadiusXY = porcThick * wCount;  //REVISAR

    if(who === "nos"){              //if the flag = -1, the matchstick is upside down
      if(flagHeadPosYNos === 1){   //if the flag = 1, the matchstick position is normal 
        headY = stickY;
        stickX = (wCount/2) - (stickH/2)*1.2;
      }else{
        headY = stickY + stickH; 
        stickX = (wCount/2) + (stickH/2)*1.2;
      }
      flagHeadPosYNos= flagHeadPosYNos*(-1);

    }else{
      if(flagHeadPosYEllos === 1){ 
        headY = stickY;            
        stickX = (wCount/2) - (stickH/2)*1.2;
      }else{
        headY = stickY + stickH; 
        stickX = (wCount/2) + (stickH/2)*1.2;
      }
      flagHeadPosYEllos = flagHeadPosYEllos*(-1); 
    }
    
    headX = stickX;
    rotation = "rotate(0deg)";
  }

  console.log("Flag Desp: "+ flagHeadPosXNos); //------------------CONSOLE.LOG
  atributes.push(stickH, stickW, stickX, stickY, headRadiusXY, headX, headY, rotation);
}




export function resetAux(){
  auxCont = 0;
  auxContEllos = 0;
}

export function substAux(){
  if(auxCont>0){
    auxCont--;
    flagHeadPosXNos = flagHeadPosXNos * (-1)
  }
}

export function substAuxEllos(){
  if(auxContEllos>0){
    auxContEllos--;
    flagHeadPosXEllos = flagHeadPosXEllos * (-1)
  }
}

//These functions mod the flags when the group count is zero and the user keep clicking the subst btn
export function resetFlagVerNos(){
  if(flagHeadPosYNos == -1){
    flagHeadPosYNos = flagHeadPosYNos * (-1);
  }
}
export function resetFlagHorNos(){
  if(flagHeadPosXNos == -1){
    flagHeadPosXNos = flagHeadPosXNos * (-1);
  }
}
export function resetFlagVerEllos(){
  if(flagHeadPosYEllos == -1){
    flagHeadPosYEllos = flagHeadPosYEllos * (-1);
  }
}
export function resetFlagHorEllos(){
  if(flagHeadPosXEllos == -1){
    flagHeadPosXEllos = flagHeadPosXEllos * (-1);
  }
}



//These funct mod the flags when the group count is bigger than zero and the user clicks the subst btn
// export function modFlagVerNosSbstBtn(){
//   flagHeadPosYNos = flagHeadPosYNos*(-1)
// };
// export function modFlagHorNosSbstBtn(){
//   flagHeadPosXNos = flagHeadPosXNos * (-1)
// };
// export function modFlagVerEllosSbstBtn(){
//   flagHeadPosYEllos = flagHeadPosYEllos * (-1)
// };
// export function modFlagHorEllosSbstBtn(){
//   flagHeadPosXEllos = flagHeadPosXEllos * (-1)
// };


export function modFlagsNos(cont){
  if(((cont - (5*auxCont))%2 == 0)){
    flagHeadPosXNos = flagHeadPosXNos * (-1)
  }else{
    flagHeadPosYNos = flagHeadPosYNos*(-1)
  }
}

export function modFlagsEllos(cont){
  if((cont - (5*auxContEllos))%2 == 0){
    flagHeadPosXEllos = flagHeadPosXEllos * (-1)
  }else{
    flagHeadPosYEllos = flagHeadPosYEllos*(-1)
  }
}
