
export function asignPos(){
  if(((cont-(5*aux))%2)==0){
    console.log("Horizontal");
  }else if(((cont-(5*aux))%5)==0){
    console.log("Diagonal");
  }else {
    console.log("Vertical");
  }
}

