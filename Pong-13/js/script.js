let handleEventListeners = function (params) {

    canvas.addEventListener('mousemove', function(mouse){
        let thisCanvas = canvas.getBoundingClientRect();
        let root = document.documentElement;

        mouseY = mouse.clientY - root.scrollTop - thisCanvas.top;

        paddleOneY = mouseY - (PADDLE_HEIGHT / 2);
    })



    canvas.addEventListener('mousedown', function (params) {
        
        if (winScreenShowing) {
            winner = undefined;
            score1 = 0;
            score2 = 0;
            winScreenShowing = false;
        }

    })

}




let handleRendering = function() {

    if (winScreenShowing) {
        createRectanlge(0, 0, canvas.clientWidth, canvas.clientHeight, 'black');

        createText(score1, 300, 50, 'white');
        createText(score2, 500, 50, 'white');

        createText(`${winner} wins !!!`, winner == 'Player 1' ? 200 : 550, 50);

        createNet();

        return;
    }

    createRectanlge(0, 0, canvas.clientWidth, canvas.clientHeight, 'black');
    createRectanlge(0, paddleOneY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
    createRectanlge(canvas.clientWidth - 10, paddleTwoY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
    createArc(ballX, ballY, 'white');

    createNet();

    createText(score1, 300, 50, 'white');
    createText(score2, 500, 50, 'white');
}





let handleMotion = function() {

    if (winScreenShowing) {
        return;
    }

    updateBallMovement();
    handleCanvasBoundryContact()
    handleAI();
}










const INTERVAL = 1000 / 30;
setInterval(() => {
    
    handleRendering();
    handleMotion();

}, INTERVAL);
handleEventListeners();




