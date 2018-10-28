import RestifyRouter from 'restify-router';  

const Router = RestifyRouter.Router;
const router = new Router();

// define the home page route
router.get('/api/home', (req, res) => {
  res.json(200, { message: 'Home api router' });
});

// define the about route
router.get('/api/home/v1', (req, res) => {
  res.json(200, 'Home v1 api router');
});

router.get('/api/home/*', (req, res) => {
  res.json(404, { error: 'not found' });
});

module.exports = router;
