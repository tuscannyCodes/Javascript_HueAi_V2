 ///////////Speech API 
 
 const synth = window.speechSynthesis;
//get speak text

//SPEACH BOX 1---------- 
//voices array
let voices = [];
//fill voices array with voices
const getVoices = ()=>{
    voices = synth.getVoices();
   
};

getVoices();

//speak 

const speak = () => {
//check if speaking 
/*if(synth.speaking){ 
    console.error("already speaking...")
    return;
    }*/
const speakText = new SpeechSynthesisUtterance(mainParagraph.textContent)
speakText.volume = .3;

speakText.onend = e => {
console.log("done speaking...");
}
//speak error
speakText.onerror = e => {

    console.error("something went wrong")
}
// add voices 

speakText.voice = voices[7];


//set pitch and rate
speakText.rate = 1;
speakText.pitch = 1;

synth.speak(speakText);
console.log(voices)
}
//SPEACH BOX 1 END---------- 

//SPEACH BOX 2---------- 
let voices2 = [];
//fill voices array with voices
const getVoices2 = ()=>{
    voices2 = synth.getVoices();
    
};

getVoices2();

//speak 

const speak2 = () => {
//check if speaking 

const speakText2 = new SpeechSynthesisUtterance(hueQuestionBox.textContent)
speakText2.volume = .3;
speakText2.onend = e => {
console.log("done speaking...");
}//when NOT to use speak2 
if(hueQuestionBox.innerHTML == `Type "stop" and I'll stop singing. `){ 
    speakText2.volume = 0;
    }
if(reminderMode){
    speakText2.volume = 0;
}
//speak error
speakText2.onerror = e => {

    console.error("something went wrong")
}
// add voices 

speakText2.voice = voices[7];
console.log(voices[0])

//set pitch and rate
speakText2.rate = 1;
speakText2.pitch = 1;

synth.speak(speakText2);

}
 
 //VARIABLES
 //----------------------------------------------
 let searchQuery;
 let uName = false;
let searchMode = false ;
let q;

const dontGetIt =[ "Sorry, Im having trouble understanding you.", "I didnt quite get that.", "I dont understand.",
      "Sorry, I dont know what that means yet.", "???", "I dont get what you mean by that", "hmmmmm, I dont get it", "hu?"]

 const mainParagraph = document.getElementById("mainParagraph"); 
 
 const hueQuestionBox = document.getElementById("mainParagraph2"); 
 
 const inputBox = document.getElementById("mainInputBox"); 
 
 const mainButton = document.getElementById("mainButton"); 
 
 const body = document.getElementById("mainBody");
 
 const hamburger = document.querySelector(".hamburger");
 
 const theLines = document.getElementsByClassName("line")
 const navBackground = document.getElementById("navBackground")
 const navDiv = document.getElementById("navigation")
 //REMINDER VARIABLES START 
 let reminderMode = false;
 let reminderStr;
 let reminderResponse;
 let reminderCounter;
 //REMINDER VARIABLES END

 let counter = 0; //keeps track of conversation

 let navCounter = 0; // keeps track of if nav menu is open or closed. 
 
 let audio = [new Audio('imClosingMyEyes.mp3'),new Audio('puertoMate.mp3'),new Audio('hueReminderSound.mp3')] 
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
 
 let keyWords = ["","colors","goodbye","bye","how do you","ok",
 "cool","wow","meet you","old","hello","who ","where ","hi","hey",
 "your name","bored","boring"," your favorite color"," date","change",
 " day"," time","how are you","good","great","fantastic","yes","no",
 "my name"," me?","thanks","thank you","welcome","np","music","sing","song","stop","remind me to "," joke","what can you do","what do you do","change color"];
 
 //--------------------------------------------------
 //VARIABLES END------------------------------------
 
 
 //NAVIGATION FUNCTIONS ----------------------
 
 hamburger.addEventListener("click", () => {navBackground.classList.toggle("open");
 
 navCounter++;
 
 if (navCounter % 2 == 0 && uName) {
     mainParagraph.textContent = `Welcome back ${uName}`}
 
 
 else if (navCounter % 2 == 0) {
     mainParagraph.textContent = "Welcome back friend :D"}});

     

// if(navBackground.className != "open"){
    
//     for(let i = 0; i < theLines.length; i ++){
//         theLines[i].style.backgroundColor = "white"
    
//      }

// }
 
    
     
 
 /*navDiv.addEventListener("click", () => {navBackground.classList.toggle("open");});*/
 
 //navLinks.addEventListener("click", () => {navBackground.classList.toggle("open");});
 
 //NAVIGATION FUNCTIONS END----------------------
 
 //MAIN BUTTON FUNCTION----------

 const queryTerm = [] ;
 function fn1() {
     
    
    queryTerm.push(inputBox.value);
     clearInterval(timerId);
     hueQuestionBox.innerHTML = ``
 
 
 // this code bock is broken and will not run. need to figure out how to check through array
 
 // -------I DONT UNDERSTAND---------
 
 if(!keyWords.includes(inputBox.value) && !colors.includes(inputBox.value)){
   
    q= inputBox.value;
    
     mainParagraph.innerHTML = dontGetIt[Math.floor(Math.random()*dontGetIt.length)]+" "+ `Would you like me to search ${q}? Type "yes" or "no"`;
console.log(searchMode)
    searchMode = true;
   console.log(searchMode);
 
   
} 

//  THIS IS TO SEARCH THE QUERY

if( inputBox.value === "yes" && searchMode=== true && mainParagraph.innerHTML.includes("Type")) {
    
    mainParagraph.textContent = `Ok, I created a new tab with a search for ${queryTerm[queryTerm.length - 2]}`
    speak();
    function search()
   
    
{
    url ='http://www.google.com/search?q=' + queryTerm[queryTerm.length - 2];
    window.open(url,'_blank');
}
search();
    console.log(queryTerm[queryTerm.length - 2])
    console.log(searchMode)
    console.log(reminderMode)
    searchMode = false;
     // This empties the array
     queryTerm = [];
}
// -------I DONT UNDERSTAND END---------

//---------YOU SAID NOTHING---------
     if (inputBox.value.length === 0) {
         const userSaidNothing = ["Hmmm... You did not type anything.", "You forgot to say something"];
         mainParagraph.innerHTML = userSaidNothing[Math.floor(Math.random()*userSaidNothing.length)];
         inputBox.value = "";
     }
//---------SAID NOTHING END---------

 
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
     mainParagraph.innerHTML = "Vitamin C... Sharp "
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
     
    
 for(let i = 0; i < theLines.length; i ++){
    theLines[i].style.backgroundColor = "black"

 }
    navBackground.style.backgroundColor = "black";
    navBackground.style.color = "white";
     body.style.backgroundColor = "white";
     mainButton.style.backgroundColor = "whiteSmoke";
     inputBox.style.backgroundColor = "WhiteSmoke";
     mainParagraph.style.color = "black";
     hueQuestionBox.style.color = "black";
     mainParagraph.innerHTML = "Minimal";
    
   
     mainButton.style.color = "black";
     inputBox.value = "";
     counter++;

 }else {

    

    for(let i = 0; i < theLines.length; i ++){
        
    
     };
     
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
 
 if(inputBox.value.includes ("change color")){
    
    mainParagraph.innerHTML = "What color would you like me to be?"
    inputBox.value = "";
    counter++;
 }


 //-----------ALL COLOR CHANGES END--------------------
 
 
 //------------------SMALL TALK-------------------------
 

 if (inputBox.value.includes("hello")) {

    const formalGreeting = ["Hi there", "Hello",]
    mainParagraph.innerHTML = formalGreeting[Math.floor(Math.random()*formalGreeting.length)];
    counter++;
    inputBox.value = "";
    console.log(searchMode)
    
}

if (inputBox.value.includes("hi") || inputBox.value.includes("hey")) {
    const casualGreeting =[ "Hey there", "Hii", "Hey",
    "Hello", "Hi"]
   
   
    mainParagraph.innerHTML = casualGreeting[Math.floor(Math.random()*casualGreeting.length)];
    counter++;
    inputBox.value = "";
}

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

     if (inputBox.value.includes("what can you do")||inputBox.value.includes("what do you do") ) {
 
        mainParagraph.innerHTML = "I can change colors, set reminders, play music, tell jokes and be generally charming."
        inputBox.value = "";
        counter++;
    }

//------------------SMALL TALK END-------------------------


 // DATE RESPONSE
     if (inputBox.value.includes(" date") || inputBox.value.includes(" day")){
         mainParagraph.textContent = `Today is ` + days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()
         counter++;
         inputBox.value = "";
     }
 
 //TIME RESPONSE 
 // speech not working with time response 
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
   //TIME RESPONSE END
   // JOKE RESPONSE
   if(inputBox.value.includes(" joke")){

    const jokeList1 =[ "Have you heard about the new restaurant called Karma?"," Remember to take an extra pair of socks when you go golfing","What do you call someone with no body and no nose?",]
   
    const jokeList2 = ["There’s no menu... YOU GET WHAT YOU DESERVE!","In case you get a HOLE IN ONE!","Nobody knows."]
    mainParagraph.innerHTML = jokeList1[Math.floor(Math.random()*jokeList1.length)];

    inputBox.value = "";
    if(mainParagraph.innerHTML == jokeList1[0]){

        hueQuestionBox.innerHTML = jokeList2[0]
    }
    if(mainParagraph.innerHTML == jokeList1[1]){

        hueQuestionBox.innerHTML = jokeList2[1]
    }
    if(mainParagraph.innerHTML == jokeList1[2]){

        hueQuestionBox.innerHTML = jokeList2[2]
    }

   }

   
//JOKE RESPONSE END
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
 //------MOOD END----------
 // ----NAME INFORMATION------
   
 if (counter === 3) {
 
     hueQuestionBox.innerHTML = "So friend, what should I call you?";
     uName = inputBox.value;
 
 } 
 
 
 if (uName && counter === 3) {
     mainParagraph.style.fontSize = "20px";
     mainParagraph.innerHTML = `Hello ${uName}! Its nice to meet you... ${uName} is such a nice name.`;
     inputBox.style.backgroundColor = "white"
     inputBox.value = "";
     hueQuestionBox.innerHTML = "";
     counter++; //counter === 4
 
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
    hueQuestionBox.innerHTML = `Type a NUMBER and then "mins"`
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
    setTimeout(function(){hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + "."},numberValue * 60000)
    setTimeout(speak2, numberValue * 60000 + 10);
    reminderCounter = 0;
    inputBox.value = "";
    reminderMode = false;

}
//FOR HOURS
if(reminderCounter = 2 && inputBox.value.includes(" hrs")){
    mainParagraph.textContent= `Ok, I'll remind you in ${inputBox.value}`;
    let numberValue = parseInt(inputBox.value, 10);
    hueQuestionBox.innerHTML = ``
    reminderCounter = 0;
    setTimeout(function(){ hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + ".";//still working on this.

    console.log("reminder is here")
  
  

},numberValue * 3600000)
    inputBox.value = "";
}

// AUTOMATED RESPONSES 
// var inactivityTime = function () {
//     var time;
//     window.onload = resetTimer;
//     // DOM Events
//     document.onmousemove = resetTimer;
//     document.onkeydown = resetTimer;

//     function automatedResponse() {
//         hueQuestionBox.innerHTML = "Hey... are you still there?";
        
        
// setTimeout(speak2,2000)
//     }

//     function resetTimer() {
//         clearTimeout(time);
//         time = setTimeout(automatedResponse, 30000)
//         // 1000 milliseconds = 1 second
//     }
// };

// setTimeout(inactivityTime, 1000)

// not ready yet
speak();
setTimeout(speak2,2000)
    


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
   
  1. ***DONE***
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
 
 
 6. ***DONE***
 work on 'joke' response

   
 */


 
 
 
 
 
 
 
 
 



