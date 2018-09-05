
export const search = (query, type) => {
  const url = `https://api.spotify.com/v1/search/q=${query}&type=${type}`;
  console.log(url, query, type);
  return global.fetch(url)
    .then(data => data.json());

}

export const searchArtists = (query) => 
  search(query, 'artist');

export const searchAlbums = () => console.log('searchAlbums');

export const searchTracks = () => console.log('searchTracks');

export const searchPlaylists = () => console.log('searchPlaylists');

