import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';


const App = () => {
  const[board, setBoard] = useState(new Board())
  
  useEffect( () => {
restart()
  }, [])
  
  function restart(){
    const newBoard = new Board();
    newBoard.initCells()
    setBoard(newBoard)
  } 
  return (
<div className='app'>
  <BoardComponent
  board={board}
  setBoard = {setBoard}
  />
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
