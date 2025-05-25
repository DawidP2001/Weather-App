/**
 * Tic-Tac-Toe Game
 * This is a simple implementation of the Tic-Tac-Toe game using React from the official React documentation.
 * Date: 25/05/2025
 * 
 * Exercises for improving the game:
 * 1. For the current move only, show “You are at move #…” instead of a button.
 * 2. Rewrite Board to use two loops to make the squares instead of hardcoding them.
 * 3. Add a toggle button that lets you sort the moves in either ascending or descending order.
 * 4. When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
 * 5. Display the location for each move in the format (row, col) in the move history list.
 */

import { useState } from "react";

function Square({ value, onSquareClick, winners, location }) {
  if (winners && winners.includes(location)) {
    return (
      <button className="square winner" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
  if (squares[i] || calculateWinner(squares)) {
    return;
  }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  const draw = calculateDraw(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner[0];
      return (
    <>
      <div className="status">{status}</div>
    {[0, 1, 2].map((i) => (
      <div key={i} className="board-row">
        {[0, 1, 2].map((j) => (
          <Square
            key={i * 3 + j}
            value={squares[i * 3 + j]}
            onSquareClick={() => handleClick(i * 3 + j)}
            winners={[winner[1], winner[2], winner[3]]} // Pass winning indices
            location={i * 3 + j}
          />
        ))}
      </div>
    ))}
    </>
  );
  } else if(draw) {
    status = "It's a draw!";
  }
  else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
    {[0, 1, 2].map((i) => (
      <div key={i} className="board-row">
        {[0, 1, 2].map((j) => (
          <Square
            key={i * 3 + j}
            value={squares[i * 3 + j]}
            onSquareClick={() => handleClick(i * 3 + j)}
          />
        ))}
      </div>
    ))}
    </>
  );
}
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const [toggleOrder, setToggleOrder] = useState(false);
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  let row, col;
  if (currentMove > 0) {
    [row, col] = calculateLocation(history.slice(0, currentMove + 1));
  } else {
    row = col = null; // No move made yet
  }
  const moves = history.map((squares, move) => {
    if (toggleOrder) {
      move = history.length - 1 - move; // Reverse the order of moves
    }
    let description;
    if (move > 0) {
      if (move === currentMove) {
        return (
          <li key={move}>
            You are at move #{move}<br></br>
            Row: {row}, Col: {col}
          </li>
        );
      }
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <button onClick={() =>setToggleOrder(!toggleOrder)}>Change Order of Buttons</button>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], a, b, c]; // Return the winner and the winning indices
    }
  }
  return null;
}
function calculateDraw(squares) {
  return squares.every(square => square !== null) && !calculateWinner(squares);
}
function calculateLocation(history) {
  let index = history.length - 1;
  let location;
  for (let i = 0; i < history[index].length; i++) {
    if (history[index][i] !== history[index-1][i]) {
      location = i;  // Found difference at index i
    }
  }
  let row, col;
  row = Math.floor(location / 3);
  col = location % 3;
  return [row, col];
}
