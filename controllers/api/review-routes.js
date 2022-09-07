const router = require("express").Router();
const { User, Review, Stars, Address } = require('../../models');
const sequelize = require("../../config/connection");
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

router.post('/', (req, res) => {
    Review.create({
<<<<<<< HEAD
        
        review_content: req.body.review_content,
=======
>>>>>>> 2ace5a4bc51508da1d85564ecbff04575480cf99
        address: req.body.address,
        review_content: req.body.review_content,
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