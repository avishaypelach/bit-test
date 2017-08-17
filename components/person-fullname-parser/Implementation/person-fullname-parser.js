/**
 * Returns a user object that includes a separated firstName and a lastName,
 * after splitting a fullName string.
 */
function personFullNameParser(fullName) {
  let user = {};
  let names = fullName.split(' ');
  let namesLength = names.length;

  //checking if name entered contains at list 2 words.
  if (namesLength < 2) {
    throw new Error('please enter a fullName');
  }

  //checking if name entered contains exactly 2 words.
  if (namesLength === 2) {
    user.firstName = names[0];
    user.lastName = names[1];
  }

  //checking if name entered contains above 2 words
  if (namesLength > 2) {
    user.firstName = names.shift();
    user.lastName = names.pop();
    user.middleName = names.join(" ");
  }
  return user;
}

module.exports = personFullNameParser;