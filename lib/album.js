"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;

function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(idAlbum) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(idAlbum));
    },
    getAlbumTracks: function getAlbumTracks(idAlbum) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(idAlbum, "/tracks"));
    },
    getAlbums: function getAlbums(idsAlbum) {
      return _this.request("".concat(_this.apiURL, "/albums?ids=").concat(idsAlbum));
    }
  };
}