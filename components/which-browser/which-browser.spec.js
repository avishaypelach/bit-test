import {expect} from 'chai';
import sinon from 'sinon';
import whichBrowser from './which-browser';

let userAgent = '';

describe('which browser', () => {

  before(() => {
    sinon.stub(whichBrowser, 'getUserAgent').callsFake(() => {
      return userAgent;
    });
  });

  it('Chrome should return true for Chrome userAgent', () => {
    userAgent = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';

    expect(whichBrowser.chrome()).to.be.equal(true);
  });

  it('Chrome should return false for non Chrome userAgent', () => {
    userAgent = 'Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50';

    expect(whichBrowser.chrome()).to.be.equal(false);
  });

  it('Opera should return true for Opera userAgent', () => {
    userAgent = 'Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50';

    expect(whichBrowser.opera()).to.be.equal(true);
  });

  it('Opera should return false for non Opera userAgent', () => {
    userAgent = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';

    expect(whichBrowser.opera()).to.be.equal(false);
  });

  it('FireFox should return true for fireFox userAgent', () => {
    userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0';

    expect(whichBrowser.fireFox()).to.be.equal(true);
  });

  it('FireFox should return false for non fireFox userAgent', () => {
    userAgent = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2';

    expect(whichBrowser.fireFox()).to.be.equal(false);
  });

  it('Safari should return true for safari userAgent', () => {
    userAgent = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2';

    expect(whichBrowser.safari()).to.be.equal(true);
  });

  it('Safari should return false for non safari userAgent', () => {
    userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0';

    expect(whichBrowser.safari()).to.be.equal(false);
  });

  it('Edge should return true for edge userAgent', () => {
    userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393';

    expect(whichBrowser.edge()).to.be.equal(true);
  });

  it('Edge should return false for non edge userAgent', () => {
    userAgent = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2';

    expect(whichBrowser.edge()).to.be.equal(false);
  });

});