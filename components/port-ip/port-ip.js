/**
 * Returns a random ip port of the form xxx(ip).xxx(ip).xxx(ip).xxx(ip):xxxxxx(port),
 * where each ip part is replaced with a random number from 0 to 255, and
 * port is replaced with a random number from 0 to 65535.
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function portIp() {
  return(
    `${getRandomIntInclusive(0, 255)}` +
    '.' +
    `${getRandomIntInclusive(0, 255)}` +
    '.' +
    `${getRandomIntInclusive(0, 255)}` +
    '.' +
    `${getRandomIntInclusive(0, 255)}` +
    ':' +
    `${getRandomIntInclusive(0, 65535)}`);
}

module.exports = portIp;

