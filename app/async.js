asyncAnswers = { // eslint-disable-line no-undef
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   *
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return {
      then: (fn) => {
        fn(value);
      },
    };
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   *
   *
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    return {
      then: (fn) => {
        fetch(url)
          .then(r => r.json())
          .then(json => json.people.map(p => p.name))
          .then(names => names.sort())
          .then(fn);
      },
    };
  },
};
