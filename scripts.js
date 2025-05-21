const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let board, current, playing;

const winSets = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

function checkWin(p) {
  return winSets.some((set) => set.every((i) => board[i] === p));
}

function draw() {
  boardEl.innerHTML = "";
  board.forEach((mark, i) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = mark ?? "";
    cell.addEventListener("click", () => move(i));
    boardEl.appendChild(cell);
  });
}

function move(i) {
  if (!playing || board[i]) return;

  board[i] = current;

  if (checkWin(current)) {
    statusEl.textContent = `Player ${current} wins!`;
    playing = false;
  } else if (board.every(Boolean)) {
    statusEl.textContent = "It's a draw!";
    playing = false;
  } else {
    current = current === "X" ? "O" : "X";
    statusEl.textContent = `Player ${current}'s turn`;
  }
  draw();
}

function restart() {
  board = Array(9).fill(null);
  current = "X";
  playing = true;
  statusEl.textContent = `Player ${current}'s turn`;
  draw();
}

resetBtn.addEventListener("click", restart);
restart(); // initialize on load
