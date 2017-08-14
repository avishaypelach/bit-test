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

  it('should set firstName, lastName and middleName', () => {
    let user = {location: 'Tel Aviv', age: 3};
    let res = setName(user, 'Lee Ann Womack');

    expect(res).to.include({
      firstName: 'Lee',
      middleName: 'Ann',
      lastName: 'Womack'
    })
  });

  it('should set firstName, lastName and 2 words middleName', () => {
    let user = {location: 'Tel Aviv', age: 3};
    let res = setName(user, 'Lee Ann Ann Womack');

    expect(res).to.include({
      firstName: 'Lee',
      middleName: 'Ann Ann',
      lastName: 'Womack'
    })
  });

  it('should set firstName, lastName and 3 words middleName', () => {
    let user = {location: 'Tel Aviv', age: 3};
    let res = setName(user, 'Lee Ann Ann Ann Womack');

    expect(res).to.include({
      firstName: 'Lee',
      middleName: 'Ann Ann Ann',
      lastName: 'Womack'
    })
  });

});