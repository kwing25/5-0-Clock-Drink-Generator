const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/drinksearch', withAuth, (req, res) => {
    try {
      res.render ('drinksearch', {
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // router.get('/drinksearchindividual', withAuth, (req, res) => {
  //   try {
  //     res.render ('drinksearchindividual', {
  //       logged_in: req.session.logged_in
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

module.exports = router;