// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// When stop button is clicked, the traffic light color would turn red. I need the button to recognize the stop light and turn it on. Then, I need the light to know to turn red.
document.getElementById(stopButton).addEventListener('click',  )

document.getElementById(stopLight).addEventListener('click', function(){
document.body.style.backgroundColor = "red";
});

// When slow button is clicked, the traffic light color would turn yellow

// When go button is clicked, the traffic light color would turn green

// Function to turn all lights off
function turnOff (){
    //turn off red - remove on class
    document.querySelector("#stopLight").classlist.remove("on");
    document.querySelector("#slowLight").classlist.remove("on");
    document.querySelector("#goLight").classlist.remove("on");
}

// CLick event - green light
document.querySelector("#goButton").addEventListener('click',function(){
    turnOff;
})
