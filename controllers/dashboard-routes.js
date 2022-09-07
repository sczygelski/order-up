const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/view-reviews', withAuth, (req, res) => {
    Review.findAll({
        where: {
            // ID from the session
            user_id: req.session.user_id
        },

        attributes: [
            'id',
            'address',
            'review_content',
            'created_at'
        ],

        include: [
            {
                model: Address,
                attributes: ['id', 'review_text', 'review_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]


    })
        .then(dbReviewData => {
            // serialize data before passing to template
            const reviews = dbReviewData.map(review => review.get({ plain: true }));
            res.render('dashboard', { reviews, loggedIn: true });
        })
         .catch (err => {
         console.log(err);
         res.status(500).json(err);
     });
});


module.exports = router;