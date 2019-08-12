
// Already Done: npm installed (all listed below) 

// Require and configure dotenv.  Read and set environment variables.  The Dotenv module/package loads environment variables from an .env file into process.env (code to read and set any environment variables with the dotenv package). 

require("dotenv").config();



// Collection of command line user interfaces  

var inquirer = require("inquirer");

//Installetion of node-GeoCoder
var NodeGeocoder = require("node-geocoder");

// JS date library for parsing, validating, manipulating, and formatting dates

var moment = require("moment");
moment().format();

//for the colors in the output
var chalk = require("chalk");

// Provides functionality to access and interact with the file system

const fs = require("fs");

// Bands in Town Artist API Wrapper  

var bandsintown = require("bandsintown")("codingbootcamp");


// API library for Spotify API

var Spotify = require("node-spotify-api");

// Spotify key info in keys.js -- var keys = require("./keys.js")

var keys = require("./keys");
//console.log(keys);
// To access OMDb API

var omdb = require("omdb");

// Incorporate the axios npm package

var axios = require("axios");

// Storing input in process.argv index  


// Input for Bands in Town API request

var artist = process.argv[3];

// Input for Spotify API request.  Includes default to "The Sign by Ace of Base" if no song is provided. 

var querySpot = process.argv[3] || "The Sign Ace of Base";

// Input for OMDB API request.  Includes default to "Mr. Nobody" if no movie is provided. 

var movieName = process.argv[3] || "Mr. Nobody";



//Directs which function to call and execute subject to user input

// put inquirer stuff here
// .then(function(response) {
// If the inquirerResponse confirms, we displays the inquirerResponse's username and the choose from the answers.
//   all the if statements below go in here

if (process.argv[2] === "concert-this") {

    searchBandsInTown(artist)

} else if (process.argv[2] === "spotify-this-song") {

    requestToSpotify(querySpot);

} else if (process.argv[2] === "movie-this") {

    searchOMDB(movieName);

} else if (process.argv[2] === "do-what-it-says") {

    fsNodeRandom();
}



// Search artist Bands In Town API 



function searchBandsInTown(artist) {



    // Query request with axios to the Bands in Town API for the requested performer

    var queryURLBands = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";



    // Query request to axios and response based on user input      
    // axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(

    axios.get(queryURLBands).then(

        function (response) {

            // Loop to gather venue list

            for (i = 0; i < response.data.length; i++) {

                // Use moment package to format datetime to "MM/DD/YYYY"

                var date = moment(response.data[i].datetime).format("MM/DD/YYYY");

                //console.log(response.data.length);

                //node.liri.js concert-this response

                console.log("\n");
                console.log(chalk.magenta("entire venue data:", JSON.stringify(response.data[i], null, 2)));

                console.log(chalk.red("============== LIRI FOUND THIS FOR AWESOME INFORMATION FOR YOU =========================\n"))

                console.log(chalk.blue("Name of venue: " + chalk.green(response.data[i].venue.name)));

                console.log(chalk.blue("Venue location: " + chalk.green(response.data[i].venue.city + ", " + response.data[i].venue.region)));

                // console.log(chalk.blue("Time of the event: " +chalk.green( response.data[0].time)));

                console.log(chalk.blue("Date of the event: " + chalk.green(date)))

                console.log("\n");

                console.log(chalk.red("==============================================================================================\n"))


            }

        }

    );

}

// Calling the function for testing:  searchBandsInTown (artist);



// Search Spotify API 



function requestToSpotify(querySpot) {



    // Code required to import the `keys.js` file info and store it in a new Spotify variable (adds the keys Spotify object to access Spotify API).  Adding my Spotify user ID and API key from .env file through NPM dotenv module/package.

    var spotify = new Spotify(keys.spotify);



    // Search music Spotify API

    console.log(querySpot);

    spotify.search({

        type: "track", query: querySpot
    },

        function (err, data) {

            if (err) {

                return console.log("Error occurred: " + err);

            }

            // node.liri.js spotify-this-song response     

            console.log("\n");

            console.log(chalk.red("==============LIRI FOUND THIS FOR AWESOME INFORMATION FOR YOU==============================\n"))

            console.log(chalk.green("Artist: " +data.tracks.items[0].album.artists[0].name));

            console.log(chalk.green("Song name: " +data.tracks.items[0].name));

            console.log(chalk.green("Preview link of the song from Spotify: " + data.tracks.items[0].preview_url));


            console.log(chalk.green("Album the song is from: " + data.tracks.items[0].album.name));

            console.log("\n");

            console.log(chalk.red("==============================================================================================\n"))

        }

    )

};

//Calling function for testing:  requestToSpotify ();

// Search OMDB API 

function searchOMDB() {

    // Request to OMDB API URL with the movie specified

    var queryURLOMDB = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=b09c3d30";



    // Request with axios to the OMDB API    

    axios.get(queryURLOMDB).then(

        function (response) {

            // node.liri.js movie-this response

            console.log("\n");

            console.log(chalk.red("==============LIRI FOUND THIS MOVIES INFO ONLY FOR YOU===============================\n"))

            console.log(chalk.green("Movie Title: " + response.data.Title));

            console.log(chalk.green("Year movie released: " + response.data.Year));

            console.log(chalk.green("IMDB Rating: " + response.data.imdbRating));

            console.log(chalk.green("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value));

            console.log(chalk.green("Country where movie was produced: " + response.data.Country));

            console.log(chalk.green("Movie langauge: " + response.data.Language));

            console.log(chalk.green("Movie plot: " + response.data.Plot));

            console.log(chalk.green("Actors in the movie: " + response.data.Actors));

            console.log("\n");

            console.log(chalk.red("**************************************************************************************\n"))

        }

    );

};

// Calling searchOMDB functioin for testing:  searchOMDB ();

//  Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call the spotify function for "I Want it That Way" using node liri.js do-what-it-says



function fsNodeRandom() {

    fs.readFile("./random.txt", "utf8", function (err, data) {

        if (err) {

            console.error(err)

            return

        }

        console.log(data)

        var txtInfo = data.split(',');

        requestToSpotify(txtInfo[1]);

    })


};
fs.appendFile('log.txt', "\n" + process.argv[2] + "," + process.argv[3], function (err) {
    if (err) throw err
    console.log('Saved!')
})
 // Calling function for testing:  fsNodeRandom ();