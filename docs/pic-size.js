const widthSlider = document.getElementById("widthSlider");
const picture = document.getElementById("resizableImg");

function getSliderPercentage() {
    const percentage = (widthSlider.value / widthSlider.max) * 100;
}

widthSlider.addEventListener("input", () => {
    picture.width = percentage;
})