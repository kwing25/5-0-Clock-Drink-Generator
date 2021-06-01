const router = require('express').Router();
const { Saveddrink } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const drink = JSON.parse(req.body.drinkSave)
    const newSaveddrink = await Saveddrink.create({
      drink_name: drink,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSaveddrink);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const saveddrinkData = await Saveddrink.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!saveddrinkData) {
      res.status(404).json({ message: 'No cocktail found with this id!' });
      return;
    }

    res.status(200).json(saveddrinkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
