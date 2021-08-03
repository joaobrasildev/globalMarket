import express from 'express';
import routes from './routes/routes';
import bodyParser from 'body-parser';

class Application {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.setupRoutes();
    }
    private setupRoutes() {
        this.app.use(routes);
    }
}

export default new Application().app;
