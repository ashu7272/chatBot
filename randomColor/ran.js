

const containerEls = document.querySelector(".container");


for (let index = 0; index < 25; index++) {
    const colorcontainerEl = document.createElement("div");
    colorcontainerEl.classList.add("color_container");
    containerEls.appendChild(colorcontainerEl)
    
    
}
       

     const colorEls = document.querySelectorAll(".color_container");
    //  console.log(colorcontainerEls);
      function GenerateColor(){
        colorEls.forEach((elm)=>{
             const newColorCode = randomColor();
          //  console.log(newColorCode)
          elm.style.backgroundColor = "#"+newColorCode;
          elm.innerHTML = "#"+newColorCode;
           
        })
  }
  GenerateColor();

 function randomColor (){
    const char = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*char.length);
        
        colorCode+= char.substring(randomNum,randomNum+1)
        //  console.log(colorCode);
        
        
        
   }
   return colorCode;
 }
 