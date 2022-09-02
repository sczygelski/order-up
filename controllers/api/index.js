const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// Uncomment these below when routes.js files are setup
// const addressRoutes = require('./address-routes');
// const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
// Uncomment these below when routes.js files are setup
// router.use('/addresses', addressRoutes);
// router.use('/reviews', reviewRoutes);

module.exports = router;