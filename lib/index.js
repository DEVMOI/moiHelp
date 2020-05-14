const crypto = require("crypto");
module.exports = {
  /**
   *
   * @param {*} str
   */
  copyToClipboard: (str) => {
    const el = document.createElement("textarea"); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.left = "-9999px"; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
      document.getSelection().addRange(selected); // Restore the original selection
    }
  },
  /**
   * Converters
   */
  /**
   * CSV to JSON
   * @param {*} data
   * @param {*} delimiter
   */
  CSVToJSON: (data, delimiter = ",") =>
    data
      .slice(data.indexOf("\n") + 1)
      .split("\n")
      .map((v) =>
        data
          .slice(0, data.indexOf("\n"))
          .split(delimiter)
          .reduce(
            (obj, title, index) => (
              (obj[title] = v.replace(/(["])/g, "").split(delimiter)[index]),
              obj
            ),
            {}
          )
      ),
  /**
   * JsON to CSV
   */
  JSONtoCSV: (arr, columns, delimiter = ",") =>
    [
      columns.join(delimiter),
      ...arr.map((obj) =>
        columns.reduce(
          (acc, key) =>
            `${acc}${!acc.length ? "" : delimiter}"${
              !obj[key] ? "" : obj[key]
            }"`,
          ""
        )
      ),
    ].join("\n"),
  /**
   *  Remove from Array
   * @param {*} date
   * @param {*} seperator
   */
  remove: (arr, func) =>
    Array.isArray(arr)
      ? arr.filter(func).reduce((acc, val) => {
          arr.splice(arr.indexOf(val), 1);
          return acc.concat(val);
        }, [])
      : [],
  /**
   *
   * @param {*} date
   * @param {*} seperator
   */
  parseDate: (date = "", seperator = "/") =>
    new Date(date).getMonth() +
    1 +
    seperator +
    new Date(date).getDate() +
    seperator +
    new Date(date).getFullYear(),
  /**
   *
   */

  toCapitalize: (str) =>
    str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ),
  /**
   * VALIDATORS
   */
  /**
   *
   * @param {*} str
   */
  isJson: (str) => {
    // console.log(typeof str)
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
  /**
   *
   */
  isEven: (n) => {
    n = Number(n);
    return n === 0 || !!(n && !(n % 2));
  },
  isWindow: (func) => {
    try {
      window !== undefined;
    } catch (err) {
      console.log(err);
      return false;
    }
    if (typeof func == Function && window !== undefined) func();
    return true;
  },
  /**
   * STORAGE
   */

  /**
   *
   * @param {*} key
   * @param {*} item
   */
  setStorage: (key, item) => localStorage.setItem(key, item),
  /**
   *
   * @param {*} key
   */
  getStorage: (key) => localStorage.getItem(key),
  /**
   *
   * @param {*} key
   */
  removeStorage: (key) => localStorage.removeItem(key),
  /**
   *
   * @param {*} key
   */
  clearStorage: (key) => localStorage.clearItem(key),
  /**
   * CRYPTO
   */
  /**
   * @param {*} str
   */
  hash: (str) =>
    str
      .split("")
      .reduce(
        (hashCode, currentVal) =>
          (hashCode =
            currentVal.charCodeAt(0) +
            (hashCode << 6) +
            (hashCode << 16) -
            hashCode),
        0
      ),
  hashNode: (val) =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            require("crypto").createHash("sha256").update(val).digest("hex")
          ),
        0
      )
    ),
  getUID: require("./getUID"),
};
