const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const addressRoutes = require('./address-routes');
const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
router.use('/addresses', addressRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;