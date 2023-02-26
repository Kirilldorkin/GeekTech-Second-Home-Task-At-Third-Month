const body = document.querySelector("body");

// Buttons
const redBtn = document.querySelector(".red-btn");
const yellowBtn = document.querySelector(".yellow-btn");
const greenBtn = document.querySelector(".green-btn");
const resetBtn = document.querySelector(".reset-btn");

redBtn.addEventListener("click", () => {
    setTimeout(() => {
        body.style.backgroundColor = "red";
    }, 2000)
    console.log("red");
})

yellowBtn.addEventListener("click", () => {
    setTimeout(() => {
        body.style.backgroundColor = "yellow";
    }, 2000)
    console.log("yellow");
})

greenBtn.addEventListener("click", () => {
    setTimeout(() => {
        body.style.backgroundColor = "green";
    }, 2000)
    console.log("green");
})

resetBtn.addEventListener("click", () => {
    setTimeout(() => {
        body.style.backgroundColor = "white";
    }, 2000)
    console.log("reset");
})
