function sum() {
    t1 = parseFloat(document.getElementById("t1").value);
    t2 = parseFloat(document.getElementById("t2").value);
    document.getElementById('sum').value = t1 + t2;
}

function sub() {
    t1 = parseFloat(document.getElementById("t1").value);
    t2 = parseFloat(document.getElementById("t2").value);
    document.getElementById('sum').value = t1 - t2;
}

function mul() {
    t1 = parseFloat(document.getElementById("t1").value);
    t2 = parseFloat(document.getElementById("t2").value);
    document.getElementById('sum').value = t1 * t2;
}

function dev() {
    t1 = parseFloat(document.getElementById("t1").value);
    t2 = parseFloat(document.getElementById("t2").value);
    document.getElementById('sum').value = t1 / t2;
}

function sin() {
    t1 = parseFloat(document.getElementById("t1").value);
    document.getElementById('sum').value = Math.sin(t1);
}
function cos() {
    t1 = parseFloat(document.getElementById("t1").value);
    document.getElementById('sum').value = Math.cos(t1);
}
function sqr() {
    t1 = parseFloat(document.getElementById("t1").value);
    document.getElementById('sum').value = Math.sqrt(t1);
}