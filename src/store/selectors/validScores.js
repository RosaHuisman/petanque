export const validScores = (round, corridor, roundId) => {

    if (Number(roundId) === 1) {

        // points
        corridor.team1.players.map((player) => {
            return player.pointsround1 = player.scoreRound1 - corridor.team2.players[0].scoreRound1;
        })
        corridor.team2.players.map((player) => {
            return player.pointsround1 = player.scoreRound1 - corridor.team1.players[0].scoreRound1;
        })

       
        // winRound true or false
        if (Number(corridor.team1.players[0].scoreRound1) > Number(corridor.team2.players[0].scoreRound1)) {
            corridor.team1.players.map((player) => {
                return player.winrounds[0] = 2;
            })
            corridor.team2.players.map((player) => {
                return player.winrounds[0] = 0;
            })
        } 
        if (Number(corridor.team1.players[0].scoreRound1) < Number(corridor.team2.players[0].scoreRound1)) {
            corridor.team2.players.map((player) => {
                return player.winrounds[0] = 2;
            })
            corridor.team1.players.map((player) => {
                return player.winrounds[0] = 0;
            })
        }

    } else if (Number(roundId) === 2) { 
        // points
        corridor.team1.players.map((player) => {
            return player.pointsround2 = player.scoreRound2 - corridor.team2.players[0].scoreRound2;
        })
        corridor.team2.players.map((player) => {
            return player.pointsround2 = player.scoreRound2 - corridor.team1.players[0].scoreRound2;
        })


        // winRound true or false
        if (Number(corridor.team1.players[0].scoreRound2) > Number(corridor.team2.players[0].scoreRound2)) {
            corridor.team1.players.map((player) => {
                return player.winrounds[1] = 2;
            })
            corridor.team2.players.map((player) => {
                return player.winrounds[1] = 0;
            })
        } 
        if (Number(corridor.team1.players[0].scoreRound2) < Number(corridor.team2.players[0].scoreRound2)) {
            corridor.team2.players.map((player) => {
                return player.winrounds[1] = 2;
            })
            corridor.team1.players.map((player) => {
                return player.winrounds[1] = 0;
            })
        }
    } else if (Number(roundId) === 3) { 
        // points
        corridor.team1.players.map((player) => {
            return player.pointsround3 = player.scoreRound3 - corridor.team2.players[0].scoreRound3;
        })
        corridor.team2.players.map((player) => {
            return player.pointsround3 = player.scoreRound3 - corridor.team1.players[0].scoreRound3;
        })


        // winRound true or false
        if (Number(corridor.team1.players[0].scoreRound3) > Number(corridor.team2.players[0].scoreRound3)) {
            corridor.team1.players.map((player) => {
                return player.winrounds[2] = 2;
            })
            corridor.team2.players.map((player) => {
                return player.winrounds[2] = 0;
            })
        } 
        if (Number(corridor.team1.players[0].scoreRound3) < Number(corridor.team2.players[0].scoreRound3)) {
            corridor.team2.players.map((player) => {
                return player.winrounds[2] = 2;
            })
            corridor.team1.players.map((player) => {
                return player.winrounds[2] = 0;
            })
        }
    }

    
    return round; 
}
