import express from 'express';
import about from './about';
import home from './home';

const router = express.Router();


// define the home page route
router.use('/about', about);
// define the about route
router.use('/home', home);

module.exports = router;
