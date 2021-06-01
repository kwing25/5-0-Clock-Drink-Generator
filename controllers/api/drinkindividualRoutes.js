const router = require('express').Router();
const { Saveddrink } = require('../../models');
const withAuth = require('../../utils/auth');



// router.get('/drinkindividual', withAuth, (req, res) => {
//     try {
//         res.render ('drinkindividual', {
//         logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
//     });

    router.post('/', withAuth, async (req, res) => {
        try {
            const newSaveddrink = await Saveddrink.create({
            ...req.body,
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