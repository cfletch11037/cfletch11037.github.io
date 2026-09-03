let count = 0

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const display = document.getElementById("numClicks");

upButton.addEventListener("click", () => {
    count++;
    this.updateDisplay();
});
downButton.addEventListener("click", () => {
    count--;
    this.updateDisplay();
});

display.textContent = count;