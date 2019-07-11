const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const FeaturedAd = require('../../models/FeaturedAd');

// @route   GET api/featuredAds
// @desc    Get All Featured Ads
// @acess   Public
router.get('/', (req,res) => {
    FeaturedAd.find()
        .sort({date: -1})
        .then(featuredAds => res.json(featuredAds));
});

// @route   POST api/featuredAds
// @desc    Create a post
// @acess   Private
router.post('/', auth, (req,res) => {
    const newAd = new FeaturedAd({
        headline: req.body.headline,
        description: req.body.description,
        imageURL: req.body.imageURL

    });

    newAd.save().then( ad => res.json(ad));

});


// @route   DELETE api/featuredAds/:id
// @desc    Delete a FeaturedAd
// @acess   Private
router.delete('/:id', auth, (req,res) => {
    FeaturedAd.findById(req.params.id)
        .then(ad => ad.remove().then( () => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}))
        
});
module.exports = router;