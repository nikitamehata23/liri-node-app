#liri-node-app

https://github.com/nikitamehata23/liri-node-apps

#About this Project
-This project is a command line node app that takes in parameters and returns data. The project involved developing an iPhone-like Interface, named LIRI, and akin to iPhone's Siri. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. The app involved use of multiple APIs (Bands in Town, Spotify, and OMDb), along wiith installing and using several NPM (node package manager) packages.

#What Each Command Does
1. node liri.js concert-this <artist/band name here>
-This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

*Name of the venue

*Venue location

*Date of the Event (use moment to format this as "MM/DD/YYYY")
![Screenshot (30)](https://user-images.githubusercontent.com/50224446/60144377-bf74e900-9787-11e9-983f-e9702ebe7dd6.png)
![Screenshot (31)](https://user-images.githubusercontent.com/50224446/60144307-7755c680-9787-11e9-91f6-e2592e239117.png)

2. node liri.js spotify-this-song ''
This will show the following information about the song in your terminal/bash window
#Artist(s)
#The song's name
#A preview link of the song from Spotify

-The album that the song is from

-If no song is provided then your program will default to "The Sign" by Ace of Base. You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API. The Spotify API requires you sign up as a developer to generate the necessary credentials.

You can follow these steps in order to generate a client id and client secret:

a.Step One: Visit https://developer.spotify.com/my-applications/#!/

b.Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

c.Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields.

 When finished, click the "complete" button.

d.Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

3. node liri.js movie-this ''
-This will output the following information to your terminal/bash window: * Title of the movie. * Year the movie came out. * IMDB Rating of the movie. * Rotten Tomatoes Rating of the movie. * Country where the movie was produced.

#Language of the movie. * Plot of the movie. * Actors in the movie.

-If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key.

##The image is Below:

![Screenshot (21)](https://user-images.githubusercontent.com/50224446/60143893-08c43900-9786-11e9-882f-cde72aa35517.png)
![Screenshot (22)](https://user-images.githubusercontent.com/50224446/60144203-28a82c80-9787-11e9-970a-628512302057.png)

4. node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. Edit the text in random.txt to test out the feature for movie-this and concert-this.
