

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

document.getElementById("tpose").onmouseover = function () {
    mouseClick()
};


function mouseClick() {

}

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
var snd = new Audio('Sounds/earthbound.mp3');
snd.play();


var cursor = document.getElementById('mouse');

function update(event) {
    var x = event.clientX;
    var y = event.clientY - 700;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
}

document.addEventListener("mousemove", update);
