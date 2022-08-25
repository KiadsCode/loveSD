var canvas = document.getElementById("myCanvas");
var renderTarget = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 25;
var base_image = new Image();
base_image.src = 'img/basd.png';
var ballXVelocity = getRandomInt(-7, 7);
var ballYVelocity = getRandomInt(-7, 7);

moveCircle();
function moveCircle() {

    CleanScreen();
    renderTarget.beginPath();
    renderTarget.arc(x, y, radius, 0, Math.PI * 2);
    renderTarget.fillStyle = "white";
    renderTarget.fill();
    renderTarget.drawImage(base_image, 0, 0);
    renderTarget.closePath();
    var d = "ЮРА БЛЯТЬ включи микро";

    x += ballXVelocity;
    y += ballYVelocity;

    checkCollide();

    requestAnimationFrame(moveCircle);
}

function CleanScreen() {
    renderTarget.clearRect(0, 0, canvas.width, canvas.height);
}

function checkCollide() {
    if (x > canvas.width - radius / 2 || x < 0 + radius / 2) {
        ballXVelocity = -ballXVelocity;
    }
    if (y > canvas.height - radius / 2 || y < 0 + radius / 2) {
        ballYVelocity = -ballYVelocity;
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function make_base() {

}