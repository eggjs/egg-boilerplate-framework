'use strict';

module.exports = appInfo => {
  const exports = {};

  exports.account = {
    key: appInfo.name + '_123456',
  };

  return exports;
};
