const express = require('express');
const router = express.Router();

// traemos el model
const Place = require('../models/place');

// router.get('/', (req, res) => {
//     res.send('hello');
// });

// add
router.post('/add', async (req, res) => {
    const place = new Place(req.body);
    await place.save();
    res.redirect('/');
});

module.exports  = router;
