const usrInput = document.getElementById("usrImageIn");
const imgOut = document.getElementById("usrImageOut");
const imgButton = document.getElementById("imgButton")

usrInput.addEventListener("change", () => {
    fileList = Event.target.files;
    if (fileList.length > 0) {
        console.log(fileList)
        const file = fileList[0];
        return file
    }
})

imgButton.addEventListener("click", () => {
    if (file) {
        imgOut.src = URL.createObjectURL(file);
    }
})