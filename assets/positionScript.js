const nos15 = document.querySelector(".countnos15");
const nos30 = document.querySelector(".countnos30");
const ellos15 = document.querySelector(".countellos15");
const ellos30 = document.querySelector(".countellos30");

export const addPointNos = (count)=>{
  let pos = getPosition(count);

  const grupo =  document.createElementNS("http://www.w3.org/2000/svg", "g");
  grupo.setAttribute("id", `nos${count}`);
  grupo.classList.add("match");
  grupo.classList.add(`nos${count}`);

  const stick = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  stick.classList.add("stick");
  stick.classList.add(`${pos[0]}`);

  const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  head.classList.add("head");
  head.classList.add(`${pos[1]}`);
  head.setAttributeNS(null,"rx","0.15em");
  head.setAttributeNS(null,"ry","0.15em");

  grupo.appendChild(stick);
  grupo.appendChild(head);

  if(count<=15){
    nos15.appendChild(grupo);
  }else{
    nos30.appendChild(grupo);
  }
}

export const addPointEllos = (count)=>{
  let pos = getPosition(count);

  const grupo =  document.createElementNS("http://www.w3.org/2000/svg", "g");
  grupo.setAttribute("id", `ellos${count}`);
  grupo.classList.add("match");
  grupo.classList.add(`ellos${count}`);

  const stick = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  stick.classList.add("stick");
  stick.classList.add(`${pos[0]}`);

  const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  head.classList.add("head");
  head.classList.add(`${pos[1]}`);
  head.setAttributeNS(null,"rx","0.15em");
  head.setAttributeNS(null,"ry","0.15em");

  grupo.appendChild(stick);
  grupo.appendChild(head);

  if(count<=15){
    ellos15.appendChild(grupo);
  }else{
    ellos30.appendChild(grupo);
  }
}


export const subsPointNos = (count)=>{
  const grupoN = document.getElementById(`nos${count}`);
  grupoN.remove();
}

export const subsPointEllos = (count)=>{
  const grupoE = document.getElementById(`ellos${count}`);
  grupoE.remove();
};


export const resetPoints = ()=>{
  const elemGNos15 = nos15.querySelectorAll("g");
  elemGNos15.forEach(g => {
    g.remove()
  });

  const elemGEllos15 = ellos15.querySelectorAll("g");
  elemGEllos15.forEach(g =>{
    g.remove()
  });
  const elemGNos30 = nos30.querySelectorAll("g");
  elemGNos30.forEach(g => {
    g.remove()
  });

  const elemGEllos30 = ellos30.querySelectorAll("g");
  elemGEllos30.forEach(g =>{
    g.remove()
  });
};


const getPosition = (count)=>{
  let positions = [];

  if((count>=1 && count<=5)){ 
    if((count%2)===0){
      positions.splice(0,0,"horizontal1");
      if(count===2){
        positions.splice(1,0,"der1");
      }else{
        positions.splice(1,0,"izq1");
      }

    }else if(count === 5){
      positions.splice(0,0,"diagonal1");
      positions.splice(1,0,"diagonal1");

    }else{
      positions.splice(0,0,"vertical1");
      if(count===1){
        positions.splice(1,0,"arriba1");
      }else{
        positions.splice(1,0,"abajo1");
      }
    }


  }else if((count>=6 && count<=10)){
    if(count === 10){
      positions.splice(0,0,"diagonal2");
      positions.splice(1,0,"diagonal2");
      
    }else if((count%2)===0){
      positions.splice(0,0,"vertical2");
      if(count===6){
        positions.splice(1,0,"arriba2");
      }else{
        positions.splice(1,0,"abajo2");
      }

    }else{
      positions.splice(0,0,"horizontal2");
      if(count===7){
        positions.splice(1,0,"der2");
      }else{
        positions.splice(1,0,"izq2");
      }
    }


  } else if((count>=11 && count<=15)){
    if((count%2)===0){
      positions.splice(0,0,"horizontal3");
      if(count===12){
        positions.splice(1,0,"der3");
      }else{
        positions.splice(1,0,"izq3");
      }

    }else if(count === 15){
      positions.splice(0,0,"diagonal3");
      positions.splice(1,0,"diagonal3");
      
    }else{
      positions.splice(0,0,"vertical3");
      if(count===11){
        positions.splice(1,0,"arriba3");
      }else{
        positions.splice(1,0,"abajo3");
      }
    }

    
  }else if((count>=16 && count<=20)){
    if(count === 20){
      positions.splice(0,0,"diagonal4");
      positions.splice(1,0,"diagonal4");
      
    }else if((count%2)===0){
      positions.splice(0,0,"vertical4");
      if(count===16){
        positions.splice(1,0,"arriba4");
      }else{
        positions.splice(1,0,"abajo4");
      }
      
    }else{
      positions.splice(0,0,"horizontal4");
      if(count===17){
        positions.splice(1,0,"der4");
      }else{
        positions.splice(1,0,"izq4");
      }
    }


  } else if((count>=21 && count<=25)){
      if((count%2)===0){
        positions.splice(0,0,"horizontal5");
        if(count===22){
          positions.splice(1,0,"der5");
        }else{
          positions.splice(1,0,"izq5");
        }

        }else if(count === 25){
        positions.splice(0,0,"diagonal5");
        positions.splice(1,0,"diagonal5");

      }else{
        positions.splice(0,0,"vertical5");
        if(count===21){
          positions.splice(1,0,"arriba5");
        }else{
          positions.splice(1,0,"abajo5");
        }
      }

    
  }else if((count>=26 && count<=30)){
    if(count === 30){
      positions.splice(0,0,"diagonal6");
      positions.splice(1,0,"diagonal6");
      
    }else if((count%2)===0){
      positions.splice(0,0,"vertical6");
      if(count===26){
        positions.splice(1,0,"arriba6");
      }else{
        positions.splice(1,0,"abajo6");
      }
      
    }else{
      positions.splice(0,0,"horizontal6");
      if(count===27){
        positions.splice(1,0,"der6");
      }else{
        positions.splice(1,0,"izq6");
      }
    }


  }
  return positions;
}
