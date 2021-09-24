const path = require("path");
const parseJson = require("parse-json");

const getPluginItem = ({ inputStr }) => {
  const engines = parseJson(process.env.engines);

  let items = [];
  if (!inputStr) return { items };

  Object.keys(engines).forEach((engine) => {
    if (!engines[engine]) return;

    items.push({
      title: `Search '${inputStr.trim()}' on ${engine}`,
      subtitle: `${engines[engine]}${inputStr}`,
      arg: `${engines[engine]}${inputStr}`,
      icon: {
        path: `${__dirname}${path.sep}favicons${path.sep}${engine}.png`,
      },
    });
  });

  return {
    items,
    noSort: true,
  };
};

// Export a function that has inputStr as a argument.
module.exports = getPluginItem;