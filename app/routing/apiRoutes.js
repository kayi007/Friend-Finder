// We are linking our routes to a series of "data" sources.
var friendsArr = require('../data/friends');

module.exports = function(app){
    // API GET Requests shown a JSON of the data in the table
    app.get("/api/friends", function(req, res){
        res.json(friendsArr);
    });

    // API POST Requests pushed to the appropriate JavaScript array. This data is then sent to the server, and the server saves the data to the friends array
    app.post("/api/friends", function(req, res){
        var newUser = req.body;
        console.log(newUser);

        // Differences between Friend & User
        var differences = [];

        friendsArr.forEach(function(friend){
            // Total difference
            var totalDifference = 0;

            for (var i = 0; i < newUser.scores.length; i++){
                var difference = friend.scores[i] - parseInt(newUser.scores[i]);
                totalDifference += Math.abs(difference);
                console.log(totalDifference);
            }
            differences.push(totalDifference);
        });
        // Sum of differences between current user and available Friends in Queue: 
        console.log(differences);
        
        var leastDiff = Math.min.apply(null, differences);

        var bestMatch;

        for(var i = 0; i < differences.length; i++){
            if(differences[i] === leastDiff){
                bestMatch = friendsArr[i];
            }
        }
        res.json(bestMatch);
        friendsArr.push(newUser);
    });
}