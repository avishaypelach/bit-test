import {expect} from 'chai';
import portIp from './port-ip';

describe('port-ip', () => {
  let parts = portIp().split(":");
  let ip = parts[0].split(".");

  it('should return string for type of', () => {
    expect(portIp()).to.be.a('string');
  });

  it('should return 4 sub strings for port ip', () => {
    expect(portIp().split('.').length).to.equal(4);
  });

  it('should return 2 sub strings for port ip', () => {
    expect(portIp().split(':').length).to.equal(2);
  });

  it('should return true if the ip numbers are between 0 to 255', () => {
    for (let i of ip) {
      expect(parseInt(i)).to.be.within(0, 255);
    }
  });

  it('should return true if the port number is between 0 to 65535', () => {
    expect(parseInt(parts[1])).to.be.within(0, 65535);
  });
});