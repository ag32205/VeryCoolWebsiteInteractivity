
var mamamia = document.getElementById('mouse');
var background = document.getElementById('background');
var cursor = document.getElementById('mouse');
var src = document.createAttribute('src');
var src2 = document.createAttribute('src');
var srcboard = document.createAttribute('src');
var weirdclass = document.createAttribute('class');
var bclass = document.createAttribute('class');
var imgclass = document.createAttribute('class');
weirdclass.value = "normalweird";
src.value = "Pics/yobby.jpg";
src2.value = "Pics/remy.png";
imgclass.value = "normal";



bclass.value = "normal";
background.setAttributeNode(bclass);
lordofchaos.setAttributeNode(src);
lordofchaos.setAttributeNode(weirdclass);
cursor.setAttributeNode(src2);



lordofchaos.style.height = "2700px";
lordofchaos.style.width = "2200px";


function update(event) {
   var x = event.clientX - 80;
   var y = event.clientY - 50;



   cursor.style.top = y + 'px';
   cursor.style.left = x + 'px';
}



document.addEventListener("mousemove", update);


document.body.onmousedown = function () {



   bclass.value = "evil";
   src2.value = "Pics/feel.png";
}


document.body.onmouseup = function () {



   bclass.value = "normal";
   src2.value = "Pics/remy.png";
}



document.body.onkeydown = function (e) {

   if (e.keyCode === 67) {
       bclass.value = "wheezer";
       src.value = "Pics/intresring.jpg";
       src2.value = "Pics/lizard.jpg";
       earrapesoviet.play();
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

