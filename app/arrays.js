arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  /**
   * Determine the sum of the items of arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
    let total = 0;
    arr.forEach((i) => {
      total += i;
    });
    return total;
  },

  /**
   * Create a new array with the same items as arr, excluding item
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
    return arr.filter(e => item !== e);
  },

  /**
   * Create a new array with the same items as arr, excluding item, returning same instance
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} The same array instance, but filtered down
   */
  removeWithoutCopy: function removeWithoutCopy(arr, item) {
    // Start by filtering the array into another array
    const filteredArray = arr.filter(i => i !== item);

    // Keep the `arr` array there, never assigning over it
    // set the 1,3,4 to be the elements of the arr
    // this leaves some original elements in the array that we want to cut off
    for (let i = 0; i < filteredArray.length; i += 1) {
      arr[i] = filteredArray[i]; // eslint-disable-line no-param-reassign
    }
    // Cut off the arrays extra slots by pop
    // using pop helps keep the instance "alive" and the same as in the tests
    while (arr.length > filteredArray.length) {
      arr.pop();
    }
    return arr;
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
    arr.push(item);
    return arr;
  },

  /**
   * Removes a number, item, from the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
    arr.pop();
    return arr;
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
    arr.unshift(item);
    return arr;
  },

  /**
   * Removes the first element from an array
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
    arr.shift();
    return arr;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   *
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
    return arr1.concat(arr2);
  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {
    const firstSection = arr.slice(0, index);
    const lastSection = arr.slice(index);
    return firstSection.concat(item).concat(lastSection);
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
    return arr.filter(i => item === i).length;
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {
    const dupes = arr.reduce((counts, i) => {
      counts[i] = (counts[i] || 0) + 1; // eslint-disable-line no-param-reassign
      return counts;
    }, {});

    // Using Object.keys since 98% usage http://kangax.github.io/compat-table/es5/#test-Object.keys
    // (and we're using let/const)
    return Object.keys(dupes)
      .filter(key => dupes[key] > 1)
      .map(i => parseInt(i, 10));
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
    return arr.map(i => i * i);
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
    const indices = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === target) {
        indices.push(i);
      }
    }
    return indices;
  },
};
