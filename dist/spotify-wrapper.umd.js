(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! exports provided: getAlbum, getAlbumTracks, getAlbums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbum", function() { return getAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumTracks", function() { return getAlbumTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/*  global fetch */


var getAlbum = function getAlbum(idAlbum) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(idAlbum), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
var getAlbumTracks = function getAlbumTracks(idAlbum) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(idAlbum, "/tracks"), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
var getAlbums = function getAlbums(idsAlbum) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums?ids=").concat(idsAlbum), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: API_URL, HEADERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
var TOKEN_API = 'BQDLyEoT9jhGUg_3h6A39KuIiUg5ytfHvoMrhLysWukoYAFAt_Wa-bDKod65CzNeC52AZPlS7julHPDwxOFzXE9CfDzuPTEbjXpoH5EiBWr2I5zhkZ0d4s7JGPsxdbaO5ffvYxlDHcLBKxsXzvpT';
var API_URL = 'https://api.spotify.com/v1';
var HEADERS = {
  headers: {
    Authorization: "'Bearer ".concat(TOKEN_API, "'")
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: searchAlbums, searchArtists, searchPlaylists, searchTracks, search, getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchAlbums", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchArtists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchPlaylists", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchPlaylists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchTracks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["search"]; });

/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ "./src/album.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbum", function() { return _album__WEBPACK_IMPORTED_MODULE_1__["getAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return _album__WEBPACK_IMPORTED_MODULE_1__["getAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbumTracks", function() { return _album__WEBPACK_IMPORTED_MODULE_1__["getAlbumTracks"]; });





/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: search, searchArtists, searchAlbums, searchTracks, searchPlaylists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return searchArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAlbums", function() { return searchAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return searchTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlaylists", function() { return searchPlaylists; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/*  global fetch */


var search = function search(query, type) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/search/q=").concat(query, "&type=").concat(type), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};
var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};
var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toJson = function toJson(data) {
  return data.json();
};

/* harmony default export */ __webpack_exports__["default"] = (toJson);

/***/ })

/******/ });
});
//# sourceMappingURL=spotify-wrapper.umd.js.map