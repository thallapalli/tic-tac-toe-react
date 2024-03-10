
import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
    const[gameBoard,setGameBoard]=useState(initialGameBoard);
    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]='X';
            return updatedBoard;
        });
    }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colindex) => (
              <li key={colindex}>
                <button onClick={()=>handleSelectSquare(rowIndex,colindex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
