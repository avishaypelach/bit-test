/**
 * # Checks which browser user is working on according to browser data.
 * Functions (each returns bool):
 * Chrome
 * Opera
 * FireFox
 * Safari
 * Edge
 * @example
 * ```js
 * whichBrowser.Chrome() => true/false
 * whichBrowser.Opera() => true/false
 * whichBrowser.FireFox() => true/false
 * whichBrowser.Safari() => true/false
 * whichBrowser.Edge() => true/false
 * ```
 */
const whichBrowser = {
  getUserAgent: () => {
    return navigator.appVersion;
  },
  chrome: function () {
    return /Chrome/i.test(whichBrowser.getUserAgent());
  },
  opera: function () {
    return /Opera/i.test(whichBrowser.getUserAgent());
  },
  fireFox: function () {
    return /fireFox/i.test(whichBrowser.getUserAgent());
  },
  safari: function () {
    return /safari/i.test(whichBrowser.getUserAgent());
  },
  edge: function () {
    return /edge/i.test(whichBrowser.getUserAgent());
  }
};

module.exports = whichBrowser;