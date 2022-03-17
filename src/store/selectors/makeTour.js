export const makeTour = (players) => {

  shuffleArray(players);

  if(Number.isInteger(players.length / 4)) {
    let round= [];
    var i,j, arrayOfFour, chunk = 4;
  for (i = 0,j = players.length; i < j; i += chunk) {
    
    arrayOfFour = players.slice(i, i + chunk);
    let contentCorridor = new Object();
    contentCorridor.id = i/4 +1;
    contentCorridor.team1 = [arrayOfFour[0], arrayOfFour[1]];
    contentCorridor.team2 = [arrayOfFour[2], arrayOfFour[3]];
    let corridor= contentCorridor;
    round.push(corridor)
  }
    return round;

  } else if(Number.isInteger((players.length -1) / 4)) {
    let round= [];
   
    let contentCorridor1 = new Object();
    contentCorridor1.id = 1;
    contentCorridor1.team1 = [players[0], players[1], players[2]];
    contentCorridor1.team2 = [players[3], players[4]];
    
    let corridor1= contentCorridor1;

    round.push(corridor1)

    let remainingPlayers = players.slice(5);
    var i,j, arrayOfFour, chunk = 4;
  for (i = 0,j = remainingPlayers.length; i < j; i += chunk) {
    
    arrayOfFour = remainingPlayers.slice(i, i + chunk);
    let contentCorridor = new Object();
    contentCorridor.id = i/4 +2;
    contentCorridor.team1 = [arrayOfFour[0], arrayOfFour[1]];
    contentCorridor.team2 = [arrayOfFour[2], arrayOfFour[3]];
    let corridor= contentCorridor;
    round.push(corridor)
  }
    return round;

  } else if(Number.isInteger((players.length -2) / 4)) {
    let round= [];
   
    let contentCorridor1 = new Object();
    contentCorridor1.id = 1;
    contentCorridor1.team1 = [players[0], players[1], players[2]];
    contentCorridor1.team2 = [players[3], players[4], players[5]];
    
    let corridor1= contentCorridor1;

    round.push(corridor1)

    let remainingPlayers = players.slice(6);
    var i,j, arrayOfFour, chunk = 4;
  for (i = 0,j = remainingPlayers.length; i < j; i += chunk) {
    
    arrayOfFour = remainingPlayers.slice(i, i + chunk);
    let contentCorridor = new Object();
    contentCorridor.id = i/4 +2;
    contentCorridor.team1 = [arrayOfFour[0], arrayOfFour[1]];
    contentCorridor.team2 = [arrayOfFour[2], arrayOfFour[3]];
    let corridor= contentCorridor;
    round.push(corridor)
  }
    return round;

  } else if(Number.isInteger((players.length -3) / 4)) {
    
    let round= [];
   
    let contentCorridor1 = new Object();
    contentCorridor1.id = 1;
    contentCorridor1.team1 = [players[0], players[1], players[2]];
    contentCorridor1.team2 = [players[3], players[4], players[5]];
    
    let corridor1= contentCorridor1;

    let contentCorridor2 = new Object();
    contentCorridor2.id = 2;
    contentCorridor2.team1 = [players[6], players[7], players[8]];
    contentCorridor2.team2 = [players[9], players[10]];
    
    let corridor2=contentCorridor2;

    round.push(corridor1, corridor2)

    let remainingPlayers = players.slice(11);
    var i,j, arrayOfFour, chunk = 4;
  for (i = 0,j = remainingPlayers.length; i < j; i += chunk) {
    
    arrayOfFour = remainingPlayers.slice(i, i + chunk);
    let contentCorridor = new Object();
    contentCorridor.id = i/4 +3;
    contentCorridor.team1 = [arrayOfFour[0], arrayOfFour[1]];
    contentCorridor.team2 = [arrayOfFour[2], arrayOfFour[3]];
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

function makeCorridorWithRemainigPlayers(round, remainingPlayers) {
  
}