const widthSlider = document.getElementById("widthSlider");
const picture = document.getElementById("resizableImg");



widthSlider.addEventListener("input", () => {
    picWidth = widthSlider.value
    picture.width = picWidth
})