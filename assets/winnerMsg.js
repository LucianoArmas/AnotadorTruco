const winMsgCont = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

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
});

