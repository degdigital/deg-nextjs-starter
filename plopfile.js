const componentGenerator = require('./.plop/Component.generator.js');

module.exports = plop => {
  const settings = {
    basePath: `.plop`
  };

  componentGenerator(plop, settings);
};
