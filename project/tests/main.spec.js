import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { it, describe, context, beforeEach, afterEach } from 'mocha';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from './../src/main';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('somoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {

    it('should call fetch  function', () => {
      search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const artists = search('Incubus', 'artist');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=artist');

      const albums = search('Incubus', 'album');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=album');

      const artistsAndAlbums = search('Incubus', ['artist', 'album']);
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=artist,album');
    });
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=artist');

      const artists2 = searchArtists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Muse&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=album');

      const albums2 = searchAlbums('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Muse&type=album');
    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=track');

      const tracks2 = searchTracks('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Muse&type=track');
    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=playlist');

      const playlists2 = searchPlaylists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search/q=Muse&type=playlist');
    });
  });
});
