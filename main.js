var canvas = document.getElementById("myCanvas");
var renderTarget = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 25;

var ballXVelocity = 3;
var ballYVelocity = 3;

moveCircle();
function moveCircle() {
    renderTarget.clearRect(0, 0, canvas.width, canvas.height);
    renderTarget.beginPath();
    renderTarget.arc(x, y, radius, 0, Math.PI * 2);
    renderTarget.fillStyle = "white";
    renderTarget.fill();
    renderTarget.closePath();

    x += ballXVelocity;
    y += ballYVelocity;

    checkCollide();

    requestAnimationFrame(moveCircle);
}

function checkCollide() {
    if (x > canvas.width - radius / 2 || x < 0 + radius / 2) {
        ballXVelocity = -ballXVelocity;
    }
    if (y > canvas.height - radius / 2 || y < 0 + radius / 2) {
        ballYVelocity = -ballYVelocity;
    }
}
