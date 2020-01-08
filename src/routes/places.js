const express = require('express');
const router = express.Router();

// traemos el model
const Place = require('../models/place');
// Place es un schema de la coleccion

// router.get('/', (req, res) => {
//     res.send('hello');
// });

// all places index
router.get('/', async (req, res) => {
    const places = await Place.find();
   res.render('places', {
       places
   });
});


// add form and post
router.get('/newPlace', (req, res) => {
    res.render('newPlace');
});

router.post('/add', async (req, res) => {
    const placeObject = new Place(req.body);
    await placeObject.save();
    console.log(placeObject);
    res.redirect('/');
});

// edit form and post
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const place = await Place.findById(id);
    res.render('editPlace', {
        place
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Place.update({id: id}, req.body);
    res.redirect('/');
});

// remove elements place by id
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Place.remove({id: id});
    res.redirect('/');
});

module.exports  = router;
