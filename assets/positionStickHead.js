let flagHeadPosYNos = 1;
let flagHeadPosXNos = 1;

let flagHeadPosYEllos = 1;
let flagHeadPosXEllos = 1;

let auxCont = 0;

export function setPos(cont, who, atributes){
  const porcLong = 14/125; /*CREO Q A ESTAS CONST LAS DEBERIA... */
  const porcThick = 1/75;/*...HACER PROPORCIONAL A LA DIMENSION DE LA WEB*/

  const porcPosX = 21/250;
  const porcPosY = 3/25;

  const hCount = (document.querySelector(`.count${who}`)).clientHeight;
  const wCount = (document.querySelector(`.count${who}`)).clientWidth;

  let stickH = 0;
  let stickW = 0;
  let stickX = 0;
  let stickY = 0;
  let headRadiusXY = 0;
  let headX = 0;
  let headY=0;
  let rotation = "";

  let multiPosY = 0;

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
  
  if(((cont-(5*auxCont))%2)==0){ //HORIZONTAL
    stickW = hCount * porcLong;
    stickH = wCount * porcThick;
    stickX = hCount * porcPosX*1.15;
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




  }else if(((cont-(5*auxCont))%5)==0){ //DIAGONAL
    stickH = hCount * porcLong;
    stickW = wCount * porcThick;
    stickX = ((hCount * porcPosX) + stickH/(Math.sqrt(2)) + Math.sqrt(stickH))   +   ((Math.sqrt(stickH) + (stickH + 1)/Math.sqrt(2))* multiPosY);
    stickY = ((hCount * porcPosX) - stickH*(Math.sqrt(2)) - 2*(Math.sqrt(stickH)))   +   ((Math.sqrt(stickH) + (stickH + 1)/Math.sqrt(2)) * multiPosY);

    // stickX = ((hCount * porcPosX) + stickH*0.8) + (stickH * multiPosY/2) + (multiPosY * (hCount/30));
    // stickY = ((wCount * porcPosY) - stickH*1.1) + (stickH * multiPosY/2) + (multiPosY * (hCount/30));
    
    
    // stickX =  (hCount * porcPosX) + stickH + (Math.sqrt(stickH)) + (stickH * multiPosY/2) + (multiPosY * (hCount/30));
    // stickY =  (hCount * porcPosX) - stickH - (Math.sqrt(stickH)) + (stickH * multiPosY/2) + (multiPosY * (hCount/30));
    headRadiusXY = porcThick * wCount; 

    headX = (stickH + stickH/(Math.sqrt(2)));
    headY = (stickH - 5*stickH/(Math.sqrt(stickH))) + ((stickH * multiPosY) + (multiPosY * (hCount/60)));

    // headX =  hCount * porcPosX + stickH - (Math.sqrt(stickH));
    // headY =  wCount * porcPosY + (stickH * multiPosY) + (multiPosY * (hCount/60)) + (Math.sqrt(stickH))*2;
    
    rotation = "rotate(45deg)"
    
    auxCont++


  }else{ //VERTICAL
    stickH = hCount * porcLong;
    stickW = wCount * porcThick;
    stickY = (wCount * porcPosY) + (stickH * multiPosY) + (multiPosY * (hCount/60));
    headRadiusXY = porcThick * wCount;  //REVISAR

    if(who === "nos"){              //if the flag = -1, the matchstick is upside down
      if(flagHeadPosYNos === 1){   //if the flag = 1, the matchstick position is normal 
        headY = stickY;
        stickX = hCount * porcPosX;
      }else{
        headY = stickY + stickH; 
        stickX = (hCount * porcPosX) + stickH*1.2;
      }
      flagHeadPosYNos= flagHeadPosYNos*(-1);

    }else{
      if(flagHeadPosYEllos === 1){ 
        headY = stickY;            
        stickX = hCount * porcPosX;
      }else{
        headY = stickY + stickH; 
        stickX = (hCount * porcPosX) + stickH*1.2;
      }
      flagHeadPosYEllos = flagHeadPosYEllos*(-1); 
    }
    
    headX = stickX;
    rotation = "rotate(0deg)";
  }

  atributes.push(stickH, stickW, stickX, stickY, headRadiusXY, headX, headY, rotation);
}
