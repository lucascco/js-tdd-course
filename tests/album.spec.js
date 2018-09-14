//getAlbum
//getAlbumTracks

import chai, { expect } from 'chai';
import { it, describe, beforeEach, afterEach } from 'mocha';
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai);

global.fecth = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Album',  () => {
  let spotify;
  let stubeFetch;
  let promise;
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    stubeFetch = sinon.stub(global, 'fetch');
    promise = stubeFetch.resolves({json: () => ({album: 'name'})});
  });

  afterEach(() => {
    stubeFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(spotify.album.getAlbumTracks).to.exist;
    });

    it('should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });
  });

  describe('getAblum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubeFetch).to.have.been.calledOnce;
    });

    it('should call fecth with the correct URL', () => {
      const album = spotify.album.getAlbum('1V6a99EbTTIegOhWoPxYI9');
      expect(stubeFetch).to.have.been.calledOnceWith('https://api.spotify.com/v1/albums/1V6a99EbTTIegOhWoPxYI9');

      const album2 = spotify.album.getAlbum('3ZdkT5buYFi1WQaB0XNNtf');
      expect(stubeFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/3ZdkT5buYFi1WQaB0XNNtf');
    });

    it('should return the correct data from promise', () => {
      const album = spotify.album.getAlbum('1V6a99EbTTIegOhWoPxYI9');
      album.then(data =>
        expect(data).to.be.eql({album: 'name'}));
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fecth method', () => {
      const albumTracks = spotify.album.getAlbumTracks();
      expect(stubeFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albumTracks = spotify.album.getAlbumTracks('1V6a99EbTTIegOhWoPxYI9');
      expect(stubeFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/1V6a99EbTTIegOhWoPxYI9/tracks');

      const albumTracks2 = spotify.album.getAlbumTracks('3ZdkT5buYFi1WQaB0XNNtf');
      expect(stubeFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/3ZdkT5buYFi1WQaB0XNNtf/tracks');
    });

    it('should return the correct data from promise', () => {
      const albumTracks = spotify.album.getAlbumTracks('1V6a99EbTTIegOhWoPxYI9');
      albumTracks.then(data => expect(data).to.be.eql({album: 'name'}));
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const listAlbums = spotify.album.getAlbums();
      expect(stubeFetch).to.have.been.calledOnce;
    });

    it('should call  fetch with the correct URL', () => {
      const listAlbums = spotify.album.getAlbums(['1V6a99EbTTIegOhWoPxYI9', '3ZdkT5buYFi1WQaB0XNNtf']);
      expect(stubeFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums?ids=1V6a99EbTTIegOhWoPxYI9,3ZdkT5buYFi1WQaB0XNNtf');
    });

    it('should return the correct data from promise', () => {
      const albumTracks = spotify.album.getAlbums(['1V6a99EbTTIegOhWoPxYI9', '3ZdkT5buYFi1WQaB0XNNtf']);
      albumTracks.then(data => expect(data).to.be.eql({album: 'name'}));
    });
  });
});
