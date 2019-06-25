
// Exports spotify ID and SECRET to liri.js

// console.log('this is loaded');
module.exports = {}
module.exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

module.exports.bandsintown = {
    id: process.env.BANDSINTOWN_ID
}

module.exports.omdb = {
    id: process.env.OMDB_ID
}

module.exports.mapquest = {
    id: process.env.MAPQUEST_ID
}