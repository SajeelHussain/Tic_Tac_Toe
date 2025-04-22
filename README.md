# Tic Tac Toe (React)

A modern, interactive Tic Tac Toe game built with React.

## Project Overview
This project is a classic Tic Tac Toe game where two players take turns marking X and O on a 3x3 grid. The first player to align three of their marks vertically, horizontally, or diagonally wins. The game also tracks move history, allowing players to "time travel" to any previous move and continue playing from that point.

## Features
- **Interactive Gameplay:** Click on any square to make your move. The game automatically alternates between X and O.
- **Move History:** See a list of all moves made. You can jump back to any previous state of the game and replay from there.
- **Winner Announcement:** The game detects when a player has won and announces the winner.
- **React Components:** The app is structured using functional React components and hooks for state management.

## How It Works
- The main game logic is handled in the `Game` component, which manages the board state and move history.
- The `Board` component displays the 3x3 grid and delegates square rendering to the `Square` component.
- When a player clicks a square, the state updates, and the board re-renders with the new move.
- The move history is displayed as a list of buttons, allowing players to jump to any previous move ("time travel").

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the app:**
   ```bash
   npm start
   ```
   The app will open in your browser, usually at [http://localhost:3000](http://localhost:3000) or the next available port.

## Project Structure
- `src/Game.js` — Main game logic and state
- `src/Board.js` — Board rendering and winner calculation
- `src/Square.js` — Individual square component

## Customization
Feel free to extend the project with features like score tracking, player names, or improved styling!

---

Made with ❤️ using React.
