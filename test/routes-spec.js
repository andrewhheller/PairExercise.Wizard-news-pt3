const expect = require('chai').expect;

const supertest = require('supertest');
const app = supertest(require('../app.js'));

const {syncAndSeed, getAllPosts} = require('../db');



describe('Wizard News Part 2 Routing and Data Tests', () => {

  beforeEach(async () => {

    try{
      await syncAndSeed();
    }
    catch (error) {
      throw error;
    }

  });

  it('can access database OK', async () => {

    try{
      const posts = await getAllPosts();
      // console.log(posts);
      expect(posts.length).to.be.greaterThan(0);
    }
    catch (error) {
      throw error;
    }


  })

  it('can view all posts', () => {
  
    return app.get('/')
      .expect(200)
      .then(response => {
        expect(response.text).to.contain('Wizarding');
      });

  });

  it('can view a specific post', () => {

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
