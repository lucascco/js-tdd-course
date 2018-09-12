"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQDLyEoT9jhGUg_3h6A39KuIiUg5ytfHvoMrhLysWukoYAFAt_Wa-bDKod65CzNeC52AZPlS7julHPDwxOFzXE9CfDzuPTEbjXpoH5EiBWr2I5zhkZ0d4s7JGPsxdbaO5ffvYxlDHcLBKxsXzvpT';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "'Bearer ".concat(TOKEN_API, "'")
  }
};
exports.HEADERS = HEADERS;