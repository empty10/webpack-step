const path = require("path");
const glob = require("glob");

const getEntry = (globPath) => {
  const entries = {};
  let tmp;
  let fileName;
  glob.sync(globPath).forEach((entry) => {
    if (/\.html/.test(entry)) {
      let basename = path.basename(entry);
      tmp = basename.split(".");
      fileName = tmp.shift();
    }
    if (/\.js/.test(entry)) {
      tmp = entry.split("/");
      fileName = tmp[tmp.length - 2];
    }

    entries[fileName] = entry;
  });

  return entries;
};

module.exports = {
  getEntry,
};
