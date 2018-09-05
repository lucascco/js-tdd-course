import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { it, describe, context, beforeEach, afterEach } from 'mocha';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from './../src/main';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  describe('somoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist();
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist();
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist();
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist();
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist();
    });
  });

  describe('Generic Search', () => {
    let fetchedStub;
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => {} });
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch  function', () => {
      search();
      expect(fetchedStub).to.have.been.calledOnce();
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        search('Incubus', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=artist');

        search('Incubus', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=album');
      });

      context('passing more than one type', () => {
        search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search/q=Incubus&type=artist,album');
      });
    });

    it('should return', () => {
      search();
      expect(fetchedStub).to.have.been.calledOnce();
    });
  });
});
