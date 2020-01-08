const express = require('express');
const router = express.Router();

// traemos el model
const Place = require('../models/place');

// router.get('/', (req, res) => {
//     res.send('hello');
// });

// all places index


router.get('/', (req, res) => {
   res.render('places');
});

// add
router.post('/add', async (req, res) => {
    const place = new Place(req.body);
    await place.save();
    res.redirect('/');
});

module.exports  = router;
