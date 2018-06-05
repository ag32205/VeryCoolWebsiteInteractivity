
var mamamia = document.getElementById('mouse');
var background = document.getElementById('background');
var cursor = document.getElementById('mouse');
var src = document.createAttribute('src');
var src2 = document.createAttribute('src');
var srcboard = document.createAttribute('src');
var aclass = document.createAttribute('class');
var bclass = document.createAttribute('class');
var imgclass = document.createAttribute('class');
aclass.value = "normalweird";
src.value = "Pics/yobby.jpg";
src2.value = "Pics/remy.png";
imgclass.value = "normal";





cursor.setAttributeNode(src2);




function update(event) {
   var x = event.clientX - 180;
   var y = event.clientY - 100;



   cursor.style.top = y + 'px';
   cursor.style.left = x + 'px';
}



document.addEventListener("mousemove", update);

var melee = new Audio('Sounds/BLIP.mp3');

document.body.onmousedown = function () {


melee.play();
   src2.value = "Pics/blip.png";
}


document.body.onmouseup = function () {

melee.pause();
   src2.value = "Pics/remy.png";
}



document.body.onkeydown = function (e) {

   if (e.keyCode === 38) {
       src.value = "Pics/intresring.jpg";
       src2.value = "Pics/lizard.jpg";
   }
    if (e.keyCode === 40) {
        src2.value = "Pics/feel.png"
        src.value = "Pics/trumpet.jpg"
        }
         if (e.keyCode === 37) {
        src2.value = "Pics/agro.jpg"
        src.value = "Pics/sora.jpg"
        }
     if (e.keyCode === 39) {
        src2.value = "Pics/funky.png"
        src.value = "Pics/wakanda.jpg"
        }

}





document.getElementById("riku").onmouseover = function () {
    mouseOver()
};
document.getElementById("riku").onmouseout = function () {
    mouseOut()
};

document.getElementById("duck").onmouseover = function () {
    mouseOver2()
};
document.getElementById("duck").onmouseout = function () {
    mouseOut2()
};





function mouseOver() {
    battle.play();
}

function mouseOut() {
    battle.pause();
}

function mouseOver2() {
    quack.play();
}

function mouseOut2() {
    quack.pause();
}
var battle = new Audio('Sounds/battle.mp3')
var quack = new Audio('Sounds/donald.mp3')
var snd = new Audio('Sounds/give_it_all.mp3');
snd.play();

