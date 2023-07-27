import './App.css';
import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

function Square({value,onSquareClick})
{
  return <button className='square' onClick={onSquareClick}>{value}</button>;
}


export default function Board() {
  const [xIsNext,setXIsNext]=useState(true);
  const [square,setSquare]=useState(Array(9).fill(null));
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
    for(let i=0;i<lines.length;i++)
    {
      const [a,b,c]=lines[i];
      if(square[a]===square[b] && square[b]===square[c])
      {
        return square[a];
      }
    }
  }
  function handleClick(i)
  {
    
    const nextSquares=square.slice();
    if(square[i]==="X")
    {
      return;
    }
    if(square[i]==="O")
    {
      return;
    }
    if(xIsNext){
      nextSquares[i]="X";
    }
    else{
      nextSquares[i]="O";
    }
    setSquare(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    {swal(status)};
  setSquare(Array(9).fill(null));  
  } 
  else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function reset()
  {
    setSquare(Array(9).fill(null)); 
  }
  return (
    <div className='board'>
      <h1>TIC-TAC-TOE</h1>
    <div className='row'>
    <Square value={square[0]} onSquareClick={()=>{handleClick(0)}}/>
    <Square value={square[1]} onSquareClick={()=>{handleClick(1)}}/>
    <Square value={square[2]} onSquareClick={()=>{handleClick(2)}}/>
    </div>
    <div className='row'>
    <Square value={square[3]} onSquareClick={()=>{handleClick(3)}}/>
    <Square value={square[4]} onSquareClick={()=>{handleClick(4)}}/>
    <Square value={square[5]} onSquareClick={()=>{handleClick(5)}}/>
    </div>
    <div className='row'>
    <Square value={square[6]} onSquareClick={()=>{handleClick(6)}}/>
    <Square value={square[7]} onSquareClick={()=>{handleClick(7)}}/>
    <Square value={square[8]} onSquareClick={()=>{handleClick(8)}}/>
    <button className='reset' onClick={reset}><span>Reset</span></button>
    </div>
    </div>
  );
}


