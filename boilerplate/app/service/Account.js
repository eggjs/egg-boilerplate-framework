'use strict';

module.exports = app => (
  /**
   * Account Service
   */
  class Account extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.config = this.app.config.account;
    }

    * get(id) {
      return { id, name: this.config.key };
    }
  }
);
