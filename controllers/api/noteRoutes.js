const router = require('express').Router();
const { Note} = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/', withAuth, async (req, res) => {
    try {
    const newNote = await Note.update({
        ...req.body,
        user_id: req.session.user_id,
    });

    res.status(200).json(newNote);
    } catch (err) {
    res.status(400).json(err);
    }
});

module.exports = router;
