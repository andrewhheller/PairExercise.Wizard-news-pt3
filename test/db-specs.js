const expect = require('chai').expect;

const {syncAndSeed, getAllPosts, getOnePost, searchPosts, deletePost, addPost} = require('../db');

describe('Wizard News Part 3 Data Tests', () => {

  beforeEach(async () => {

    try {
      await syncAndSeed();
    }
    catch (error) {
      throw error;
    }

    let userMap = {};

  });

  beforeEach(async () => {

    const posts = await getAllPosts();

    userMap = posts.reduce((accumulator, post) => {
      accumulator[post.name] = accumulator[post.name] || [];
      accumulator[post.name].push(post);
      return accumulator;
    }, {});

  })

  it('Bellatrix has a post', () => {

    try {
      expect(userMap.Bellatrix1[0].title).to.equal('Do you still use Alarte Ascendare?');
    }
    catch (error) {
      throw error;
    }

  });

  it('can get Bellatrix post by id', async () => {

    try {
      const post = await getOnePost(userMap.Bellatrix1[0].userid);
      expect(post.title).to.equal('Do you still use Alarte Ascendare?');
    }
    catch (error) {
      throw error;
    }

  });

  it('can search posts', async () => {

    try{
      const post = await searchPosts('Alarte');
      expect (post.length).to.be.greaterThan(0);
    }
    catch (error) {
      throw error;
    }

  });

  it('can delete a post', async () => {

    try {
      await deletePost(userMap.Bellatrix1[0].userid);
      const posts = await getAllPosts();
      console.log(posts);
      expect(posts.some(post => post.name === 'Bellatrix1')).to.equal(false);
    }
    catch (error) {
      throw error;
    }

  });

  it('can add a post', async () => {

    const post = await addPost('Ronald', 'Mend a Broken Wand', 'How to Mend a Broken Wand');
    // console.log(post);
    const posts = await getAllPosts();
    expect(posts.some(post => post.title === 'Mend a Broken Wand')).to.equal(true);

  });




})
