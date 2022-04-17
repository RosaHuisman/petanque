export const endGame = (players, round1, round2, round3) => {    

console.log(players)

players.forEach((player) => {
    player.totalPoints = player.pointsRound1 + player.pointsRound2 + player.pointsRound3
})


}
