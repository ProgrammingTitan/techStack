const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Greeting = require('../../models/Greeting');

// @route   GET api/greetings
// @desc    Get All greetings
// @acess   Public
router.get('/', (req,res) => {
    Greeting.find()
        .sort({date: -1})
        .then(greetings => res.json(greetings));
});

// @route   POST api/greetings
// @desc    Create a post
// @acess   Private
router.post('/', auth, (req,res) => {
    const newGreeting = new Greeting({
        headline: req.body.headline,
        description: req.body.description,
        imageURL: req.body.imageURL

    });

    newGreeting.save().then( greeting => res.json(greeting));

});

// @route   DELETE api/greetings/:id
// @desc    Delete a Greeting
// @acess   Private
router.delete('/:id', auth, (req,res) => {
    Greeting.findById(req.params.id)
        .then(greeting => greeting.remove().then( () => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}))
        
});

module.exports = router;