const router = require('express').Router();
const userRoutes = require('./userRoutes');
const saveddrinkRoutes = require('./saveddrinkRoutes');
const noteRoutes = require('./noteRoutes');
const drinksearchRoutes = require('./drinksearchRoutes')
const drinkindividualRoutes = require('./drinkindividualRoutes')

router.use('/users', userRoutes);
router.use('/saveddrinks', saveddrinkRoutes);
router.use('/notes', noteRoutes);
// router.use('/drinksearch', drinksearchRoutes);
// router.use('/drinkindividual', drinkindividualRoutes);

module.exports = router;
