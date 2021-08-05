// var backgroundCount = 1;
// for(var i=0;i<=1;i+=0.1){

// }
var c = 0;
while(c<=1){
    setTimeout(function() {
        c+=0.1;
        document.documentElement.style.setProperty('--h', String(c));  
    }, 100)
}
// function  move  () {
//     document.documentElement.style.setProperty('--h', height.value + 'px');  
//   } 
// function changeBackground1() {
//     setInterval(increaseOpacity, 10) {
        
//     }
//     document.getElementById('one').style.background = "url('wallpapers/"+String(backgroundCount)+".jpg')";
//     backgroundCount++;
//     if(backgroundCount==8){backgroundCount=1;}
// }

// setInterval(changeBackground1, 1000);



var deviceBoxImg = document.getElementById("DeviceBoxImg")
var deviceBoxTitle = document.getElementById("DeviceBoxTitle")
var deviceBoxText = document.getElementById("DeviceBoxText")
var deviceBoxButton = document.getElementById("DeviceBoxButton")
function deviceConsole(x) {
    deviceBoxImg.src = "images/assets/both.png"; 
    deviceBoxTitle.innerHTML = "AZURA CONSOLE";
    deviceBoxText.innerHTML = "Experience the all new generation of Futuristic Games with the highly developed technology, supports holographic gaming, Virtual Reality and  Streaming ";
    deviceBoxButton.style.visibility = "hidden";
} function deviceControl(x) {
    deviceBoxImg.src = "images/assets/control.png";  
    deviceBoxTitle.innerHTML = "CONTROLLER"; 
    deviceBoxText.innerHTML = "All new controller with adaptive triggers, Haptic response and cutting edge touchpad & screen for interactive gaming";
    deviceBoxButton.style.visibility = "hidden";
} function deviceCam(x) {
    deviceBoxImg.src = "images/assets/cam.png";  
    deviceBoxTitle.innerHTML = "HD CAMERA";
    deviceBoxText.innerHTML = "Record yourself in smooth, sharp, full-HD and use the new player face technology";
    deviceBoxButton.style.visibility = "visible";

} function deviceHeadset(x) {
    deviceBoxImg.src = "images/assets/headset.png";   
    deviceBoxTitle.innerHTML = "WIRELESS HEADSET";
    deviceBoxText.innerHTML = "Experience an Immaculate high tech lightweight headset with 3D audio for realistic sounds which brings you live in the game"; 
    deviceBoxButton.style.visibility = "hidden";
} function deviceHolo(x) {
    deviceBoxImg.src = "images/assets/hologram.png";  
    deviceBoxTitle.innerHTML = "HOLOGRAM"; 
    deviceBoxText.innerHTML = "A device that lets you bring characters and objects from games to life"; 
    deviceBoxButton.style.visibility = "visible";

} function deviceVr(x) {
    deviceBoxImg.src = "images/assets/vr.png";
    deviceBoxTitle.innerHTML = "VIRTUAL REALITY";   
    deviceBoxText.innerHTML = "Immerse yourself in incredible virtual reality games and experiences"; 
    deviceBoxButton.style.visibility = "hidden";
}


function changeControl(x){
    document.getElementById("controllerImg").src = "images/controller/"+String(x+1)+".png";
}