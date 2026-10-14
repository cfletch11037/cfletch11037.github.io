const widthSlider = document.getElementById("widthSlider");
const picture = document.getElementById("resizableImg");

widthSlider.addEventListener("input", () => {
    picture.width = widthSlider.value;
})