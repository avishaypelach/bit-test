/**
 * Returns an email if input is a string, that starts with english letters
 * (uppercase or lowercase) or numbers,
 * after '@' sign should get to other parts of strings separated with a '.' that can include
 * english letters (uppercase or lowercase) or numbers.
 */
function checkEmail(email) {
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email)) {
    return false;
  } else {
    return email;
  }
}

module.exports = checkEmail;