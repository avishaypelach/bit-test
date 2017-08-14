import {expect} from 'chai';
import checkEmail from '../Implementation/email-validation';

describe('emil validation', () => {

  it('should return true', () => {
    let res = checkEmail('avishay.pelach@gmail.com');

    expect(res).to.be.equal(true);
  });

  it('should return true for a valid email', () => {
    let res = checkEmail('avishay.pelach@gma-il.com');

    expect(res).to.be.equal(true);
  });

  it('1. should return false for incorrect email', () => {
    let res = checkEmail('avishay.pelachgmail.com');

    expect(res).to.be.equal(false);
  });

  it('2. should return false for incorrect email', () => {
    let res = checkEmail('avishaypelach@gmailcom');

    expect(res).to.be.equal(false);
  });

  it('3. should return false for incorrect email', () => {
    let res = checkEmail('{avishaypelach@gmailcom}');

    expect(res).to.be.equal(false);
  });

  it('4. should return false for incorrect email', () => {
    let res = checkEmail('avishay.pelach@gma/il.com');

    expect(res).to.be.equal(false);
  });

  it('5. should return false for incorrect email', () => {
    let res = checkEmail('avishay.pelach@5555555');

    expect(res).to.be.equal(false);
  });

});