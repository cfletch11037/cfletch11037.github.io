const usrInput = getElementById('usrImageIn');
const imgOut = getElementById('usrImageOut');

usrInput.addEventListener("change", () => {
    fileList = Event.target.files;
    
    if (fileList.length > 0) {
        const file = fileList[0];

        imgOut.src = file;
    }
})