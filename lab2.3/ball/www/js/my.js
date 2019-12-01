changeColor = function() {
    let clr1=document.getElementById('bgInput1').value;
    let clr2=document.getElementById('bgInput2').value;
    document.body.style.background = `-webkit-linear-gradient(left, ${clr1} , ${clr2})`;
};