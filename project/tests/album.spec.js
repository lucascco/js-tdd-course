//getAlbum
//getAlbumTracks

import chai, { expect } from 'chai';
import { it, describe, beforeEach, afterEach } from 'mocha';
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { getAlbum, getAlbumTracks, getAlbums } from '../src/album';

chai.use(sinonChai);

global.fecth = require('node-fetch');

describe('Album',  () => {

  let stubeFetch;
  let promise;
  beforeEach(() => {
    stubeFetch = sinon.stub(global, 'fetch');
    promise = stubeFetch.resolves({json: () => ({album: 'name'})});
  });

  afterEach(() => {
    stubeFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAblum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubeFetch).to.have.been.calledOnce;
    });

    it('should call fecth with the correct URL', () => {
      const album = getAlbum('1V6a99EbTTIegOhWoPxYI9');
      expect(stubeFetch).to.have.been.calledOnceWith('https://api.spotify.com/v1/albums/1V6a99EbTTIegOhWoPxYI9');

      const album2 = getAlbum('3ZdkT5buYFi1WQaB0XNNtf');
      expect(stubeFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/3ZdkT5buYFi1WQaB0XNNtf');
    });

    it('should return the correct data from promise', () => {
      const album = getAlbum('1V6a99EbTTIegOhWoPxYI9');
      album.then(data =>
        expect(data).to.be.eql({album: 'name'}));
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fecth method', () => {
      const albumTracks = getAlbumTracks();
      expect(stubeFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albumTracks = getAlbumTracks('1V6a99EbTTIegOhWoPxYI9');
      expect(stubeFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/1V6a99EbTTIegOhWoPxYI9/tracks');

      const albumTracks2 = getAlbumTracks('3ZdkT5buYFi1WQaB0XNNtf');
      expect(stubeFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/3ZdkT5buYFi1WQaB0XNNtf/tracks');
    });

    it('should return the correct data from promise', () => {
      const albumTracks = getAlbumTracks('1V6a99EbTTIegOhWoPxYI9');
      albumTracks.then(data => expect(data).to.be.eql({album: 'name'}));
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const listAlbums = getAlbums();
      expect(stubeFetch).to.have.been.calledOnce;
    });

    it('should call  fetch with the correct URL', () => {
      const listAlbums = getAlbums(['1V6a99EbTTIegOhWoPxYI9', '3ZdkT5buYFi1WQaB0XNNtf']);
      expect(stubeFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums?ids=1V6a99EbTTIegOhWoPxYI9,3ZdkT5buYFi1WQaB0XNNtf');
    });

    it('should return the correct data from promise', () => {
      const albumTracks = getAlbums(['1V6a99EbTTIegOhWoPxYI9', '3ZdkT5buYFi1WQaB0XNNtf']);
      albumTracks.then(data => expect(data).to.be.eql({album: 'name'}));
    });
  });
});
