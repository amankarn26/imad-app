console.log('Loaded!');

//Changing some data
var ele = document.getElementById('ele-text');
ele.innerHTML = "new value";

//move img

var img = document.getElementById('imgDev');

var vari = 0;

function moveDown () {
    vari = vari + 10;
    if(vari<450)
    img.style.marginTop = vari + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveDown, 10);
};