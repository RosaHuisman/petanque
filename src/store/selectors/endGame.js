

export const winAllRounds = (players) => {  
    
    let winAllRounds = [];
    
    players.forEach((player) => {
        player.totalPoints = player.pointsRound1 + player.pointsRound2 + player.pointsRound3;
        let totalWinRounds = player.winRounds[0] + player.winRounds[1] + player.winRounds[2];
        if (Number(totalWinRounds) === 6) {
            winAllRounds = [...winAllRounds, player]
        } 
    })
    winAllRounds.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    })
    return winAllRounds;
    }

export const winTwoRounds = (players) => {    
    
    let winTwoRounds = [];
    
    players.forEach((player) => {
        player.totalPoints = player.pointsRound1 + player.pointsRound2 + player.pointsRound3;
        let totalWinRounds = player.winRounds[0] + player.winRounds[1] + player.winRounds[2];
         if ( Number(totalWinRounds) === 4 ) {
            winTwoRounds = [...winTwoRounds, player]
        } 
    })
    winTwoRounds.sort((a, b) => {
        return b.totalPoints - a.totalPoints
    })
    return winTwoRounds;
    }

export const winOneRound = (players) => {    

    let winOneRound = [];
    
    players.forEach((player) => {
        player.totalPoints = player.pointsRound1 + player.pointsRound2 + player.pointsRound3;
        let totalWinRounds = player.winRounds[0] + player.winRounds[1] + player.winRounds[2];
        if (Number(totalWinRounds) === 2) {
            winOneRound = [...winOneRound, player]
        } 
    })
    winOneRound.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    })
    return winOneRound;
    }

    export const winNoRound = (players) => {    

        let winNoRound = [];
        
        players.forEach((player) => {
            player.totalPoints = player.pointsRound1 + player.pointsRound2 + player.pointsRound3;
            let totalWinRounds = player.winRounds[0] + player.winRounds[1] + player.winRounds[2];
            if (Number(totalWinRounds) === 0) {
                winNoRound = [...winNoRound, player]
            }
        })
        winNoRound.sort((a, b) => {
            return b.totalPoints - a.totalPoints;
        })
        return winNoRound;
        }
