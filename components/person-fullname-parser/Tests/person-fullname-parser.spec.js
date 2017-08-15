import {expect} from 'chai';
import personFullNameParser from '../Implementation/person-fullname-parser';

describe('person fullName parser', () => {

  it('should return object for typeof res', () => {
    let res = personFullNameParser('Gadi Wilcherski');

    expect(typeof res).to.be.equal('object')
  });

  it('should set firstName and lastName', () => {
    let res = personFullNameParser('Gadi Wilcherski');

    expect(res).to.include({
      firstName: 'Gadi',
      lastName: 'Wilcherski'
    })
  });

  it('should set firstName, lastName and middleName', () => {
    let res = personFullNameParser('Lee Ann Womack');

    expect(res).to.include({
      firstName: 'Lee',
      middleName: 'Ann',
      lastName: 'Womack'
    })
  });

  it('should set firstName, lastName and 2 words middleName', () => {
    let res = personFullNameParser('Lee Ann Ann Womack');

    expect(res).to.include({
      firstName: 'Lee',
      middleName: 'Ann Ann',
      lastName: 'Womack'
    })
  });

  it('should set firstName, lastName and 3 words middleName', () => {
    let res = personFullNameParser('Lee Ann Ann Ann Womack');

    expect(res).to.include({
      firstName: 'Lee',
      middleName: 'Ann Ann Ann',
      lastName: 'Womack'
    })
  });

});