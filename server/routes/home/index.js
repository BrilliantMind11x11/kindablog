import RestifyRouter from 'restify-router';  

const Router = RestifyRouter.Router;
const router = new Router();

// define the home page route
router.get('/home', (req, res) => {
  res.json(200, { message: 'Home api router' });
});

// define the about route
router.get('/home/v1', (req, res) => {
  res.json(200, { message: 'Home v1 api router' });
});

router.get('/home/*', (req, res) => {
  res.json(404, { error: 'not found' });
});

module.exports = router;
