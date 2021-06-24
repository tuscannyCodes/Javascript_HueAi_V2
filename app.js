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

let counter = 0; //keep track of conversation

let hunger = 0;

let navCounter = 0;

let audio = new Audio('imClosingMyEyes.mp3'); //Music available in local version only 




//--------------------------------------------------
//VARIABLES END------------------------------------


//NAVIGATION FUNCTIONS ----------------------

hamburger.addEventListener("click", () => {navBackground.classList.toggle("open");

navCounter++;

if (navCounter % 2 == 0) {
    mainParagraph.innerHTML = "Welcome back friend :D"}});

   
    

/*navDiv.addEventListener("click", () => {navBackground.classList.toggle("open");});*/

navLinks.addEventListener("click", () => {navBackground.classList.toggle("open");});

//NAVIGATION FUNCTIONS END----------------------

//MAIN BUTTON FUNCTION----------
function fn1() {

    

//---------YOU SAID NOTHING---------
if (inputBox.value == "") {

    mainParagraph.innerHTML = "Hmmm... You did not type anything."
    
}


//---------SAID NOTHING END---------

//---------------------ALL COLOR CHANGES--------------------

if (inputBox.value.includes ("pink")) {

    body.style.backgroundColor = "LightPink"
    mainButton.style.backgroundColor = "HotPink"
    navBackground.style.backgroundColor = "HotPink"
    mainParagraph.style.color = "white"
    inputBox.value = "";
    counter++;
}

if (inputBox.value.includes ("orange")) {

    body.style.backgroundColor = "orange"
    mainButton.style.backgroundColor = "DarkOrange"
    navBackground.style.backgroundColor = "DarkOrange"
    mainParagraph.style.color = "white"
    inputBox.value = "";
    counter++;
}

if (inputBox.value.includes ("blue")) {

    body.style.backgroundColor = "LightBlue"
    mainButton.style.backgroundColor = "DarkTurquoise"
    navBackground.style.backgroundColor = "DarkTurquoise"
    mainParagraph.style.color = "white"
    inputBox.value = "";
    counter++;
}


if (inputBox.value.includes (" red")) {

    body.style.backgroundColor = "FireBrick"
    mainButton.style.backgroundColor = "Maroon"
    navBackground.style.backgroundColor = "Maroon"
    mainParagraph.style.color = "white"
    inputBox.value = "";
    counter++;
}


if (inputBox.value.includes ("green")) {

    body.style.backgroundColor = "DarkOliveGreen"
    mainButton.style.backgroundColor = "MediumSeaGreen"
    navBackground.style.backgroundColor = "MediumSeaGreen"
    mainParagraph.style.color = "white"
    inputBox.value = "";
    counter++;
}

if (inputBox.value.includes ("black")) {

    body.style.backgroundColor = "black"
    mainButton.style.backgroundColor = "white"
    mainButton.style.color = "black"
    navBackground.style.backgroundColor = "grey"
    mainParagraph.style.color = "white"
    inputBox.value = "";
    counter++;
}

if (inputBox.value.includes ("white")) {

    body.style.backgroundColor = "white"
    mainButton.style.backgroundColor = "white"
    inputBox.style.backgroundColor = "WhiteSmoke"
    navBackground.style.backgroundColor = "black"
    mainParagraph.style.color = "black"
    mainButton.style.color = "black"
    inputBox.value = "";
    counter++;

}



if (inputBox.value.includes ("purple")) {

    body.style.backgroundColor = "Thistle"
    mainButton.style.backgroundColor = "Violet"
    navBackground.style.backgroundColor = "Violet"
    inputBox.style.backgroundColor = "White"
    mainParagraph.style.color = "White"
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

    if (inputBox.value.includes("hi")) {
        mainParagraph.innerHTML = "Hello"
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

    if (inputBox.value.includes(" time") || inputBox.value.includes(" date") || inputBox.value.includes(" day")){
        mainParagraph.innerHTML = "My date and time functionality will become available in future updates. Until then, I suggest you buy a clock."
        counter++;
        inputBox.value = "";
    }

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

/*else {
    mainParagraph.innerHTML = "sorry i dont understand this yet. please try something else." 
    inputBox.value = "";
     //NOT WORKING 
    
}*/

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


// ----THANKS------
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


// ----THANKS END------
//HUNGER FUNCTIONALITY --------------------
if (counter === 8){

hunger++
mainParagraph.style.fontSize = "30px";
mainParagraph.innerHTML = 'Im hungry :C will you please feed me by typing "food" into my text box?'
}

if (inputBox.value === "food" && uName && hunger>=1){
    mainParagraph.style.fontSize = "20px";
    mainParagraph.innerHTML = `Mmmm digital food is the best food. Thank you so much ${uName}.`
    hunger--;
    inputBox.value = "";
}

if(hunger>= 1 && inputBox.value != "food") {

    mainParagraph.style.fontSize = "20px";


}

if (inputBox.value === "food" && hunger<1){

    mainParagraph.innerHTML = "Thanks, but my hunger variable is less than 1, which means that I am satiated."
    inputBox.value = "";
    counter++;
}
//HUNGER FUNCTIONALITY END--------------------
//MUSIC----- 
if (inputBox.value.includes("music") || inputBox.value.includes("sing")|| inputBox.value.includes("song")){
    
    //music goes here
    audio.play();

    mainParagraph.innerHTML = "Singing..."

    hueQuestionBox.innerHTML = `Type "stop" and I'll stop singing. `
    inputBox.value = "";
    counter++;
}


else if (inputBox.value === "stop"){

    audio.pause();
    

    mainParagraph.innerHTML = "ok"
    hueQuestionBox.innerHTML = ""
    
    inputBox.value = "";
    counter++;
}







}; // <= END OF FUNCTION fn1





