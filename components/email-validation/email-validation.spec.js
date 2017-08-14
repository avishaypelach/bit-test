import {expect} from 'chai';
import checkEmail from './emil-validation';

describe('emil-validation', () => {

  it('should return email', () => {
    let res = checkEmail('avishay.pelach@gmail.com');

    expect(res).to.be.equal('avishay.pelach@gmail.com');
  });

  it('should return 2 sub strings for email', () => {
    let res = checkEmail('avishay.pelach@gmail.com');

    expect(res.split('@').length).to.equal(2);
  });

  it('should return false for incorrect email', () => {
    let res = checkEmail('avishay.pelachgmail.com');

    expect(res).to.be.equal(false);
  });

  it('should return false for incorrect email', () => {
    let res = checkEmail('avishaypelach@gmailcom');

    expect(res).to.be.equal(false);
  });

  it('should return false for incorrect email', () => {
    let res = checkEmail('{avishaypelach@gmailcom}');

    expect(res).to.be.equal(false);
  });

  it('should return false for incorrect email', () => {
    let res = checkEmail('avishay.pelach@5555555');

    expect(res).to.be.equal(false);
  });

});