const express = require('express');

const router = new express.Router();


router.get('/api/user', (req, res) => {

    console.log("In User " + req.user);
    res.status(200).json({
        message: "You're authorized to see this secret message.",
        // user values passed through from auth middleware
        user: req.user
    });
});


module.exports = router;