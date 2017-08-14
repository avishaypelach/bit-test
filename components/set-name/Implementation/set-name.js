/**
 * Returns a user object that includes a separated firstName and a lastName,
 * after splitting a fullName string.
 */
function setName(user, fullName) {
  let names = fullName.split(' ');
  let namesLength = names.length;

  if (namesLength === 2) {
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
  }
  if (namesLength > 2) {
    user.firstName = names.shift();
    user.lastName = names.pop();
    user.middleName = names.join(" ");
    return user;
  }
  if (namesLength < 2) {
    throw new Error('please enter a fullName');
  }
}

module.exports = setName;