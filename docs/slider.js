const slider1 = document.getElementById("love");
const display1 = document.getElementById("ratingDisplay");

slider1.addEventListener("input", () => {
    display1.textContent = slider1.value;
    alert(slider1.value);
});