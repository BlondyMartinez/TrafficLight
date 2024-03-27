//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let interval = 0;
let seconds = 0;

function increaseSeconds(){
    seconds++;
    
    ReactDOM.render(<Home numbers={formatSeconds(seconds)}/>, document.querySelector("#app"));
}

function formatSeconds(seconds) {
    seconds = seconds.toString();
    while (seconds.length < 6) seconds = "0" + seconds;
    return seconds.split("");
}

function startCounter(){
    interval = setInterval(increaseSeconds, 1000);
}


startCounter();