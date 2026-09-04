const slider = document.getElementById("love");
const display = document.getElementById("ratingDisplay");

slider.addEventListener("input" () => {
    display.textContent = slider.value;
});