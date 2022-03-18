//program 4
//farris kabalaoui 
//11/07/2021

// Declare the variables you want here
var numSquares = 6;
var square = document.querySelectorAll(".square");
var colors = createRandomColors(numSquares);
var chosenColor = chooseColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var hardButton = document.querySelector("#hardButton");
var easyButton = document.querySelector("#easyButton");
var resetButton = document.querySelector("#reset");

//not used 
//  This calls the init function when the page first loads
init()
resetButton.addEventListener("click", function () {
    reset()
})
hardButton.addEventListener("click", function () {
    hard()
})
easyButton.addEventListener("click", function () {
    easy()

})

//  Init is just anything you want to have happen when the page loads
function init() {
    // Add your setup code/functions here
    hard()
    easy()
    reset()

}

// I STRONGLY suggest you wrap all your remaining code in functions
// In fact you probably won't get the app working if you don't

//this is the default display, show 6 squars and on hard mode
//addEventListener("click", function ()
//for hard button display 6 squares
function hard() {
    hardButton.addEventListener("click", function () {
        easyButton.classList.remove("modeSelected");
        hardButton.classList.add("modeSelected");
        numSquares = 6;
        colors = createRandomColors(numSquares);
        chosenColor = chooseColor();
        colorDisplay.textContent = chosenColor;
        for (var i = 0; i < square.length; i++) {
            square[i].style.background = colors[i];
            square[i].style.display = "block";
        }
    });
    //on the easy button click display 3 squares
}
function easy() {
    easyButton.addEventListener("click", function () {
        hardButton.classList.remove("modeSelected");
        easyButton.classList.add("modeSelected");
        numSquares = 3;
        colors = createRandomColors(numSquares);
        chosenColor = chooseColor();
        colorDisplay.textContent = chosenColor;
        for (var i = 0; i < square.length; i++) {
            if (colors[i]) {
                square[i].style.background = colors[i];
            } else {
                square[i].style.display = "none";
            }
        }
    });
}
//the reset button 
//on click listener 
function reset() {
    resetButton.addEventListener("click", function () {
        // when reset change all colors to new colors
        //use function that makes random colors
        colors = createRandomColors(numSquares);
        //choose a random color 
        chosenColor = chooseColor();
        // change colorDisplay to match chosen color
        colorDisplay.textContent = chosenColor;
        this.textContent = "New Color";
        messageDisplay.textContent = "";
        //change colors of squares
        for (var i = 0; i < square.length; i++) {
            square[i].style.background = colors[i];
        }
        h1.style.background = "steelblue";
    })


    colorDisplay.textContent = chosenColor;

    for (var i = 0; i < square.length; i++) {
        //a initial colors, add to square
        square[i].style.background = colors[i];
        //make an event listener for square on click
        square[i].addEventListener("click", function () {
            //grab color of chosen square
            var colorClicked = this.style.background;
            //compare color to chosenColor
            if (colorClicked === chosenColor) {
                //if correct message display changes to "thats it!"
                //not sure what text you wanted to be displayed..
                resetButton.textContent = "Play Again?";
                messageDisplay.textContent = "Thats it!";
                switchColors(colorClicked);
                //titles bar changes to correct color
                h1.style.background = colorClicked;
            } else {
                //use default css color code
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}
//used functions
//returns a random color
// pick a red, green, and blue random color 
function randomColor() {
    //pick a random blue,green,red color
    //use .random 
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
// All functions 
function switchColors(color) {
    //loop 
    // match colors
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = color;
    }

}
function chooseColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
//make random colors
function createRandomColors(num) {
    var array = []
    // add colors to array
    // push the random colors
    for (var i = 0; i < num; i++) {
        array.push(randomColor())

    }
    //return the array
    return array;
}

