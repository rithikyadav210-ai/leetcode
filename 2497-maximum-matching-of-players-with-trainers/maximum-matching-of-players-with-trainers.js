/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=>a-b);
    trainers.sort((a,b)=>a-b);
    let i=0;
    let j=0;
    let total=0;
    while(i < players.length && j< trainers.length){
        if(trainers[j]>= players[i]){
            total++;
            i++;
            j++
        }else{
            j++
        }
    }
    return total
};