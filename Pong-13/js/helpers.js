



let createRectanlge = function(xNumber, yNumber, width, height, color) {
    context.fillStyle = color;
    context.fillRect(xNumber, yNumber, width, height);
}





let createArc = function (xNumber, yNumber, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(xNumber, yNumber, 10, 0, Math.PI * 2, 'TRUE');
    context.fill();
}





let createNet = function() {
    for (let i = 8; i < canvas.height; i+=25) {
        createRectanlge(canvas.width / 2, i, 2, 10, 'white');
    }
}





let createText = function(string, xNumber, yNumber, color) {
    context.fillStyle = color;
    context.fillText(string, xNumber, yNumber);
}