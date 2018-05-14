import supertest from 'supertest';

import server from '../../server/server';

describe('App Server', () => {
  let app;
  let request;

  beforeAll((done) => {
    app = server.listen();
    request = supertest(app);
    done();
  });

  afterAll((done) => {
    server.close();
    done();
  });

  test('should respond to /search', () => (
    request
      .get('/search')
      .expect(200)
  ));
});
