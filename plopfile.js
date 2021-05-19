const { componentGenerator } = require('./.plop/index.js');

module.exports = plop => {
  const settings = {
    basePath: `.plop`
  };

  componentGenerator(plop, settings);
};
