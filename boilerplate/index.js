'use strict';

const path = require('path');
const egg = require('egg');
const EGG_PATH = Symbol.for('egg#eggPath');

class Application extends egg.Application {
  get [EGG_PATH]() {
    return path.join(__dirname);
  }
}

module.exports = Object.assign({}, egg, {
  Application,
});
