import { useState } from 'react';

// Square component
function Square({ value }) {
  return <button className="square">{value}</button>;
  // // React function to "remember" state
  // const [value, setValue] = useState(null);

  // // Display 'X' when square is clicked
  // function handleClick() {
  //   console.log('clicked!');
  //   setValue('X'); 
  // }
  
  // return (
  //   <button 
  //     className="square"
  //     onClick={handleClick}
  //   >
  //     {value}
  //   </button>
  // );
}

// Board with 3 rows, each with 3 squares
export default function Board() {

  // Array of 9 nulls corresponding to 9 squares to store game state
  // Declare state in parent (board) instead of children (square)
  // Pass state down to children with props
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
} 