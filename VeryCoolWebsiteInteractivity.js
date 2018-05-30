

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






function Keyset(left, right, up) {
    this.l = left;
    this.r = right;
    this.u = up;
    this.left = Boolean;
    this.right = Boolean;
    this.up = Boolean;

    this.moving = Boolean;
    this.jumping = Boolean;
    this.attacking = Boolean;
    this.descend = Boolean;
}
var keys = new Keyset(37, 39, 38);



function stop(e) {
    if (e.keyCode === keys.r || e.keyCode === keys.l) {
        keys.moving = false;

        document.getElementById('player1').src = "sprite_red/practice_idle.png";
    }
    if (e.keyCode === keys.u) {
        keys.jumping = false;
        document.getElementById('player1').src = "sprite_red/practice_idle.png";
    }
    if (e.keyCode || keys1.r && e.keyCode === keys1.l) {
        keys1.moving = false;
        document.getElementById('player2').src = "sprite_red/practice_idle.png";
    }
    if (e.keyCode === keys1.u) {
        keys1.jumping = false;
        document.getElementById('player1').src = "sprite_red/practice_idle.png";
    }


};

window.addEventListener('keyup', stop);
