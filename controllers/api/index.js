const router = require('express').Router();
const userRoutes = require('./userRoutes');
const saveddrinkRoutes = require('./saveddrinkRoutes');
const noteRoutes = require('./noteRoutes');
const drinksearchRoutes = require('./drinksearchRoutes')

router.use('/users', userRoutes);
router.use('/saveddrinks', saveddrinkRoutes);
router.use('/notes', noteRoutes);
router.use('/drinksearch', drinksearchRoutes);

module.exports = router;
