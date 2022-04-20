window.onload = function () {
    let canvasId = document.getElementById('canvas');
    let contexto = canvasId.getContext('2d');

    //Variáveis
    let snake = []
    positionX: 10;
    positionY: 10;

    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;
}