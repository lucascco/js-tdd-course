global.fetch = require('node-fetch');

import SpotifyWrapper from './../src/index';

let spotify = new SpotifyWrapper({
  token: 'Your token spotify here',
});
const albums = spotify.search.albums('Incubus');;

albums.then(data => console.log(data));
