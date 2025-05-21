### In Scope Changes

_(Enhance or customize the classic 3 × 3, two-player Tic-Tac-Toe while keeping the core rules intact)_

1. **Add an AI opponent** – implement a simple random-move bot, then upgrade to the unbeatable Minimax algorithm with selectable difficulty.
2. **Mobile-first / responsive layout** – make the grid resize gracefully on phones and tablets and support touch events.
3. **Theme & skin system** – let players pick colors, fonts, emoji pieces, dark mode, or holiday themes.
4. **Sound FX & animations** – play click / win / draw sounds, shake invalid moves, and animate the winning line.
5. **Highlight winning combo** – flash or outline the three squares that complete a victory.
6. **Scoreboard & match series** – track wins, losses, draws, and best-of-N series with a reset button.
7. **Turn timer** – add a countdown per move or per game to encourage quick thinking.
8. **Undo / redo** – allow a single step back or a full move history you can navigate.
9. **Keyboard shortcuts & accessibility** – arrow keys to move focus, Enter/Space to mark; add ARIA roles and screen-reader labels.
10. **Persist state** – save the board and scores to `localStorage` so you can refresh and resume.
11. **Player name input & avatars** – prompt for names and show them beside the board.
12. **Remote play (same rules)** – use WebSockets / Firebase to let two browsers share the 3 × 3 grid in real time.
13. **Statistics panel** – calculate win rate for each player, average game length, first-move advantage, etc.
14. **Tutorial & hint system** – teach the optimal strategy and show recommended moves when asked.

---

### Out of Scope Changes

_(Would transform the game into something that’s no longer “classic” Tic-Tac-Toe and therefore shouldn’t be allowed for this assignment)_

- Switching to **Connect 4, Gomoku, 3-D Tic-Tac-Toe, or larger boards** (4×4, 5×5, “N-in-a-row”).
- **Changing the win condition** (e.g., needing four in a row or a different pattern).
- **Adding more than two players** or simultaneous turns.
- **Hex-grid or circular boards** that alter adjacency rules.
- Turning the project into **Hangman, Snake, Chess, or any unrelated game**.
- **Power-ups or special abilities** that break the simple X/O placement mechanic.
- **Real-money wagers or micro-transactions** integrated into the gameplay.
- **Augmented-reality or 3-D visualizations** that replace the 2-D grid entirely.
