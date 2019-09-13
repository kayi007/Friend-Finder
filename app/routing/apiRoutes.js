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
    });
}