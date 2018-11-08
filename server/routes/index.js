import about from './about';
import home from './home';

function attachRoutes(server) {
    about.applyRoutes(server, '/api');
    home.applyRoutes(server, '/api');
}

module.exports = attachRoutes;
