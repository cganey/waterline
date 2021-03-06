/**
 * Module dependencies
 */

// N/A


/**
 * isSafeNaturalNumber()
 *
 * Determine whether this value is a safe, natural number:
 * • `safe`            | `<= Number.MAX_SAFE_INTEGER`                             (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
 * • `natural`         | `> 0 && !== Infinity && !== NaN && Math.floor(x) === x`  (positive, non-zero, finite, round number.  In other words, no funny business -- aka "positive, non-zero integer")
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * @param {Ref} value
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * @returns {Boolean}
 */

module.exports = function isSafeNaturalNumber(value) {

  // Return false for:
  // • NaN
  // • Infinity / -Infinity
  // • 0 / -0
  // • fractions
  // • negative integers
  // • and integers greater than `Number.MAX_SAFE_INTEGER`
  //
  // Otherwise, return true!
  //
  // > For more on `Number.isSafeInteger()`, check out MDN:
  // > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
  return Number.isSafeInteger(value) && value > 0;

};
