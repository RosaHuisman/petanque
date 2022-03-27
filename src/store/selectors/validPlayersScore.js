export const validPlayersScore = (id1, id2, scores, round) => {    

    // players team1
    let playersTeam1=[];
    round.forEach(corridor => {
        if (corridor.team1.id === id1) {
            corridor.team1.players.map((playerOfTeam)=> {
            playersTeam1.push(playerOfTeam)
            })
        }
    });
    
    // players team2
    let playersTeam2=[];
    round.forEach(corridor => {
        if (corridor.team2.id === id2) {
            corridor.team2.players.map((playerOfTeam)=> {
            playersTeam2.push(playerOfTeam)
            })
        }
    });

    // scores team1 & team2
    let scoreTeam1 = 0;
    let scoreTeam2 = 0;
    for(const [key, value ] of Object.entries(scores)) {
        if (getLastChar(key) == id1) {
            scoreTeam1 = value
        }
        if (getLastChar(key) == id2) {
            scoreTeam2 = value
        }           
    }
    
    playersTeam1.forEach((player) => {
        if (scoreTeam1 == 13) {
            player.winRound = true;
        } else {
            player.winRound = false;
        }
        player.score = (scoreTeam1 - scoreTeam2);
    })
    console.log(playersTeam1)

    playersTeam2.forEach((player) => {
        if (scoreTeam2 == 13) {
            player.winRound = true;
        } else {
            player.winRound = false;
        }
        player.score = (scoreTeam2 - scoreTeam1);
    })
    
    return round;   
}

function getLastChar(string) { 
    return string.charAt(string.length-1); 
} 


