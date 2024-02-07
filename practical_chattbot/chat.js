
const sendEl = document.querySelector(".send i");
const inputEl = document.querySelector("#txtinput");
const chatbodyEl = document.querySelector(".chat_body");



inputEl.addEventListener("keyup",(elm)=>{
  if(elm.keyCode === 13){
   renderMessage();
  }
})


const userMessage = (txt)=>{
  const message = document.createElement("div");

   message.classList.add("showmessage");
   message.textContent = txt;
  chatbodyEl.append(message.textContent);

 }

 const renderMessage = ()=>{
  const inputMessage = inputEl.value;
  userMessage(inputMessage);
  inputEl.value = "";
  
}

 sendEl.addEventListener("click",renderMessage);


