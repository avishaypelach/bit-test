import {expect} from 'chai';
import uuid from './uuid';

describe('uuid', () => {

  it('should return string for type of uuid', () => {
    expect(uuid()).to.be.a('string');
  });

  it('should return 36 for uuid length', () => {
    expect(uuid().length).to.equal(36)
  });

  it('should return 5 sub strings for uuid', () => {
    expect(uuid().split('-').length).to.equal(5)
  });

});