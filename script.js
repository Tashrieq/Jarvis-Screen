const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";

window.onload = () => {
recognition.start();
};

recognition.onend = () => {
recognition.start();
};

recognition.onresult = (event)=>{

let text =
event.results[event.results.length-1][0]
.transcript.toLowerCase();

console.log(text);

if(text.includes("hey jarvis")){
startJarvis();
}

if(text.includes("play my after movie")){
playMovie();
}

};

function speak(words){

const speech =
new SpeechSynthesisUtterance(words);

speechSynthesis.speak(speech);

}

function startJarvis(){

document.getElementById("startup").style.display="none";

document.getElementById("loading").style.display="flex";

speak("Importing all preferences from home interface");

let progress = 0;

const bar =
document.querySelector(".bar");

const percent =
document.getElementById("percent");

const load = setInterval(()=>{

progress++;

bar.style.width =
progress + "%";

percent.innerHTML =
progress + "%";

if(progress >= 100){

clearInterval(load);

document.getElementById("loading")
.style.display="none";

document.getElementById("online")
.style.display="flex";

speak("How can I help");

}

},50);

}

function playMovie(){

speak("Yes sir");

document.getElementById("online")
.style.display="none";

document.getElementById("movieTitle")
.style.display="flex";

let title =
"Tashrieq's MD Movie";

let i = 0;

const type = setInterval(()=>{

document.getElementById("typing")
.innerHTML += title[i];

i++;

if(i >= title.length){

clearInterval(type);

setTimeout(()=>{

document.getElementById("movieTitle")
.style.display="none";

const movie =
document.getElementById("movie");

movie.style.display="block";

movie.play();

},3000);

}

},120);

}
