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
function SB_Control2(){
    document.getElementById("smartBulb").classList.toggle("on");
}
document.getElementById("c1").addEventListener("mouseenter",() =>
{
    fillColour("violet")
});


document.getElementById("c2").addEventListener("mouseenter",() =>
{
    fillColour("indio")
});
document.getElementById("c3").addEventListener("mouseenter",() =>
{
    fillColour("white")
});
document.getElementById("c4").addEventListener("mouseenter",() =>
{
    fillColour("blue")
});
document.getElementById("c5").addEventListener("mouseenter",() =>
{
    fillColour("green")
});
document.getElementById("c6").addEventListener("mouseenter",() =>
{
    fillColour("yellow")
});
document.getElementById("c7").addEventListener("mouseenter",() =>
{
    fillColour("orange")
});
