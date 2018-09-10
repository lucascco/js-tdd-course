
export const search = (query, type) => {
  const url = `https://api.spotify.com/v1/search/q=${query}&type=${type}`;
  return global.fetch(url)
    .then(data => data.json());
};

export const searchArtists = query =>
  search(query, 'artist');

export const searchAlbums = query =>
  search(query, 'album');

export const searchTracks = query =>
  search(query, 'track');

export const searchPlaylists = query =>
  search(query, 'playlist');
