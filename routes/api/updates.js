const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Update = require('../../models/Update');

// @route   GET api/updates
// @desc    Get All Updates
// @acess   Public
router.get('/', (req,res) => {
    Update.find()
        .sort({date: -1})
        .then(updates => res.json(updates));
});

// @route   POST api/updates
// @desc    Create an Update
// @acess   Private
router.post('/', auth, (req,res) => {
    const newUpdate = new Update({
        headline: req.body.headline,
        description: req.body.description,

    });

    newUpdate.save().then( update => res.json(update));

});

// @route   DELETE api/updates/:id
// @desc    Delete a Update
// @acess   Private
router.delete('/:id', auth, (req,res) => {
    Update.findById(req.params.id)
        .then(update => update.remove().then( () => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}))
        
});

module.exports = router;