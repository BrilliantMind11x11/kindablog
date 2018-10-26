const express = require('express');

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});
// define the home page route
router.get('/', (req, res) => {
  res.status(200).send('About api router df');
});
// define the about route
router.get('/v1', (req, res) => {
  res.status(200).send('About about api router');
});

router.get('/*', (req, res) => {
  res.status(404).send({ error: 'not found' });
});

module.exports = router;
