const express = require('express');
const passport = require('passport');
const router = express.Router();

// Description: Auth with Google
// Route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// Description: Google auth callback
// Route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard');
});

// Description: Logout user
// Route GET /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) {
            return next(err)
        } else {
            res.redirect('/')
        }
    })
})


module.exports = router;