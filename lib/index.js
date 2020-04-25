module.exports = {
  copyToClipboard(str) {
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

  parseDate(date = "", seperator = "/") {
    let current_datetime = new Date(date);
    let formatted_date =
      current_datetime.getMonth() +
      1 +
      seperator +
      current_datetime.getDate() +
      seperator +
      current_datetime.getFullYear();
    return formatted_date;
  },
  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
  toCapitalize: (str = "") => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },
  isEven: (n) => {
    n = Number(n);
    return n === 0 || !!(n && !(n % 2));
  },
  setStorage(key, item) {
    window !== undefined ? window.localStorage.setItem(key, item) : null;
  },
  getStorage(key) {
    window !== undefined ? window.localStorage.getItem(key) : null;
  },
  removeStorage(key) {
    window !== undefined ? window.localStorage.removeItem(key) : null;
  },
  clearStorage(key) {
    window !== undefined ? window.localStorage.clearItem(key) : null;
  },
};
