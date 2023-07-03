const contNos = document.querySelector(".countNos");
const contEllos = document.querySelector(".countEllos");
var countGroupNos = 0;
var countGroupEllos = 0;

export function addCount(who){
  if(who === "nos"){
    countGroupNos++;
    const grupoN = document.createElementNS("http://www.w3.org/2000/svg", "g");
    grupoN.setAttribute("id",`${countGroupNos}Nos`);
    contNos.appendChild(grupoN);
  }else if(who === "ellos"){
    countGroupEllos++;
    const grupoE = document.createElementNS("http://www.w3.org/2000/svg", "g");
    grupoE.setAttribute("id",`${countGroupEllos}Ellos`);
    contEllos.appendChild(grupoE);
  }
}

export function substCountNos(){
  if(countGroupNos > 0){
      const grupoN = contNos.getElementById(`${countGroupNos}Nos`);
      contNos.removeChild(grupoN);
      countGroupNos--
    }else{
      countGroupNos = 0
    }
}


export function substCountEllos(){
  if(countGroupEllos > 0){
    const grupoE = contEllos.getElementById(`${countGroupEllos}Ellos`);
    contEllos.removeChild(grupoE);
    countGroupEllos--
  }else{
    countGroupEllos = 0
  }
}