const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Review, } = require("../models");

// router.get("/", (req, res) => {
//   res.render("homepage");
// });



router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  });
});


router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});


router.get('/add-review', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('add-review');
});

router.get('/view-reviews', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('view-reviews');
});

module.exports = router;
