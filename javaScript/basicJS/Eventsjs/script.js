function On() {
    document.getElementById("bulb").style.backgroundColor='yellow';
}
function Off() {
    document.getElementById("bulb").style.backgroundColor='white';
}
function green() {
    document.getElementById("bulb").style.backgroundColor='green';
}
function blue() {
    document.getElementById("bulb").style.backgroundColor='blue';
}
function red() {
    document.getElementById("bulb").style.backgroundColor='red';
}
const userColor = document.getElementById("color");


userColor.addEventListener("change",()=> changeBulbColour(userColor.value));

function changeBulbColour(color){
    document.getElementById("bulb").style.backgroundColor = color;
}


function SB_Control(){
    document.getElementById("SB_btn")
    if(BigInt.innerText==="On"){
          document.getElementById("SB_btn").innerText = "off";
        document.getElementById("smartBulb").classList.add("on");
    }else{
        document.getElementById("SB_btn").innerText = "on";
        document.getElementById("smartBulb").classList.remove("on");
    }

    
}