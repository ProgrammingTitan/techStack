const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Headline = require('../../models/Headline');

// @route   GET api/headlines
// @desc    Get All Headlines
// @acess   Public
router.get('/', (req,res) => {
    Headline.find()
        .sort({date: -1})
        .then(headlines => res.json(headlines));
});

// @route   POST api/headlines
// @desc    Create a post
// @acess   Private
router.post('/', auth, (req,res) => {
    const newHeadline = new Headline({
        headline: req.body.headline,
        description: req.body.description,
        imageURL: req.body.imageURL

    });

    newHeadline.save().then( headline => res.json(headline));

});


// @route   DELETE api/healdines/:id
// @desc    Delete a Headline
// @acess   Private
router.delete('/:id', auth, (req,res) => {
    Headline.findById(req.params.id)
        .then(headline => headline.remove().then( () => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}))
        
});

module.exports = router;