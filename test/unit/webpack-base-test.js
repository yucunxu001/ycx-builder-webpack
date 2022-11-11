/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-undef */

const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');

  console.log(baseConfig);

  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/yucunxu/Desktop/webpack-code/my-project/builder-webpack/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/yucunxu/Desktop/webpack-code/my-project/builder-webpack/test/smoke/template/src/search/index.js');
  });
});
