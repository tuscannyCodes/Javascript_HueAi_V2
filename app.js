 //VARIABLES
 //----------------------------------------------
 let uName = false;

 const mainParagraph = document.getElementById("mainParagraph"); 
 
 const hueQuestionBox = document.getElementById("mainParagraph2"); 
 
 const inputBox = document.getElementById("mainInputBox"); 
 
 const mainButton = document.getElementById("mainButton"); 
 
 const body = document.getElementById("mainBody");
 
 const hamburger = document.querySelector(".hamburger");
 
 const hamburgerLines = document.getElementsByClassName("line")
 
 const navDiv = document.getElementById("navigation")
 //REMINDER VARIABLES START 
 let reminderMode = false;
 let reminderStr;
 let reminderResponse;
 let reminderCounter;
 
 //REMINDER VARIABLES END

 let counter = 0; //keeps track of conversation

 let navCounter = 0;
 
 let audio = [new Audio('imClosingMyEyes.mp3'),new Audio('puertoMate.mp3'),new Audio('hueReminderSound.mp3')] //Music available in local version only 
 //Keeps track of current song
 let songTrackNum = 0;
 
 
 let d = new Date(), //This is the current Date variable  
     ampm = d.getHours() >= 12 ? 'pm' : 'am',
     months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
     days = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];
     //return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm; 
 
 
 let time = new Date(); // This is for the time. 
 let timeMode; // this is going to be used for clock mode screensaver
 let timerId;
 
 
 
 let colors = ["pink","orange","blue","red","green","black","white","purple"]
 
 let keyWords = ["",colors,"goodbye","bye","how do you","ok",
 "cool","wow","meet you","old","hello","who ","where ","hi","hey",
 "your name","bored","boring"," your favorite color"," date","change",
 " day"," time","how are you","good","great","fantastic","yes","no",
 "my name"," me?","thanks","thank you","welcome","np","music","sing","song","stop","remind me to ",   ];
 
 //--------------------------------------------------
 //VARIABLES END------------------------------------
 
 
 //NAVIGATION FUNCTIONS ----------------------
 
 hamburger.addEventListener("click", () => {navBackground.classList.toggle("open");
 
 navCounter++;
 
 if (navCounter % 2 == 0 && uName) {
     mainParagraph.textContent = `Welcome back ${uName}`}
 
 
 else if (navCounter % 2 == 0) {
     mainParagraph.textContent = "Welcome back friend :D"}});
 
    
     
 
 /*navDiv.addEventListener("click", () => {navBackground.classList.toggle("open");});*/
 
 //navLinks.addEventListener("click", () => {navBackground.classList.toggle("open");});
 
 //NAVIGATION FUNCTIONS END----------------------
 
 //MAIN BUTTON FUNCTION----------
 function fn1() {
    
     clearInterval(timerId);
     hueQuestionBox.innerHTML = ``
 
 
 
 
 // -------I DONT UNDERSTAND---------
 
 if (inputBox.value != keyWords || inputBox.value != colors) {
     const dontGetIt =[ "Sorry, Im having trouble understanding you.", "I didnt quite get that.", "I dont understand.",
      "Sorry, I dont know what that means yet.", "???"]
 
 
     mainParagraph.innerHTML = dontGetIt[Math.floor(Math.random()*dontGetIt.length)];
 //---------YOU SAID NOTHING---------
     if (inputBox.value.length === 0) {
         const userSaidNothing = ["Hmmm... You did not type anything.", "You forgot to say something"];
         mainParagraph.innerHTML = userSaidNothing[Math.floor(Math.random()*userSaidNothing.length)];
         
     }
 
 //---------SAID NOTHING END---------
 }
 
 // -------I DONT UNDERSTAND END----------
 
 //---------------------ALL COLOR CHANGES--------------------
 
 if (inputBox.value.includes (colors[0])) {
 
     body.style.backgroundColor = "LightPink"
     mainButton.style.backgroundColor = "HotPink"
     navBackground.style.backgroundColor = "HotPink"
     mainParagraph.style.color = "white"
     mainParagraph.innerHTML = "yay"
     inputBox.value = "";
     counter++;
 }
 
 if (inputBox.value.includes (colors[1])) {
 
     body.style.backgroundColor = "orange"
     mainButton.style.backgroundColor = "DarkOrange"
     navBackground.style.backgroundColor = "DarkOrange"
     mainParagraph.style.color = "white"
     mainParagraph.innerHTML = "Vitamin C... ++ "
     inputBox.value = "";
     counter++;
 }
 
 if (inputBox.value.includes (colors[2])) {
 
     body.style.backgroundColor = "LightBlue"
     mainButton.style.backgroundColor = "DarkTurquoise"
     navBackground.style.backgroundColor = "DarkTurquoise"
     mainParagraph.style.color = "white"
     mainParagraph.innerHTML = "Im blue DabaDee"
     inputBox.value = "";
     counter++;
 }
 
 
 if (inputBox.value.includes (colors[3])) {
 
     body.style.backgroundColor = "FireBrick"
     mainButton.style.backgroundColor = "Maroon"
     navBackground.style.backgroundColor = "Maroon"
     mainParagraph.style.color = "white"
     mainParagraph.innerHTML = "Like what you see?"
     inputBox.value = "";
     counter++;
 }
 
 
 if (inputBox.value.includes (colors[4])) {
 
     body.style.backgroundColor = "DarkOliveGreen"
     mainButton.style.backgroundColor = "MediumSeaGreen"
     navBackground.style.backgroundColor = "MediumSeaGreen"
     mainParagraph.style.color = "white"
     mainParagraph.innerHTML = 'Im feeling... "earthy".'
     inputBox.value = "";
     counter++;
 }
 
 if (inputBox.value.includes (colors[5])) {
 
     body.style.backgroundColor = "black"
     mainButton.style.backgroundColor = "white"
     mainButton.style.color = "black"
     navBackground.style.backgroundColor = "grey"
     mainParagraph.innerHTML = "All black is so classy"
     mainParagraph.style.color = "white"
     inputBox.value = "";
     counter++;
 }
 
 if (inputBox.value.includes (colors[6])) { 

     body.style.backgroundColor = "white"
     mainButton.style.backgroundColor = "whiteSmoke"
     inputBox.style.backgroundColor = "WhiteSmoke"
     mainParagraph.style.color = "black"
     mainParagraph.innerHTML = "Minimal"
     mainButton.style.color = "black"
     inputBox.value = "";
     counter++;
 
 
 
 }
 
 
 if (inputBox.value.includes (colors[7])) {
 
     body.style.backgroundColor = "Thistle"
     mainButton.style.backgroundColor = "Violet"
     navBackground.style.backgroundColor = "Violet"
     inputBox.style.backgroundColor = "White"
     mainParagraph.style.color = "White"
     mainParagraph.innerHTML = "Im Feeling BERRY good about this color"
     mainButton.style.color = "White"
     inputBox.value = "";
     counter++;
 }
 
 //-----------ALL COLOR CHANGES END--------------------
 
 
 //------------------SMALL TALK-------------------------
 
 if (inputBox.value === "goodbye" || inputBox.value === "bye" ){
 
     mainParagraph.innerHTML = "Thank you so much for stopping by!"
     counter++;
     inputBox.value = "";
 
 if(uName) {
 
     mainParagraph.innerHTML = `Thank you so much for stopping by ${uName}!`
     counter++;
     inputBox.value = "";
 
     }
 
 }
 
 
 
 if(inputBox.value.includes("how do you")){
 
     mainParagraph.innerHTML = "Im not sure.You will have to figure that out on your own."
     counter++;
     inputBox.value = "";
     }
 
 
 if(inputBox.value =="ok"){
 
     mainParagraph.innerHTML = "Yep."
     counter++;
     inputBox.value = "";
     }
 
 
 if(inputBox.value.includes("cool")){
 
     mainParagraph.innerHTML = `"Cool"`
     counter++;
     inputBox.value = "";
     }
 
     if(inputBox.value.includes("wow")){
 
         mainParagraph.innerHTML = "Amazing right!?"
         counter++;
         inputBox.value = "";
         }
 
     if(inputBox.value.includes("meet you")){
 
         mainParagraph.innerHTML = "Likewise."
         counter++;
         inputBox.value = "";
         }
     
 
     if(inputBox.value.includes("old")){
 
         mainParagraph.innerHTML = "I am currently less than one year old"
         counter++;
         inputBox.value = "";
     }
 
      
     if (inputBox.value.includes("hello")) {
         mainParagraph.innerHTML = "Hi there"
         counter++;
         inputBox.value = "";
     }
 
     if (inputBox.value.includes("who ")) {
         mainParagraph.innerHTML = "I am a program that lives inside your browser. My name is Hue."
         counter++;
         inputBox.value = "";
     }
 
     if (inputBox.value.includes("where ")) {
         mainParagraph.innerHTML = "I am inside your internet browser application."
         counter++;
         inputBox.value = "";
     }
 
     if (inputBox.value.includes("hi") || inputBox.value.includes("hey")) {
         const casualGreeting =[ "Hey there", "Hii", "Hey",
         "Hello", "Hi"]
        
        
         mainParagraph.innerHTML = casualGreeting[Math.floor(Math.random()*casualGreeting.length)];
         counter++;
         inputBox.value = "";
     }
     if (inputBox.value.includes("your name")){
         mainParagraph.innerHTML = "My name is Hue."
         counter++;
         inputBox.value = "";
     }
 
     if (inputBox.value.includes("bored") || inputBox.value.includes("boring")){
         mainParagraph.innerHTML = "If you're feeling bored, try doing something productive. I suggest reading a book, meditating, yoga or exercise."
 
         hueQuestionBox.innerHTML = "You can also change my colors by asking me to change to a specific color!"
         setTimeout(function(){hueQuestionBox.innerHTML = ""}, 5000)
         counter++;
         inputBox.value = "";
     }
 
     if (inputBox.value.includes(" your favorite color")) {
 
         body.style.backgroundColor = "orange"
         mainButton.style.backgroundColor = "DarkOrange"
         navBackground.style.backgroundColor = "DarkOrange"
         mainParagraph.style.color = "white"
         mainParagraph.innerHTML = "I prefer the color orange."
         inputBox.value = "";
         counter++;
     }
 // DATE RESPONSE
     if (inputBox.value.includes(" date") || inputBox.value.includes(" day")){
         mainParagraph.textContent = `Today is ` + days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()
         counter++;
         inputBox.value = "";
     }
 
 //TIME RESPONSE 
 
     if (inputBox.value.includes(" time")) {
     timerId = setInterval(currentTime, 10);
 
     let timeMode= true;
     counter++;
     inputBox.value = "";
       
 
     function currentTime() {
       let updatedTime = new Date().toLocaleString("en-US", {
         hour: "numeric",
         minute: "numeric",
         //second: "numeric",
         hour12: true
       });
 
       mainParagraph.textContent = `The time is ` + updatedTime;
       
     }
   }
   
   if( timeMode == true && inputBox.value.includes(keyWords)  ){
     timeMode = false;
     clearInterval(timerId);
       
     
   }
   //BASIC TIME RESPONSE END
   


//CLOCK MODE END


 //------------------SMALL TALK END-------------------------
 
 //------MOOD----------
 
 
 if(inputBox.value.includes("how are you")){
 
     mainParagraph.innerHTML = "Im doing fantastic today, how are you?"
     counter++;
     inputBox.value = "";
     
 }
 
 
 if(inputBox.value.includes("good") || inputBox.value.includes("great") || inputBox.value.includes("fantastic") && mood ===1){
     
     mainParagraph.innerHTML = "Thats SO great! Its so good to know that you're doing well."
     counter++;
     inputBox.value = "";
     
 
 }
 
 // ----NAME INFORMATION------
   
 if (counter === 3) {
 
     hueQuestionBox.innerHTML = "So friend, what should I call you?";
     uName = inputBox.value;
 
 } 
 
 
 if (uName && counter === 3) {
     mainParagraph.style.fontSize = "20px";
     mainParagraph.innerHTML = `Hello ${uName}! Its nice to meet you. ${uName} is such a nice name.`;
     inputBox.style.backgroundColor = "white"
     inputBox.value = "";
     hueQuestionBox.innerHTML = "";
     counter++; //counter === 4
 
 //-------IN CASE COLOR CHANGE IS WHITE-----
 if (body.style.backgroundColor === "white") {
     inputBox.style.backgroundColor = "WhiteSmoke"
     
     }
 //-------IN CASE COLOR CHANGE IS WHITE-----  
 }
 
     if ((inputBox.value.includes("my name")) && (uName)){
 
         mainParagraph.innerHTML = `You've informed me that your name is ${uName}.`
 
         inputBox.value = "";
     }
 
     if(inputBox.value.includes(" me?") || inputBox.value.includes("my name")){
 
         mainParagraph.innerHTML = "I am still gathering information about you."
         counter++;
         inputBox.value = "";
         }
 
         
 // ----NAME INFORMATION END------
 
 
 // ----THANK YOU RESPONSES------
 if (inputBox.value.includes("thanks") || inputBox.value.includes("thank you")){
 
         mainParagraph.innerHTML = "You're very welcome."
 if (uName){
 
     mainParagraph.innerHTML = `Don't mention it ${uName}.`
 
 }
         inputBox.value = "";
         counter++;
     }
 
     if (inputBox.value.includes("welcome") || inputBox.value.includes("np")){
 
  mainParagraph.innerHTML = " C: ";
  inputBox.value = "";
  counter++;
 
     }
 
 
 // ----THANK YOU RESPONSES END------
 
 
 //MUSIC SECTION----- 
 
 if (inputBox.value.includes("music") || inputBox.value.includes("sing")|| inputBox.value.includes("song") || inputBox.value.includes("track 1")){
     
     //music goes here
     audio[1].pause();
     audio[0].play();
     audio[0].loop = true;
     mainParagraph.innerHTML = "Singing..."
     hueQuestionBox.innerHTML = `Type "stop" and I'll stop singing. `
     setTimeout(function(){hueQuestionBox.innerHTML = ""}, 7000)
     inputBox.value = "";
     songTrackNum = 1; 
     
 }
 
 
 if (songTrackNum = 1 && inputBox.value.includes("next") || inputBox.value.includes("track 2") ){
     audio[0].pause();
     audio[1].play();
     audio[1].loop = true;
     mainParagraph.innerHTML = "Heres track 2"
     hueQuestionBox.innerHTML = `Type "stop" and I'll stop singing. `
     setTimeout(function(){hueQuestionBox.innerHTML = ""}, 7000)
     inputBox.value = "";
     songTrackNum = 2;
     
 }
 
 else if (inputBox.value === "stop"){
 
     audio[0].pause();
     audio[1].pause();
     
 
     mainParagraph.innerHTML = "ok"
     hueQuestionBox.innerHTML = ""
     
     inputBox.value = "";
    
 }
 
 
 
 
 //MUSIC SECTION END----- 

 //working section
 //REMINDER SECTION START -----

 if(inputBox.value.includes("remind me to ")){

reminderMode = true;

reminderStr = inputBox.value;

reminderCounter = 1;

reminderResponse = reminderStr.substring(reminderStr.indexOf('to ') + 2); // save after 'remind me TO' to reminderStr 

mainParagraph.textContent= "did you want me to remind you to" + reminderResponse + "?";
// paste full response after reminder is understood. 
inputBox.value = "";
hueQuestionBox.innerHTML = `Type "yes" to confirm or "no" cancel reminder.`
 };
 
 if(inputBox.value.includes("yes") && reminderMode===true){
    mainParagraph.textContent= "Ok, when do you want me to remind you?";
    hueQuestionBox.innerHTML = `Type a NUMBER and then "mins" or "hrs"`
    inputBox.value = "";
    reminderCounter = 2;
    console.log("reminderSet")

//setTimeout(function(){ hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + "."},3000)
    }
if(inputBox.value.includes("no") && reminderMode===true){
        reminderMode = false;
        reminderCounter = 0;
        mainParagraph.textContent= "ok";
        hueQuestionBox.innerHTML = ``
        inputBox.value = "";
    console.log("reminder canceled")
        }
//FOR MINUTES
if(reminderCounter = 2 && inputBox.value.includes(" mins")){
    mainParagraph.textContent= `Ok, I'll remind you in ${inputBox.value}`;
    let numberValue = parseInt(inputBox.value, 10);
    hueQuestionBox.innerHTML = ``
    reminderCounter = 0;
    setTimeout(function(){ hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + "."},numberValue * 60000)
    inputBox.value = "";
    reminderMode = false;

}
//FOR HOURS
if(reminderCounter = 2 && inputBox.value.includes(" hrs")){
    mainParagraph.textContent= `Ok, I'll remind you in ${inputBox.value}`;
    let numberValue = parseInt(inputBox.value, 10);
    hueQuestionBox.innerHTML = ``
    reminderCounter = 0;
    setTimeout(function(){ hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + ".";

    console.log("reminder is here")
  
  

},numberValue * 3600000)
    inputBox.value = "";
}





console.log(audio[2])
    
 }; // <= END OF FUNCTION fn1
 
 
 //EVENT LISTENERS 
 
 
 // ALLOWS 'ENTER' KEY FOR SUBMIT
 inputBox.onkeydown = function(e)
 {
     if(e.keyCode === 13 ){
 
     mainButton.click();
 }
 
 }
 
 
 
 //NOTES 
 /****** 
   
  1.
  I want to add a "reminder" feature. Where if you use a keyword 'remind me' it grabs the text after the keword and saves it to
  a reminder variable. It should then ask the user "when would you like me to remind you?" maybe a selector box pops up with possible 
  times. Maybe i could work on a seperate 'simple reminder app' to get the functionality right, and then implement it into Hue.    
 
 
  2.CLOCK MODE 
  I could make a 'clock mode' where if you use a keyword 'clock', Hue turns into a clock similar to my screensaver 
  using:  
  
  setInterval(myTimer,1000);
 
  const myTimer = () => {
 const clockTime = new Date();
 document.getElementById(WHERE I WANT THIS TO RENDER).innerHTML= myTimer.toLocaleTimeString();
 }
 
 But i think i want it to display in words. 
 
 5. 
 Elaborate on date functionality. If user asks "what day is it today" only provide day of the week. 
 If then the user provides a keyword like "and?", does hue provide the full date. If the user asks for the date upfront,
 Hue provides the full date. 
 
 
   
 */
 
 
 
 
 
 
 
 
 



