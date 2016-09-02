'use strict';

const path = require('path');
const request = require('supertest');
const mm = require('egg-mock');

describe('test/framework/view.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'example',
      customEgg: path.join(__dirname, '../../'),
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
    .get('/')
    .expect('hi, egg')
    .expect(200);
  });
});

