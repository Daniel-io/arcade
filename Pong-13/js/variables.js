



let canvas = document.querySelector(".js-canvas");
let context = canvas.getContext("2d");






const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;

let paddleOneY = 250;
let paddleTwoY = 250;


 


let ballX = 300;
let ballY = 300;
let ballSpeedX = 8;
let ballSpeedY = 2;





let mouseY;





let score1 = 2;
let score2 = 2;
let winScore = 3;
let winner = undefined;


let winScreenShowing = false;