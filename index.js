const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
]

// selects elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay")

// choose winning color
let pickedColor = colors[0];

// update the display color
colorDisplay.textContent = pickedColor;

// set the colors of the squares
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function () {
        // get the color of the clicked square
        const clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        // compare that color to the pickedColor
        if (clickedColor === pickedColor) {
            alert("you win!!")
        } else {
            alert("you lost")
        }
    })
}