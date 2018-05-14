const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');

module.exports = () => {
  const entry = {
    production: [`${SRC_DIR}/index.jsx`],
    development: ['webpack-hot-middleware/client', `${SRC_DIR}/index.jsx`],
  };

  return entry[process.env.NODE_ENV];
};
