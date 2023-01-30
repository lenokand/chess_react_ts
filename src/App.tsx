import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';


const App = () => {
  const[board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState < Player | null>(null);

  useEffect( () => {
  restart()
    setCurrentPlayer(whitePlayer);
  }, [])
  
  function restart(){
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setCurrentPlayer(whitePlayer);
    setBoard(newBoard)
  }
  
  function swapPlayer(){
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)

  }
  return (
<div className='app'>


  <Timer 
  restart = {restart}
  currentPlayer = {currentPlayer}
  />
  
  
  <BoardComponent
  board={board}
  setBoard = {setBoard}
  currentPlayer = {currentPlayer}
  swapPlayer = {swapPlayer}
  />

  <LostFigures 
  title="Черные фигуры"
   figures={board.lostBlackFigures}/>
  <LostFigures 
  title="Белые фигуры"
   figures={board.lostWhiteFigures}/>
</div>

  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
