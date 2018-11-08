import RestifyRouter from 'restify-router';  

const Router = RestifyRouter.Router;
const router = new Router();

// define the home page route
router.get('/about', (req, res) => {
  res.json(200, { message: 'About api router df' });
});
// define the about route
router.get('/about/v1', (req, res) => {
  res.json(200, { message: 'About about api router' });
});

router.get('/about/*', (req, res) => {
  res.json(404, { error: 'not found' });
});

module.exports = router;
