class Square {
    constructor(x, y, side, isWhite, value, color){
        this.x = x;
        this.y = y;
        this.side = side;
        this.isWhite = isWhite;
        this.value = value;
        this.color = color;
    }
    
    drawMyself(color){
        ctx.fillStyle = color ? color : this.color === 1 ? colors.boardBrighter : colors.boardDarker;        

        ctx.fillRect(this.x, this.y, this.side, this.side);
        ctx.strokeRect(this.x, this.y, this.side, this.side);
    }

    drawMyValue(){
        if(this.value !== 0){
            let coordinatesToCut = findPieceToDraw(this.isWhite, this.value);
            ctx.drawImage(spriteSheet, coordinatesToCut[0], coordinatesToCut[1], piecesSide, piecesSide, this.x, this.y, this.side, this.side);
        }
    }
}