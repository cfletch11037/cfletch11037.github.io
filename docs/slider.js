const slider = document.getElementById("love");
const display = document.getElementById("ratingDisplay");

slider.addEventListener("change", () => {
    display.textContent = slider.value;
});