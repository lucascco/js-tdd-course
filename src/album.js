/*  global fetch */

import { API_URL, HEADERS } from './config';
import toJson from './utils';

export const getAlbum = idAlbum =>
  fetch(`${API_URL}/albums/${idAlbum}`, HEADERS).then(toJson);

export const getAlbumTracks = idAlbum =>
  fetch(`${API_URL}/albums/${idAlbum}/tracks`, HEADERS).then(toJson);

export const getAlbums = idsAlbum =>
  fetch(`${API_URL}/albums?ids=${idsAlbum}`, HEADERS).then(toJson);
