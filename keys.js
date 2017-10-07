JavaScript
console.log('this is loaded');

var fs = require("fs");
var request = require("request");
var twitter = require("twitter");
var spotify = require("spotify");
var omdb = require("omdb");
var inquirer = require('inquirer');

//Twitter f
function myTwitter(twitterKeys) {
    var twitterKeys = {
        consumer_key: '<XhR6jjo23Qr7zIMgcTk2wXPpc>',
        consumer_secret: '<DitFjyuzsxIzGQE4ikTbFu0Hp8zujpeshJIqYAarTKO2ItwvaC>',
        access_token_key: '<916409147884802049-kf6NnKQDdt3S1IszJobM6zTpdojHRwK>',
        access_token_secret: '<dezAoBRtEqrYWULKpgP718AY5yBCAruQPOH7kgbcSUogZ>',
    });
var twitterUsername = process.argv[3];
if (!twitterUsername) {
    twitterUsername = "shastaconstanza";
}
params = { screen_name: twitterUsername };
client.get("statuses/user_timeline/", params, function(error, data, response) {
    if (!error) {
        for (var i = 0; i < data.length; i++) {

            var twitterResults =
                "@" + data[i].user.screen_name + ": " +
                data[i].text + "\n" +
                data[i].created_at + "\n" + i;
            console.log(twitterResults);
            log(twitterResults);

        }
    } else {
        console.log("Error :" + error);
        return;
    }
});
}
module.exports = myTwitter;


//------START SPOTIFY FUNCTION----------

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: 'cf39738b837c4fb6856325aab7e50081',
    clientSecret: 'c6245892cc524ca9a78561923c3b0df5',
    redirectUri: 'http://www.example.com/callback'
});


function spotifyKeys(songName) {
    var songName = process.argv[3];
    if (songName === "") {
        songName = "The Sign";
    }
    params = songName;
    spotify.get({ type: "track", query: params }, function(err, data) {
        if (!err) {
            var songInfo = data.tracks.items;
            for (var i = 0; i < 5; i++) {
                if (songInfo[i] != undefined) {
                    var spotifyResults =
                        "Artist: " + songInfo[i].artists[0].name + "\n" +
                        "Song: " + songInfo[i].name + "\n" +
                        "Album the song is from: " + songInfo[i].album.name + "\n" +
                        "Preview Url: " + songInfo[i].preview_url + "\n";
                    console.log(spotifyResults);
                    log(spotifyResults); // calling log function
                }
            }
        } else {
            console.log("Error :" + err);
            return;
        }
    });
};
module.exports = spotifyKeys;


//------START OMDB FUNCTION----------
function omdbKeys(movie) {
    var movie = process.argv[3];
    if (movie === "") {
        movie = "mr nobody";
    }
    params = movie
    request("http://www.omdbapi.com/?t=" + params + "&y=&plot=short&r=json&tomatoes=true", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var movieObject = JSON.parse(body);

            var movieResults =
                "Title: " + movieObject.Title + "\n" +
                "Year: " + movieObject.Year + "\n" +
                "Imdb Rating: " + movieObject.imdbRating + "\n" +
                "Country: " + movieObject.Country + "\n" +
                "Language: " + movieObject.Language + "\n" +
                "Plot: " + movieObject.Plot + "\n" +
                "Actors: " + movieObject.Actors + "\n" +
                "Rotten Tomatoes Rating: " + movieObject.tomatoRating + "\n" +
                "Rotten Tomatoes URL: " + movieObject.tomatoURL + "\n"

            console.log(movieResults);
            log(movieResults); // calling log function
        } else {
            console.log("Error :" + error);
            return;
        }
    });
};
module.export = omdbKeys;