import { useState } from 'react';

// Square component
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );

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

  const [xIsNext, setXIsNext] = useState(true);

  // Array of 9 nulls corresponding to 9 squares to store game state
  // Declare state in parent (board) instead of children (square)
  // Pass state down to children with props
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Updates ith square by creating copy of squares array
  // Creating a copy of data allows for "time travel" / "undo" features
  // As opposed to directly editing squares array
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
} 