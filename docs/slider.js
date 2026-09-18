const slider1 = document.getElementById("love");
const display1 = document.getElementById("ratingDisplay");

slider.addEventListener("input", () => {
    display1.textContent = slider1.value;
    console.log(slider.value)
});