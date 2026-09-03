let count = 0

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const display = document.getElementById("numClicks");

upbutton.addEventListener("click", () => {
    count++;
    updateDisplay();
});
downbutton.addEventListener("click", () => {
    count--;
    updateDisplay();
});

display.textContent = count;