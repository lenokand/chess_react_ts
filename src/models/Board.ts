import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { King } from "./figurs/King"
import { Pawn } from "./figurs/Pawn"
import { Queen } from "./figurs/Queen"
import { Bishop } from "./figurs/Bishop"
import { Knight } from "./figurs/Knight"
import { Rook } from "./figurs/Rook"

export class Board{

    cells: Cell[][] = []



    public initCells(){
        for(let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++){
                if((i + j) % 2 !== 0){
                    row.push(new Cell(this, j, i, Colors.BLACK, null))// black cell
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null))// white cell
                }
            }
            this.cells.push(row);
        }
    }
    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }

    public hightlightCells(selectedCell: Cell | null){
        for(let i = 0; i < this.cells.length; i++){
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }

    public getCell(x:number, y:number){
        return this.cells[y][x]
    }

    private addPawns(){
for(let i=0; i < 8 ; i++){
    new Pawn(Colors.BLACK, this.getCell(i, 1))
    new Pawn(Colors.WHITE, this.getCell(i, 6) )
    }
    }
    private addKings(){
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7) )
    }
    private addQueens(){
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(3, 7) )
    }
    private addBishops(){
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(2, 7) )
        new Bishop(Colors.WHITE, this.getCell(5, 7) )
    }
    private addKnigts(){
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Knight(Colors.WHITE, this.getCell(1, 7) )
        new Knight(Colors.WHITE, this.getCell(6, 7) )
    }
    private addRook(){
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(7, 0))
        new Rook(Colors.WHITE, this.getCell(0, 7) )
        new Rook(Colors.WHITE, this.getCell(7, 7) )
    }


    public addFisherFigures(){

    }

    public addFigures(){
        this.addPawns()
        this.addBishops()
        this.addKings()
        this.addKnigts()
        this.addQueens()
        this.addRook()

        // new Queen(Colors.WHITE, this.getCell(0,3))
        // new Queen(Colors.BLACK, this.getCell(7,4))
        // new King(Colors.BLACK, this.getCell(7,3))
        // new Queen(Colors.BLACK, this.getCell(7,2))
        // new Queen(Colors.BLACK, this.getCell(7,1))
        // new Queen(Colors.BLACK, this.getCell(7,5))
        // new Queen(Colors.BLACK, this.getCell(7,6))

    }

}