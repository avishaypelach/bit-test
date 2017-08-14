import {expect} from 'chai';
import setName from '../Implementation/set-name';

describe('set name', () => {

  it('should return object for typeof res', () => {
    let user = {location: 'Haifa', age: 38};
    let res = setName(user, 'Gadi Wilcherski');

    expect(typeof res).to.be.equal('object')
  });

  it('should set firstName and lastName', () => {
    let user = {location: 'Haifa', age: 38};
    let res = setName(user, 'Gadi Wilcherski');

    expect(res).to.include({
      firstName: 'Gadi',
      lastName: 'Wilcherski'
    })
  });

});