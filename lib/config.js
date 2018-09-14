"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQC4XTd83m3czHkynwGBeglb7SQTMRMXQBVKGuxQwbOsHqOWwblaBoX326w9ssighO_rWjfWk-eRRVA5tmEbmkV1AhM7fyMG8Xx4p10DHrnaeyD8mVtBrc79GMBAmw99Ihw2y10haK4YagzC_wMq';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "'Bearer ".concat(TOKEN_API, "'")
  }
};
exports.HEADERS = HEADERS;