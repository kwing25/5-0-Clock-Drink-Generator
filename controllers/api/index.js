const router = require('express').Router();
const userRoutes = require('./userRoutes');
const saveddrinkRoutes = require('./saveddrinkRoutes');
const noteRoutes = require('./noteRoutes');

router.use('/users', userRoutes);
router.use('/saveddrinks', saveddrinkRoutes);
router.use('/notes', noteRoutes);

module.exports = router;
