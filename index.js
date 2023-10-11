// code your solution here
function superbowlWin(team){
    const winningTeam=team.find(team=>team.result === "W")
    return winningTeam ? winningTeam.year:undefined
}
