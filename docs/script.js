let count = 0

const button = document.getElementById("countButton");
const display = document.getElementById("numClicks");

button.addEventListener("click", () => {
    count++;
    display.textContent = count;
});