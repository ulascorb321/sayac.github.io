let number = document.getElementById('number');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let restart = document.getElementById('restart');
let sayac;
let i = 0;
let circle = document.getElementById('circle');

function basla (){
    i++;
    number.innerHTML = i;   
}
start.onclick = function(){
    sayac = setInterval(basla, 1000);
    circle.style.borderColor = "green";
}

function sifirla(){
    i = 0;
    number.innerHTML = i;
    clearInterval(sayac);
}

restart.onclick = function(){
    sifirla();
    circle.style.borderColor = "red";
}

stop.onclick = function(){
    clearInterval(sayac);
    circle.style.borderColor = "yellow";
}
