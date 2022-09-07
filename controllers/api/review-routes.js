const router = require("express").Router();
const { User, Review, Stars, Address } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'rating'
        ],
    
        include: [
            {
                model: Address,
                attributes: ['id', 'houseNumber', 'street', 'city', 'state'],
                // include: {
                //     model: User,
                //     attributes: ['username']
                // }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
        
    })
            .then(dbReviewData => res.json(dbReviewData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
});

router.post('/', withAuth, (req, res) => {
    // expects => {review_text: "This is the review", user_id: 1, "something besides 'post_id'?""}
    Review.create({
        review_text: req.body.review_text,
        user_id: req.session.user_id,
        //post_id: req.body.post_id
    })
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbReviewData => {
            if (!dbReviewData) {
                res.status(404).json({ message: 'No review found with this id!' });
                return;
            }
            res.json(dbReviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;