var ad = document.getElementById("myCanvas");
var ctx = ad.getContext("2d");

ctx.beginPath();
ctx.arc(25, 25, 25, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();