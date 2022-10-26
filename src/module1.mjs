// Need to define .mjs instead of .js for module or we may write type equals module in package.json file
const a = "Happy";
const b = "Joy";
const c = "Smily";
const d = "ecstacy";

export default d;
export {a};  // Curly braces are used to export things which are not by default exported
export {b};
export {c};
