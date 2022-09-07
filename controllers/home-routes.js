const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Review, } = require("../models");

// router.get("/", (req, res) => {
//   res.render("homepage");
// });

router.get('/', (req, res) => {
  Review.findAll({
    attributes: ['id', 'address', 'review_content', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => {
      const reviews = dbReviewData.map(allReviews => allReviews.get({ plain: true }));

      res.render('homepage', {
        reviews,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/api/reviews/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'address',
      'review_content',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: false });

      // pass data to template
      res.render('view-reviews', { post });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/api/reviews/:id', (req, res) => {
//   const post = {
//     id: 16,
//     address: 'https://handlebarsjs.com/guide/',
//     review_content: 'Handlebars Docs',
//     created_at: new Date(),
//   };

// res.render('view-reviews', { post });
// });


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
