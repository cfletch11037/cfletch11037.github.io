let totCount = 0;
let netCount = 0;

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const netDisplay = document.getElementById("netClicks");
const totDisplay = document.getElementById("numClicks")

upButton.addEventListener("click", () => {
    totCount++;
    netCount++;
    updateDisplay();
});
downButton.addEventListener("click", () => {
    if (netCount > 0) {
        netCount--;
    }
    totCount++;
    updateDisplay();
});

function updateDisplay() {
    netDisplay.textContent = netCount;
    totDisplay.textContent = totCount;
};