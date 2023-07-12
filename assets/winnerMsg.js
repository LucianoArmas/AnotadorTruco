import {resetCount} from "./countScript.js";
const winMsgCont = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const minBtn = document.getElementById("minBtn");
const btnMenu = document.getElementById("btnMenuContainer");

export const winMsg = (who) =>{
  winMsgCont.classList.remove("hidden");
  winMsgCont.classList.add("popup");
  const msg = winMsgCont.querySelector(".msg");

  if(who === "nos"){
    msg.innerHTML = "GANAMOS NOSOTROS!!<br>😎";
  }else{
    msg.innerHTML = "GANARON ELLOS!!<br>😪";    
  }
}

closeBtn.addEventListener("click", ()=>{
  winMsgCont.classList.add("hidden");
  winMsgCont.classList.remove("popup");
  resetCount();
});

minBtn.addEventListener("click",()=>{
  winMsgCont.classList.add("hidden");
  winMsgCont.classList.remove("popup");

  btnMenu.classList.add("popup");
  btnMenu.classList.remove("hidden");
});

btnMenu.addEventListener("click",()=>{
  winMsgCont.classList.remove("hidden");
  winMsgCont.classList.add("popup");

  btnMenu.classList.remove("popup");
  btnMenu.classList.add("hidden");
})

