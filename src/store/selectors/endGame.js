

export const winAllRounds = (players) => {  
    console.log(players);  
    
    let winAllRounds = [];
    
    players.forEach((player) => {
        player.totalPoints = player.pointsRound1 + player.pointsRound2 + player.pointsRound3;
        console.log(player.winRounds[0]);
        let totalWinRounds = player.winRounds[0] + player.winRounds[1] + player.winRounds[2];
        console.log(totalWinRounds);
        if (Number(totalWinRounds) === 6) {
            winAllRounds = [...winAllRounds, player]
        } 
    })
    winAllRounds.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    })
    console.log(winAllRounds);
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
    console.log(winTwoRounds);
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
    console.log(winOneRound);
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
        console.log(winNoRound);
        return winNoRound;
        }
