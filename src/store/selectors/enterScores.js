export const enterScores = (round, player1, player2, player3, value, roundId) => {
    round.map((corridor) => {
        corridor.team1.players.map((player) => {
            if (player === player1) {
                if (Number(roundId) === 1) {
                    player.scoreRound1 = Number(value);
                } else if (Number(roundId) === 2) {
                    player.scoreRound2 = Number(value);
                } else if (Number(roundId) === 3) {
                    player.scoreRound3 = Number(value);
                }
            }
            if (player === player2) {
                if (Number(roundId) === 1) {
                    player.scoreRound1 = Number(value);
                } else if (Number(roundId) === 2) {
                    player.scoreRound2 = Number(value);
                } else if (Number(roundId) === 3) {
                    player.scoreRound3 = Number(value);
                }
            }
            if (player === player3) {
                if (Number(roundId) === 1) {
                    player.scoreRound1 = Number(value);
                } else if (Number(roundId) === 2) {
                    player.scoreRound2 = Number(value);
                } else if (Number(roundId) === 3) {
                    player.scoreRound3 = Number(value);
                }
            }

            return corridor;
        })
        corridor.team2.players.map((player) => {
            if (player === player1) {
                if (Number(roundId) === 1) {
                    player.scoreRound1 = Number(value);
                } else if (Number(roundId) === 2) {
                    player.scoreRound2 = Number(value);
                } else if (Number(roundId) === 3) {
                    player.scoreRound3 = Number(value);
                }

            }
            if (player === player2) {
                if (Number(roundId) === 1) {
                    player.scoreRound1 = Number(value);
                } else if (Number(roundId) === 2) {
                    player.scoreRound2 = Number(value);
                } else if (Number(roundId) === 3) {
                    player.scoreRound3 = Number(value);
                }
            }
            if (player === player3) {
                if (Number(roundId) === 1) {
                    player.scoreRound1 = Number(value);
                } else if (Number(roundId) === 2) {
                    player.scoreRound2 = Number(value);
                } else if (Number(roundId) === 3) {
                    player.scoreRound3 = Number(value);
                }
            }
            return corridor;
        })
        return round;
    })
    return round;

}
