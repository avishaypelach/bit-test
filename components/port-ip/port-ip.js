function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function portIp() {
  return `${getRandomIntInclusive(0, 255)}` +
    '.' +
    `${getRandomIntInclusive(0, 255)}` +
    '.' +
    `${getRandomIntInclusive(0, 255)}` +
    '.' +
    `${getRandomIntInclusive(0, 255)}` +
    ':' +
    `${getRandomIntInclusive(0, 65535)}`;
}

module.exports = portIp;

