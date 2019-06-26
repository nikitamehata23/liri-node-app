# liri-node-app

https://github.com/nikitamehata23/liri-node-apps

# About this Project
- This project is a command line node app that takes in parameters and returns data. The project involved developing an iPhone-like Interface, named LIRI, and akin to iPhone's Siri. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. The app involved use of multiple APIs (Bands in Town, Spotify, and OMDb), along wiith installing and using several NPM (node package manager) packages.

## Before you get started, make sure you have these node packages installed:

  # Dotenv: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

 # Command Line: 'npm install dotenv'

 # Request: - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

 # Command Line: 'npm install request'

 # Moment: - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

 # Command Line: 'npm install moment'

 # Fs: - a built in node package

 # (npm i request)

*************************************************************************************************************************************
# What Each Command Does
1. node liri.js concert-this <artist/band name here>
-This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

*Name of the venue

*Venue location

*Date of the Event (use moment to format this as "MM/DD/YYYY")

![Screenshot (23)](https://user-images.githubusercontent.com/50224446/60144464-09f66580-9788-11e9-83d1-dcb6b6025c10.png)
![Screenshot (26)](https://user-images.githubusercontent.com/50224446/60144468-111d7380-9788-11e9-8afe-1f9cdf025f15.png)

***********************************************************************************************************************************
2. node liri.js spotify-this-song ''
This will show the following information about the song in your terminal/bash window
# Artist(s)
# The song's name
# A preview link of the song from Spotify

- The album that the song is from

- If no song is provided then your program will default to "The Sign" by Ace of Base. You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API. The Spotify API requires you sign up as a developer to generate the necessary credentials.

You can follow these steps in order to generate a client id and client secret:

a. Step One: Visit https://developer.spotify.com/my-applications/#!/

b. Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

c. Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields.

 When finished, click the "complete" button.

d. Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

![Screenshot (19)](https://user-images.githubusercontent.com/50224446/60144731-2d6de000-9789-11e9-8d94-3f1883b6ec90.png)
![Screenshot (18)](https://user-images.githubusercontent.com/50224446/60144737-2f37a380-9789-11e9-81ed-5ab0cf1fcb9f.png)

***********************************************************************************************************************************
3. node liri.js movie-this ''
-This will output the following information to your terminal/bash window: * Title of the movie. * Year the movie came out. * IMDB Rating of the movie. * Rotten Tomatoes Rating of the movie. * Country where the movie was produced.

# Language of the movie. * Plot of the movie. * Actors in the movie.

- If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key.

## The image is Below:

![Screenshot (21)](https://user-images.githubusercontent.com/50224446/60143893-08c43900-9786-11e9-882f-cde72aa35517.png)
![Screenshot (22)](https://user-images.githubusercontent.com/50224446/60144203-28a82c80-9787-11e9-970a-628512302057.png)

4. node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. Edit the text in random.txt to test out the feature for movie-this and concert-this.
![Screenshot (33)](https://user-images.githubusercontent.com/50224446/60145590-24324280-978c-11e9-826a-db94f93c81d2.png)
![Screenshot (32)](https://user-images.githubusercontent.com/50224446/60145516-e6351e80-978b-11e9-9a77-a9f4ec347d1b.png)


## Technologies Used

Node-Spotify-API, 
Axios, 
OMDB API,         
Bands In Town API,
Moment,
DotEnv
