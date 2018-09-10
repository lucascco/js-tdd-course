/*  global fetch */

import API_URL from './config';
import toJson from './utils';

export const getAlbum = idAlbum =>
  fetch(`${API_URL}/albums/${idAlbum}`).then(toJson);

export const getAlbumTracks = idAlbum =>
  fetch(`${API_URL}/albums/${idAlbum}/tracks`).then(toJson);

export const getAlbums = idsAlbum =>
  fetch(`${API_URL}/albums?ids=${idsAlbum}`).then(toJson);
