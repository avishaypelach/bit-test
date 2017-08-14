/**
 * Returns a user object that includes a separated firstName and a lastName,
 * after splitting a fullName string.
 */
function setName(user, fullName) {
  let names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}

module.exports = setName;