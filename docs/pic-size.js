widthSlider = document.getElementById("widthSlider");
picture = document.getElementById("resizableImg");

widthSlider.addEventListener("input", () => {
    picture.width = widthSlider.value;
})