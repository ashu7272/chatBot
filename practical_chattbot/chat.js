
const sendEl = document.querySelector(".send");
const inputEl = document.querySelector("#chat_body");

const txtinputEl = document.querySelector("#txtinput");
const loadingEl = document.querySelector(".loading");

const responseobj = {
   hello : "How are you",
   hey : "What are you doing?",
   today: new Date().toLocaleDateString(),
   time: new Date().toLocaleTimeString()

};
const toggleLoading = (show)=>{
   loadingEl.classList.toggle("hide",show);
}

const savedScrollbarPosition = ()=>{

   if(inputEl.scrollTop>0){
     inputEl.savedScrillbarPosition = inputEl.scrollHeight
   }
}


txtinputEl.addEventListener("keyup",(elm)=>{
   if(elm.keyCode === 13){
      renderMessage()
   }
})


function getChat (inputMessage,type){
    
   let className = "user_message";
   if(type !== "user"){
      className = "chatbot_message";
   }

   const messageCover = document.createElement("div");
   messageCover.classList.add(className);
   messageCover.textContent = inputMessage;

   setTimeout(()=>{
      inputEl.appendChild(messageCover)
      savedScrollbarPosition();
   
   },600)

   

}




function GetAnswer(ans){
    const res  = ans;
//     getChat(ans,"chatbot_message");
 }


function renderMessage (){
   const inputMessage = txtinputEl.value;
   // console.log(inputMessage);
    getChat(inputMessage,"user");
   txtinputEl.value = "";
    toggleLoading(false);
   const ans = responseobj[inputMessage];
   if(ans){
      GetAnswer(ans)
      setTimeout(()=>{
       getChat(ans,"chatbot_message",600)
       toggleLoading(true);
      
      },600)
   }else{
      GetAnswer("Please enter right context");
      setTimeout(()=>{
         getChat("Please enter correct message")
         toggleLoading(true);
      },600);
   }

    
}



sendEl.addEventListener("click",renderMessage);


