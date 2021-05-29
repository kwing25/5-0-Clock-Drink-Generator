const router = require('express').Router();
const withAuth = require('../../utils/auth');




router.get('/drinkindividual', withAuth, (req, res) => {
    try {
        res.render ('drinkindividual', {
        logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });