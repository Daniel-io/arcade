




let reverseBallX = function (params) { ballSpeedX *= -1;}
let reverseBallY = function (params) { ballSpeedY *= -1;}





let resetBall = function() {

    if (score1 >= winScore) {
        winner = 'Player 1';
        winScreenShowing = true;
    } else if (score2 >= winScore) {
        winner = 'Player 2';
        winScreenShowing = true;
    }

    ballX = canvas.clientWidth / 2;
    ballY = canvas.clientHeight / 2;
    reverseBallX();
}




let updateBallMovement = function (params) {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}




let handleCanvasBoundryContact = function () {
    
    if (ballX < 0) {

        if (ballY > paddleOneY && ballY < (paddleOneY + PADDLE_HEIGHT)) {
            reverseBallX();
            let center = paddleOneY + (PADDLE_HEIGHT / 2);
            let delta = ballY - center;
            ballSpeedY = delta * .35;
        } else {
            score2++;
            resetBall();
        }
        
        
    }
    
    if (ballX > canvas.clientWidth) {
        
        if (ballY > paddleTwoY && ballY < (paddleTwoY + PADDLE_HEIGHT)) {
            reverseBallX();
            let center = paddleTwoY + (PADDLE_HEIGHT / 2);
            let delta = ballY - center;
            ballSpeedY = delta * .35;
        } else {
            score1++;
            resetBall();
        }



    }

    if (ballY < 0) {
        reverseBallY();
    }

    if (ballY > canvas.clientHeight) {
        reverseBallY();
    }

}





let handleAI = function (params_) {

    let paddleCenter = paddleTwoY + (PADDLE_HEIGHT / 2);
    if (ballY - 35 > paddleCenter) {
        paddleTwoY += 8;
    } else if (ballY + 35 < paddleCenter) {
        paddleTwoY -= 8;
    }

}