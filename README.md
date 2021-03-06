# Spotify Wrapper

[![Build Status](https://travis-ci.com/lucascco/js-tdd-course.svg?branch=master)](https://travis-ci.com/lucascco/js-tdd-course)

[![Coverage Status](https://coveralls.io/repos/github/lucascco/js-tdd-course/badge.svg?branch=master)](https://coveralls.io/github/lucascco/js-tdd-course?branch=master)

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install spotify-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

// using  method
spotify.search.artists('Incubus');
```

### CommonJS

```js
const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```



## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Lucas Corrêa](https://avatars2.githubusercontent.com/u/6581094?s=400&u=7dd4b067b7540c1f1341f536f4bfed204fb590e2&v=4)|
|:---------------------:|
|  [Lucas Corrêa](https://github.com/lucascco/)   |

See also the list of [contributors](https://github.com/lucascco/js-tdd-course /contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
