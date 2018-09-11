"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = exports.getAlbumTracks = exports.getAlbum = void 0;

var _config = _interopRequireDefault(require("./config"));

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  global fetch */
var getAlbum = function getAlbum(idAlbum) {
  return fetch("".concat(_config.default, "/albums/").concat(idAlbum)).then(_utils.default);
};

exports.getAlbum = getAlbum;

var getAlbumTracks = function getAlbumTracks(idAlbum) {
  return fetch("".concat(_config.default, "/albums/").concat(idAlbum, "/tracks")).then(_utils.default);
};

exports.getAlbumTracks = getAlbumTracks;

var getAlbums = function getAlbums(idsAlbum) {
  return fetch("".concat(_config.default, "/albums?ids=").concat(idsAlbum)).then(_utils.default);
};

exports.getAlbums = getAlbums;