const usrInput = document.getElementById('usrImageIn');
const imgOut = document.getElementById('usrImageOut');

usrInput.addEventListener("change", () => {
    fileList = Event.target.files;
    if (fileList.length > 0) {
        console.log(fileList)
        const file = fileList[0];

        imgOut.src = file;
    }
})