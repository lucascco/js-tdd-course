
let fetch = require('node-fetch');

export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search/q=${query}&type=${type}`)
  .then((data) => data.json());

export const searchAlbums = () => {

};

export const searchTracks = () => {

};

export const searchPlaylists = () => {

};

export const searchArtists = () => {

};
