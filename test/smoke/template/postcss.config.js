const path = require('path');

module.exports = {
  plugins: [
    // 兼容浏览器，添加前缀
    require('autoprefixer')({
      overrideBrowserslist: [
        "defaults",
        "Android 4.1",
        "iOS 7",
        "Chrome>31",
        "ff>31",
        "ie>=8",
        "last 2 versions", // 所有主流浏览器最近2个版本
        ">1%"
      ],
      grid: true
    })
  ]
};