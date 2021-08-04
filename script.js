var deviceBoxImg = document.getElementById("DeviceBoxImg")
var deviceBoxTitle = document.getElementById("DeviceBoxTitle")
var deviceBoxText = document.getElementById("DeviceBoxText")
var deviceBoxButton = document.getElementById("DeviceBoxButton")
function deviceConsole(x) {
    deviceBoxImg.src = "images/assets/both.png"; 
    deviceBoxTitle.innerHTML = "AZURA CONSOLE";
} function deviceControl(x) {
    deviceBoxImg.src = "images/assets/control.png";  
    deviceBoxTitle.innerHTML = "CONTROLLER"; 
} function deviceCam(x) {
    deviceBoxImg.src = "images/assets/cam.png";  
    deviceBoxTitle.innerHTML = "HD CAMERA";
} function deviceHeadset(x) {
    deviceBoxImg.src = "images/assets/headset.png";   
    deviceBoxTitle.innerHTML = "WIRELESS HEADSET"; 
} function deviceHolo(x) {
    deviceBoxImg.src = "images/assets/hologram.png";  
    deviceBoxTitle.innerHTML = "HOLOGRAM"; 
} function deviceVr(x) {
    deviceBoxImg.src = "images/assets/vr.png";
    deviceBoxTitle.innerHTML = "VIRTUAL REALITY";   
}


function changeControl(x){
    document.getElementById("controllerImg").src = "images/controller/"+String(x+1)+".png";
}