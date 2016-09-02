'use strict';

module.exports = function* homeController() {
  const user = yield this.service.account.get(123);
  yield this.render('home.tpl', { user });
};
