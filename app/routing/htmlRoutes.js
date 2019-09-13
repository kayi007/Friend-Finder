// path package to get the correct file path for our html
var path = require("path");

module.exports = function(app){
    // To connect to home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    // To connect to survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};