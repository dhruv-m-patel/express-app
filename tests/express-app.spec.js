import { expect, assert } from 'chai';
import request from 'supertest';
import ExpressApp from '../src/index';

const testApp = new ExpressApp();

describe('express-app', () => {
  it('should construct an app', (done) => {
    assert.ok(testApp, 'it should construct app');
    done();
  });

  it('should hydrate configuration', async () => {
    await testApp.configureApp();
    expect(testApp.config.get('port')).to.equal(8888);
  });

  it('should allow adding routes to app', (done) => {
    testApp.app.get('/resources', async (req, res) => {
      res.json({
        users: [{
          id: 123,
          firstName: 'Dhruv',
          lastName: 'Patel',
          email: 'dhruv.codelab@gmail.com',
        }],
      });
    });

    request(testApp.app)
      .get('/resources')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.users.length).to.equal(1);
        done();
      })
  });
});
