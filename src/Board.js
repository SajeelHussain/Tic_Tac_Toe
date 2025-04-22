import React from "react";
import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                {[0, 1, 2].map(i => (
                    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
                ))}
            </div>
            <div className="board-row">
                {[3, 4, 5].map(i => (
                    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
                ))}
            </div>
            <div className="board-row">
                {[6, 7, 8].map(i => (
                    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
                ))}
            </div>
        </>
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
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;