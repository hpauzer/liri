var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var omdb = require("omdb")
var inquirer = require('inquirer');
var liriArgument = process.argv[2];

inquirer.prompt(["What do you want to search?"]) {
    type: "list";
    name: "search";
    message: "function to do something";
    choices: [`my-tweets`, `spotify-this-song`, `movie-this`, `do-what-it-says`];
    when: function(answers) {
        return answers.choices === 'my-tweets';
    };
    .then(function(user) {
            inquirer.prompt(["Type 'node liri.js my-tweets'"]),
                fs.readFile('./keys.js', function(err, myTwitter) {};
                };
            inquirer.prompt(["Type 'node liri.js movie-this' and a movie name"]),
                fs.readFile('./keys.js', function(err, omdbKeys) {};
                };
            inquirer.prompt(["Type 'node liri.js movie-this' and a movie name"]),
                fs.readFile('./keys.js', function(err, spotifyKeys) {};

                })
    });
}