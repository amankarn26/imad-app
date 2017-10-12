console.log('Loaded!');

//Changing some data
var ele = document.getElementById('ele-text');
ele.innerHTML = "new value";

//move img

var img = document.getElementById('imgDev');

var vari = 0;
var inc = 0;

function moveDown () {
    
    if(inc<=40)
    {   
        vari = vari + 10;
        inc++;
        img.style.marginTop = vari + 'px';
    }
    if(inc>40&&inc<80)
    {
        vari = vari - 10;
        inc++;
        img.style.marginTop = vari + 'px';
    }
    if(inc == 80)
    {
        inc = 0;
    }
}

img.onclick = function() {
    var interval = setInterval(moveDown, 10);
};