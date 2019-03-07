window.onload = () => {
    grid = getStartingGrid();	
    
	drawGrid();
	

    window.addEventListener("click", (event) => {
        if(currentOptions.length === 0 && currentCriticals.length === 0){
            isSquareSelected = false;
        }
        
        if(isSquareSelected === false){
           currentSelectedSquareLocation = selectSquare(event.clientX, event.clientY);

           if(currentSelectedSquareLocation){
               drawOptions(currentOptions, currentCriticals); 
           }
        }
        else {
            let isClicked = false;

            currentOptions.forEach((option) => {
                if(clicked(option.row, option.col, event.clientX, event.clientY)){
                    isClicked = true;
                    changeValue(currentSelectedSquareLocation, option);
                    return;
                }
            });

            currentCriticals.forEach((option) => {
                if(clicked(option.row, option.col, event.clientX, event.clientY)){                    
                    isClicked = true;
                    changeValue(currentSelectedSquareLocation, option);
                    return;
                }
            });

            if(isClicked){
                isWhiteTurn = !isWhiteTurn;
                movesCounter++;
            }
                           
            isSquareSelected = false;            
            currentOptions = [];
            currentCriticals = [];
            drawGrid();             
            isSomeoneDead();
        }
    });
}