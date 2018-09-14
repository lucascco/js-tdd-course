
export default function album() {
  return {
    getAlbum: idAlbum => this.request(`${this.apiURL}/albums/${idAlbum}`),
    getAlbumTracks: idAlbum => this.request(`${this.apiURL}/albums/${idAlbum}/tracks`),
    getAlbums: idsAlbum => this.request(`${this.apiURL}/albums?ids=${idsAlbum}`),
  };
}
