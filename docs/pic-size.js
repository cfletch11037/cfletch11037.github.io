const widthSlider = document.getElementById("widthSlider");
const picture = document.getElementById("resizableImg");



widthSlider.addEventListener("input", () => {
    percent = String(widthSlider.value) + "%"
    picture.width = percent
})