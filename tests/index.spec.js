import chai, { expect } from 'chai';
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai);

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper();
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({
      apiURL: 'blablabla'
    });
    expect(spotify.apiURL).to.be.equal('blablabla');
  });

  it('should user the default apiURL if not provided', () => {
    let spotify = new SpotifyWrapper();
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as options', () => {
    let spotify = new SpotifyWrapper({
      token: 'foo'
    });
    expect(spotify.token).to.be.equal('foo');
  });
});

describe('request method', () => {
  let stubeFetch;
  let promise;

  beforeEach(() => {
    stubeFetch = sinon.stub(global, 'fetch');
    promise = stubeFetch.resolves({json: () => ({album: 'name'})});
  });

  afterEach(() => {
    stubeFetch.restore();
  });

  it('should have request method', () => {
    let spotify = new SpotifyWrapper();
    expect(spotify.request).to.be.exist;
  });

  it('should call fetch when request', () => {
    let spotify = new SpotifyWrapper({
      token: 'foo'
    });
    spotify.request('url');
    expect(stubeFetch).to.be.calledOnce;
  });

  it('should call fetch with correct url', () => {
    let spotify = new SpotifyWrapper({
      token: 'foo'
    });
    spotify.request('url');
    expect(stubeFetch).to.be.calledWith('url');
  });


  it('should call fetch with correct headers passed', () => {
    let spotify = new SpotifyWrapper({
      token: 'foo'
    });

    const headers = {
      headers: {
        Authorization: `'Bearer foo'`,
      },
    };

    spotify.request('url');
    expect(stubeFetch).to.be.calledWith('url', headers);
  });

});
