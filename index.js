
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

colors = generateRandomColors(9)

let numSquares = 3;

// selects elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay")
const title = document.querySelector("h1")
const resetButton = document.getElementById("resetButton")
const easyButton = document.getElementById("easyButton")
const hardButton = document.getElementById("hardButton")
const superHardButton = document.getElementById("superHardButton")

// choose winning color
// let colors = generateRandomColors(numSquares)
let pickedColor = colors[0];

// update the display color
colorDisplay.textContent = pickedColor;

// easy button event listener
easyButton.addEventListener("click", () => {
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    superHardButton.classList.remove("selected")
    numSquares = 3;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    console.log(squares)
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
})

// hard button event listener
hardButton.addEventListener("click", () => {
    hardButton.classList.add("selected")
    easyButton.classList.remove("selected")
    superHardButton.classList.remove("selected")
    numSquares = 6;
    let hardColours = generateRandomColors(numSquares)
    console.log(colors)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    console.log(squares)
    for (let i = 0; i < squares.length; i++) {
        // squares[i].style.backgroundColor = colors[i]
        // squares[i].style.display = "block"
        if (hardColours[i]) {
            squares[i].style.backgroundColor = hardColours[i]
        } else {
            squares[i].style.display = "none"
        }
    }
})

// superHard button event listner
superHardButton.addEventListener("click", () => {
    hardButton.classList.remove("selected")
    easyButton.classList.remove("selected")
    superHardButton.classList.add("selected")
    numSquares = 9;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    console.log(squares)
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = "block"
    }
})

resetButton.addEventListener("click", () => {
    colors = generateRandomColors(6)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    title.backgroundColor = 'black'
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
})

// set the colors of the squares
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // add click listeners
    squares[i].addEventListener("click", () => {
        // get the color of the clicked square
        const clickedColor = squares[i].style.backgroundColor;
        console.log(clickedColor);
        // compare that color to the pickedColor
        if (clickedColor === pickedColor) {
            message.textContent = "correct!"
            changeColors(pickedColor)
            title.style.backgroundColor = pickedColor
        } else {
            squares[i].style.backgroundColor = "black"
            message.textContent = "you lost"
        }
    })
}

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}