export const enterScores = (round, player1, player2, value) => {
    round.map((corridor) => {
        corridor.team1.players.map((player) => {
            if (player === player1) {
                player.score = value;
                return round;
            }
            if (player === player2) {
                player.score = value;
                return round;

            }
        })
        corridor.team2.players.map((player) => {
            if (player === player1) {
                player.score = value;
                return round;
            }
            if (player === player2) {
                player.score = value;
                return round;
            }
        })
    })

}
