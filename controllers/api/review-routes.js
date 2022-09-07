const router = require("express").Router();
const { User, Review, Stars, Address } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Review.findAll({
        include: [
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
        
        review_content: req.body.review_content,
        address: req.body.address,
        user_id: req.session.user_id
    })
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
        console.log("review written")

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