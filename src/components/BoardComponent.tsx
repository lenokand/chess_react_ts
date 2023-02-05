import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import CellComponent from './CellComponent';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer : Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

function click(cell: Cell){
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
        selectedCell.moveFigure(cell);

        swapPlayer();
        setSelectedCell(null);
        updateBoard()
        
        // if(cell.figure?.name=="король"){
        //     console.log("king under attack")
        // }

        // console.log(cell.figure?.name)
    } else {
        if (cell.figure?.color === currentPlayer?.color) {
            setSelectedCell(cell);
        }
        
    }

    // if(cell.figure){
    //     setSelectedCell(cell);
    // }

}
useEffect(() => {
    hightlightCells()
}, [selectedCell])

function hightlightCells(){
    board.hightlightCells(selectedCell)
    updateBoard()
}

function updateBoard() {
    const  newBoard = board.getCopyBoard()
    setBoard(newBoard)
}
    return (

<div>
<div className='board-title'>Current player: <span className='color'>{currentPlayer?.color}</span></div>

<div className='board'>
    {board.cells.map((row, index) =>
        <React.Fragment key={index}>
            {row.map( cell =>
                <CellComponent
                click={click}
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                />
                )}
        </React.Fragment>
    )}          
        </div>
</div>

     
    );
};

export default BoardComponent;