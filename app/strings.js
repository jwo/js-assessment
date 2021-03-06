stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    const acc = [];
    for (let i = 0; i < str.length; i += 1) {
      // are the lastN items all === str?
      // [5,6,7,8].slice(-2) gives you the last two items
      const lastNItems = acc.slice(amount * -1);

      // If there are fewer than $amount of items in acc, then we should push
      // _or_ if the last two items are _not_ the current letter, we can push that too
      if (lastNItems.length < amount || !lastNItems.every(a => a === str[i])) {
        acc.push(str[i]);
      }
    }
    return acc.join('');
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'bca'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    const acc = [];
    for (let i = str.length - 1; i >= 0; i -= 1) {
      acc.push(str[i]);
    }
    return acc.join('');
  },
};
