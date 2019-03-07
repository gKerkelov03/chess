const canvas = document.getElementById("canvas"),
    spriteSheet = document.getElementById("pieces"),
    ctx = canvas.getContext("2d");

canvas.width = window.innerHeight - 10;
canvas.height = window.innerHeight - 10;

document.body.style.margin = "0px";
spriteSheet.style.display = "none";
canvas.style.border = "solid black";
canvas.style.position = "relative";

canvas.style.left = canvas.width / 2 + "px";

const dimensions = 8, 
    squareSide = canvas.width / dimensions,
    piecesSide = spriteSheet.width / 6,
    colors = {
        boardDarker : "#D2691E",
        boardBrighter : "#FFE4C4",
        options : "yellow",
        criticals : "red",
        stroke: "black"
    },
    strokeWidth = 1;
    templateGridColors = [
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
    ],
    templateGridValues = [
        [1, 2, 3, 4, 5, 3, 2, 1],
        [6, 6, 6, 6, 6, 6, 6, 6],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [6, 6, 6, 6, 6, 6, 6, 6],
        [1, 2, 3, 4, 5, 3, 2, 1]
    ],
    piecesIndexes = {
        6 : 5,
        1 : 4,
        2 : 3,
        3 : 2,
        4 : 1,
        5 : 0
    };
    
ctx.strokeStyle = colors.stroke;
ctx.lineWidth = strokeWidth;

let grid = [],		
    currentSelectedSquareLocation = {},
    currentOptions = [],
    currentCriticals = [],
    isSquareSelected = false,
    isWhiteTurn = true,
    movesCounter = 0;