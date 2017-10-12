console.log('Loaded!');

//Changing some data
var ele = document.getElementById('ele-text');
ele.innerHTML = "new value";

//move img

var cnt = document.getElementById('countt');
var cntt = 0;
var img = document.getElementById('imgDev');

var vari = 0;
var inc = 0;

function moveDown () {
    
    if(inc<=35)
    {   
        vari = vari + 9;
        inc++;
        img.style.marginTop = vari + 'px';
    }
    if(inc>35&&inc<70)
    {
        vari = vari - 9;
        inc++;
        img.style.marginTop = vari + 'px';
    }
    if(inc == 70)
    {
        inc = 0;
        vari = 0;
    }
}

img.onclick = function() {
    cnt++;
    cnt.innerHTML = cnt + "stop";
    var interval = setInterval(moveDown, 15);
    
};