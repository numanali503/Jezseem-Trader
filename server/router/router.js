const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const protectAPIsMiddleware = require('../middleware/protectAPI');

router.use(express.json({ limit: '10mb' }));
router.use(express.urlencoded({ limit: '10mb', extended: true }));

// * IMPORTING Controllers & Middlewares 😎 ===================================================
const { register, login } = require('../controller/auth-controller');
const { verifyAdminToken } = require('../middleware/verifyAdmin');
const { postInsights, getInsights } = require('../controller/insights-controller');
const { postTestimonial, getTestimonial } = require('../controller/testimonial-controller');
const { postPSLinks, getPSLinks } = require('../controller/psLink-controller');

// * CREATING Routes 😎 ====================================================================
router.route('/register').post(register);
router.route('/login').post(login);

router.route('/admin/authorization').post(verifyAdminToken, (req, res) => {
    res.json({ message: 'Access granted to protected route - Token Verified' });
});

router.route('/post-insight').post(postInsights);
router.route('/get-insight').get(getInsights);

router.route('/post-testimonial').post(postTestimonial);
router.route('/get-testimonial').get(getTestimonial);

router.route('/post-pslinks').post(postPSLinks);
router.route('/get-pslinks').get(getPSLinks);

module.exports = router;

