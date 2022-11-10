let ranked = [100, 90, 90, 80, 75, 60]; //scores of other players in order
let n = ranked.length; //number of scores being compared
let player = [50, 65, 77, 90, 120]; //total score for player after each game played
let m = player.length; //number of games player plays
let rank = 0; //rank of all players in dense ranking format
let previousRank = 0;

const climbingLeaderboard = () => {
let score = ranked[0];
for (let scores = 0; scores < n; scores++) {
    let numToRank = ranked[scores];
        if (numToRank < score) {
            score = numToRank;
            previousRank++
            
        }
        console.log(score, rank, previousRank)
    //console.log(numToRank, rank, previousRank)
}

};

console.log(climbingLeaderboard(ranked, player));