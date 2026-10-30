let count = 0;

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const display = document.getElementById("numClicks");

upButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});
downButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

function updateDisplay() {
    display.textContent = count;
};