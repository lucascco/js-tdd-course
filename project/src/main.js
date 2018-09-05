
global.fetch = require('node-fetch');

export const search = (query, type) =>
  global.fetch(`https://api.spotify.com/v1/search/q=${query}&type=${type}`)
    .then(data => data.json());

export const searchAlbums = () => console.log('searchAlbums');

export const searchTracks = () => console.log('searchTracks');

export const searchPlaylists = () => console.log('searchPlaylists');

export const searchArtists = () => console.log('searchArtists');
