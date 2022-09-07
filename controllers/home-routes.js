const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Review, Stars, Address } = require("../models");

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

router.get('/reviews/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'address', 'review_content', 'created_at'],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['user_id']
    //   }
    // ]
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No post found with this id.' });
        return;
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('signup');
});


router.get('/dashboard', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('dashboard');
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
