// helper function
const pickColor = () => {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

// generate random colors
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

// generate random color arrays
const generateRandomColors = (num) => {
    // make an array
    let output = []
    // add num random colors to array
    for (let i = 0; i < num; i++) {
        output.push(generateRandomColor())
    }
    // retun array
    return output
}

colors = generateRandomColors(6)

// selects elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay")
const title = document.querySelector("h1")

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
            message.textContent = "correct!"
            changeColors(pickedColor)
            title.style.backgroundColor = pickedColor
        } else {
            this.style.backgroundColor = "black"
            message.textContent = "you lost"
        }
    })
}

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}