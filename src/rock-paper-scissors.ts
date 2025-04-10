export function play(player1: string, player2: string): number {
  player1 = player1.trim().toLowerCase();
  player2 = player2.trim().toLowerCase();

  const validMoves = ["rock", "paper", "scissors"];

  if (!validMoves.includes(player1)) {
    throw new Error(`Invalid move: ${player1}`);
  }

  if (!validMoves.includes(player2)) {
    throw new Error(`Invalid move: ${player2}`);
  }

  if (player1 === player2) {
    return 0;
  }

  const beats: Record<string, string> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return beats[player1] === player2 ? 1 : 2;
}
