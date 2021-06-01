const router = require('express').Router();
const { Saveddrink, User, Note } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all saveddrinks and JOIN with user data
    const saveddrinkData = await Saveddrink.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const saveddrinks = saveddrinkData.map((saveddrink) => saveddrink.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      saveddrinks, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/drinksearch', withAuth, (req, res) => {
  try {
    res.render ('drinksearch', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/drinkindividual', withAuth, (req, res) => {
  try {
    res.render ('drinkindividual', {
      logged_in: req.session.logged_in
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/saveddrink/:id', async (req, res) => {
  try {
    const saveddrinkData = await Saveddrink.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const saveddrink = saveddrinkData.get({ plain: true });

    res.render('saveddrink', {
      ...saveddrink,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
// HOW TO ALSO GET SAVEDDRINK
//


router.get('/profile', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Saveddrink }],
    });

    const user = userData.get({ plain: true });
    const saveddrinks = user.Saveddrinks;
    console.log(saveddrinks);
    
    
    res.render('profile', {
      ...user, saveddrinks,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
