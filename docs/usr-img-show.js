const usrInput = document.getElementById('usrImageIn');
const imgOut = document.getElementById('usrImageOut');

usrInput.addEventListener("change", () => {
    file = Event.target.files[0];
    console.log(fileList);
    const file = fileList[0];
    imgOut.src = URL.createObjectURL(file);

})