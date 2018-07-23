const expect = require('chai').expect;

const supertest = require('supertest');
const app = supertest(require('../app.js'));

describe('routes', () => {

  it('main route exists and contains database data', () => {
  
    return app.get('/')
      .expect(200)
      .then(response => {
        expect(response.text).to.contain('Wizarding');
      });

  });

  it('individual post route exists and contains database data', () => {

    return app.get('/posts/8')
      .expect(200)
      .then(response => {
        expect(response.text).to.contain('muggle')
      });

    });

  it('can search for text', () => {

    return app.post('/search')
      .send('name=muggle')
      .expect(200)
      .then(response => {
        expect(response.text).to.contain('muggle');
      });

  });

  it('can delete a post', () => {

    return app.delete('/posts/6')
      .expect(302)
      .then(response => {
        expect(response.text).to.not.contain('The complete quidditch statistics')
      });

  });



  




});
