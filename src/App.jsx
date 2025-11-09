import { useState } from 'react';

// Square component
function Square() {
  // React function to "remember" state
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log('clicked!');
    setValue('X'); // Display 'X' when square is clicked
  }
  
  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

// Board with 3 rows, each with 3 squares
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
} 