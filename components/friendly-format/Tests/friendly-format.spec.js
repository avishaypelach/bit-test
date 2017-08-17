import {expect} from 'chai';
import friendlyFormat from '../Implamintation/friendly-format';

describe('friendly format', () => {

  it('should be equal to a 3', () => {
    let res = friendlyFormat(3, 10);

    expect(res).to.be.equal(3);
  });

  it('should be equal to a 1.122k', () => {
    let res = friendlyFormat(1122, 3);

    expect(res).to.be.equal('1.122k');
  });

  it('should be equal to a 1.12m', () => {
    let res = friendlyFormat(1122334, 2);

    expect(res).to.be.equal('1.12m');
  });

  it('should be equal to a 1.122334m', () => {
    let res = friendlyFormat(1122334, 6);

    expect(res).to.be.equal('1.122334m');
  });

  it('should be equal to a 1b', () => {
    let res = friendlyFormat(1000000000, 3);

    expect(res).to.be.equal('1b');
  });

  it('should be equal to a 11.223t', () => {
    let res = friendlyFormat(11223344556677, 3);

    expect(res).to.be.equal('11.223t');
  });

});