import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello, World!
    </div>
  );
}

export default App;


// == TICTACTOE CODE ==
// import { useState } from 'react';

// // type SquareProps = {
// //   value: string;
// // }

// function Square(){
//   const[value, setValue] = useState(null)
  
//   function handleClick(){
//     // setValue("X");
//   }

//   return( 
//     <button className="square" onClick={handleClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board(){
//   return (
//     <>
//     <div className="board-row">
//       <Square />
//       <Square />
//       <Square />
//     </div>
//     <div className="board-row">
//       <Square />
//       <Square />
//       <Square />
//     </div>
//     <div className="board-row">
//       <Square />
//       <Square />
//       <Square />
//     </div>
//     </>
//   );
// }