export const validScores = (round, corridor, roundId) => {

    if (Number(roundId) === 1) {

        // points
        corridor.team1.players.map((player) => {
            player.pointsRound1 = player.scoreRound1 - corridor.team2.players[0].scoreRound1;
        })
        corridor.team2.players.map((player) => {
            player.pointsRound1 = player.scoreRound1 - corridor.team1.players[0].scoreRound1;
        })

       
        // winRound true or false
        if (Number(corridor.team1.players[0].scoreRound1) > Number(corridor.team2.players[0].scoreRound1)) {
            corridor.team1.players.map((player) => {
                player.winRounds[0] = true;
            })
            corridor.team2.players.map((player) => {
                player.winRounds[0] = false;
            })
        } 
        if (Number(corridor.team1.players[0].scoreRound1) < Number(corridor.team2.players[0].scoreRound1)) {
            corridor.team2.players.map((player) => {
                player.winRounds[0] = true;
            })
            corridor.team1.players.map((player) => {
                player.winRounds[0] = false;
            })
        }

    } else if (Number(roundId) === 2) { 
        // points
        corridor.team1.players.map((player) => {
            player.pointsRound2 = player.scoreRound2 - corridor.team2.players[0].scoreRound2;
        })
        corridor.team2.players.map((player) => {
            player.pointsRound2 = player.scoreRound2 - corridor.team1.players[0].scoreRound2;
        })


        // winRound true or false
        if (Number(corridor.team1.players[0].scoreRound2) > Number(corridor.team2.players[0].scoreRound2)) {
            corridor.team1.players.map((player) => {
                player.winRounds[1] = true;
            })
            corridor.team2.players.map((player) => {
                player.winRounds[1] = false;
            })
        } 
        if (Number(corridor.team1.players[0].scoreRound2) < Number(corridor.team2.players[0].scoreRound2)) {
            corridor.team2.players.map((player) => {
                player.winRounds[1] = true;
            })
            corridor.team1.players.map((player) => {
                player.winRounds[1] = false;
            })
        }
    } else if (Number(roundId) === 3) { 
        // points
        corridor.team1.players.map((player) => {
            player.pointsRound3 = player.scoreRound3 - corridor.team2.players[0].scoreRound3;
        })
        corridor.team2.players.map((player) => {
            player.pointsRound3 = player.scoreRound3 - corridor.team1.players[0].scoreRound3;
        })


        // winRound true or false
        if (Number(corridor.team1.players[0].scoreRound3) > Number(corridor.team2.players[0].scoreRound3)) {
            corridor.team1.players.map((player) => {
                player.winRounds[2] = true;
            })
            corridor.team2.players.map((player) => {
                player.winRounds[2] = false;
            })
        } 
        if (Number(corridor.team1.players[0].scoreRound3) < Number(corridor.team2.players[0].scoreRound3)) {
            corridor.team2.players.map((player) => {
                player.winRounds[2] = true;
            })
            corridor.team1.players.map((player) => {
                player.winRounds[2] = false;
            })
        }
    }

    
    return round; 
}
