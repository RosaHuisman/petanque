export const makeTour = (players) => {

  shuffleArray(players);

  if(Number.isInteger(players.length / 4)) {
    let round= [];
    var i,j, arrayOfFour, chunk = 4;
  for (i = 0,j = players.length; i < j; i += chunk) {
    arrayOfFour = players.slice(i, i + chunk);
    let contentCorridor = {};
    contentCorridor.id = i/4 +1;
    let team1 = {};
    team1.id = i/4 +1;
    team1.players = [arrayOfFour[0], arrayOfFour[1]]
    contentCorridor.team1 = team1;

    let team2 = {};
    team2.id = i/4 +1 +(players.length/4);
    team2.players = [arrayOfFour[2], arrayOfFour[3]]
    contentCorridor.team2 = team2;

    let corridor= contentCorridor;
    round.push(corridor)
  }
    return round;

  } else if(Number.isInteger((players.length -1) / 4)) {
    let round= [];
   
    let contentCorridor1 = {};
    contentCorridor1.id = 1;
    let team1 = {};
    team1.id = 1;
    team1.players = [players[0], players[1], players[2]];
    contentCorridor1.team1 = team1;

    let team2 = {};
    team2.id = (players.length -1) /4 + 1;
    team2.players = [players[3], players[4]];
    contentCorridor1.team2 = team2;

    let corridor1= contentCorridor1;

    round.push(corridor1)

    let remainingPlayers = players.slice(5);
    var ii,jj, arrayOfFourTwo, chunkTwo = 4;
    for (ii = 0,jj = remainingPlayers.length; ii < jj; ii += chunkTwo) {
    
    arrayOfFourTwo = remainingPlayers.slice(ii, ii + chunkTwo);

    let contentCorridor = {};
    contentCorridor.id = ii/4 +2;
    
    let team1 = {};
    team1.id = ii/4 +2;
    team1.players = [arrayOfFourTwo[0], arrayOfFourTwo[1]];
    contentCorridor.team1 = team1;
    
    let team2 = {};
    team2.id = ii/4 +2 +(remainingPlayers.length/4 +1);
    team2.players = [arrayOfFourTwo[2], arrayOfFourTwo[3]];
    contentCorridor.team2 = team2;
    
    let corridor= contentCorridor;
    round.push(corridor)
  }
    return round;

  } else if(Number.isInteger((players.length -2) / 4)) {
    let round= [];
   
    let contentCorridor1 = {};
    contentCorridor1.id = 1;
    let team1 = {};
    team1.id = 1;
    team1.players = [players[0], players[1], players[2]];
    contentCorridor1.team1 = team1;

    let team2 = {};
    team2.id = (players.length -2) /4 + 1;
    team2.players = [players[3], players[4], players[5]];
    contentCorridor1.team2 = team2;

    let corridor1= contentCorridor1;

    round.push(corridor1)

    let remainingPlayers = players.slice(6);
    var iii,jjj, arrayOfFourThree, chunkThree = 4;
  for (iii = 0,jjj = remainingPlayers.length; iii < jjj; iii += chunkThree) {
    
    arrayOfFourThree = remainingPlayers.slice(iii, iii + chunkThree);
    let contentCorridor = {};
    contentCorridor.id = iii/4 +2;

    let team1 = {};
    team1.id = iii/4 +2;
    team1.players = [arrayOfFourThree[0], arrayOfFourThree[1]];
    contentCorridor.team1 = team1;

    let team2 = {};
    team2.id = iii/4 +2 +(remainingPlayers.length/4 +1);
    team2.players = [arrayOfFourThree[2], arrayOfFourThree[3]];
    contentCorridor.team2 = team2;

    let corridor= contentCorridor;
    round.push(corridor)

  }
    return round;

  } else if(Number.isInteger((players.length -3) / 4)) {
    
    let round= [];

    let firstPlayers = players.slice(0,11);

    if(firstPlayers) {
      let contentCorridor1 = {};
      contentCorridor1.id = 1;
      let team1 = {};
      team1.id = 1;
      team1.players = [players[0], players[1], players[2]];
      contentCorridor1.team1 = team1;

    let team2 = {};
      team2.id = (players.length -3) /4 + 1;
      team2.players = [players[3], players[4], players[5]];
      contentCorridor1.team2 = team2;
      
      let corridor1= contentCorridor1;
      round.push(corridor1)


    }
    
    
    let contentCorridor2 = {};
    contentCorridor2.id = 2;
    let team1 = {};
    team1.id = 2;
    team1.players = [players[6], players[7], players[8]];
    contentCorridor2.team1 = team1;
    contentCorridor2.id = 2;
    let team2 = {};
    team2.id = (players.length -3) /4 + 2;
    team2.players = [players[9], players[10]];
    contentCorridor2.team2 = team2;
    
    let corridor2=contentCorridor2;

    round.push(corridor2)

    let remainingPlayers = players.slice(11);
    var iiii,jjjj, arrayOfFourFour, chunkFour = 4;
  for (iiii = 0,jjjj = remainingPlayers.length; iiii < jjjj; iiii += chunkFour) {
    
    arrayOfFourFour = remainingPlayers.slice(iiii, iiii + chunkFour);
    let contentCorridor = {};
    contentCorridor.id = iiii/4 +3;
    
    let team1 = {};
    team1.id = iiii/4 +3;
    team1.players = [arrayOfFourFour[0], arrayOfFourFour[1]];
    contentCorridor.team1 = team1;

    let team2 = {};
    team2.id = iiii/4 +3 +(remainingPlayers.length/4 +2);
    team2.players = [arrayOfFourFour[2], arrayOfFourFour[3]];
    contentCorridor.team2 = team2;

    let corridor= contentCorridor;
    round.push(corridor)

  }
    return round;

  } else {
    return console.log('Unhandled case')
  }

};

function shuffleArray(inputArray) {
  inputArray.sort(()=> Math.random() - 0.5);
}
