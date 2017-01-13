'use strict';

module.exports = appInfo => {
  const config = {};

  config.account = {
    key: appInfo.name + '_123456',
  };

  return config;
};
