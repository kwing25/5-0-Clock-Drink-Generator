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

router.post('/new', (req, res) => {
    // console.log(req)
    Note.create({
        note_description: req.body.value,
        user_id: req.session.user_id
    }).then(dataEntry => {
        res.json(dataEntry)
    })
})

router.get('/', (req, res) => {
    Note.findAll({
        where: {
            user_id: req.session.user_id
        }
    }).then(data => {
        res.json(data)
    })
})
module.exports = router;
