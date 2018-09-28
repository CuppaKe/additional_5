/**
 * Function checks brackets sequence on containing given config
 * @param {string} str - brackets sequence
 * @param {array} bracketsConfig - the array of pairs open-closed brackets
 * @return {boolean} correct brackets sequence or not
 */
module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  let string = str;
  const arr = bracketsConfig.map(smallarr => smallarr.join(''));

  while (string.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (string.includes(arr[i])) {
        string = string.replace(arr[i], '');
      }
    }

    if (arr.every(brackets => string.includes(brackets) === false)) break;
  }

  return string.length === 0;
};
