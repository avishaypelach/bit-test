/**
 * Returns a user object that includes a separated firstName and a lastName,
 * after splitting a fullName string.
 */
function personFullNameParser(fullName) {
  let user = {};
  let names = fullName.split(' ');
  let namesLength = names.length;
  if (namesLength < 2) {
    throw new Error('please enter a fullName');
  }
  if (namesLength === 2) {
    user.firstName = names[0];
    user.lastName = names[1];
  }
  if (namesLength > 2) {
    user.firstName = names.shift();
    user.lastName = names.pop();
    user.middleName = names.join(" ");
  }
  return user;
}

module.exports = personFullNameParser;