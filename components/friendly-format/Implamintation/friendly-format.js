/**
 * Returns numbers into a reader friendly format.
 *
 * *****************************************
 * friendlyFormat(12 , 1)          => 12
 * friendlyFormat(0 , 2)           => 0
 * friendlyFormat(1234 , 0)        => 1k
 * friendlyFormat(34567 , 2)       => 34.57k
 * friendlyFormat(918395 , 1)      => 918.4k
 * friendlyFormat(2134124 , 2)     => 2.13m
 * friendlyFormat(47475782130 , 2) => 47.48b
 *
 */
function friendlyFormat(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  let abbrev = ["k", "m", "b", "t"];

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {

    // Convert array index to "1000", "1000000", etc
    let size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round(number * decPlaces / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if ((number === 1000) && (i < abbrev.length - 1)) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += abbrev[i];

      break;
    }
  }
  return number;
}

module.exports = friendlyFormat;