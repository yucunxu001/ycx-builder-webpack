/* eslint-disable no-undef */
/* eslint-disable global-require */
// eslint-disable-next-line no-undef
const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('builderr-webpack test case', () => {
  require('./unit/webpack-base-test');
});
