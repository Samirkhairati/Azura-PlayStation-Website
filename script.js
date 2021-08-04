var deviceBoxImg = document.getElementById("DeviceBoxImg")
var deviceBoxTitle = document.getElementById("DeviceBoxTitle")
var deviceBoxText = document.getElementById("DeviceBoxText")
var deviceBoxButton = document.getElementById("DeviceBoxButton")
function deviceConsole(x) {
    deviceBoxImg.src = "assets/both.png"; 
    deviceBoxTitle.innerHTML = "AZURA CONSOLE";
} function deviceControl(x) {
    deviceBoxImg.src = "assets/control.png";  
    deviceBoxTitle.innerHTML = "CONTROLLER"; 
} function deviceHeadset(x) {
    deviceBoxImg.src = "assets/headset.png";   
    deviceBoxTitle.innerHTML = "HD CAMERA";
} function deviceCam(x) {
    deviceBoxImg.src = "assets/cam.png";  
    deviceBoxTitle.innerHTML = "WIRELESS HEADSET"; 
} function deviceHolo(x) {
    deviceBoxImg.src = "assets/hologram.png";  
    deviceBoxTitle.innerHTML = "HOLOGRAM"; 
} function deviceVr(x) {
    deviceBoxImg.src = "assets/vr.png";
    deviceBoxTitle.innerHTML = "VIRTUAL REALITY";   
}