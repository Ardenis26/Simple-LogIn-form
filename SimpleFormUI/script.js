function logIn(){
document.getElementById("CADisplay").style.animation="UnDisp 0.5s";
document.getElementById("LGChange").removeAttribute("onclick")
setTimeout(()=>{
document.getElementById("CADisplay").style.display="none";
document.getElementById("LIDisplay").style.animation="Disp 0.5s"
document.getElementById("LIDisplay").style.display="block";
document.getElementById("LGChange").setAttribute("onclick","createAcc()")
},450)

}
function createAcc(){
document.getElementById("LIDisplay").style.animation="UnDisp 0.5s";
document.getElementById("CAChange").removeAttribute("onclick")
setTimeout(()=>{
document.getElementById("LIDisplay").style.display="none";
document.getElementById("CADisplay").style.animation="Disp 0.5s"
document.getElementById("CADisplay").style.display="block";
document.getElementById("CAChange").setAttribute("onclick","logIn()")
},450)
}