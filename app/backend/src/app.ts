import  express from 'express';
import cors from 'cors';

import router from './routes/index';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.cors();
    this.router();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);

    this.app.use(express.json());

    }

    private router(): void {
      this.app.use(router);
    }

    private cors(): void {
      this.app.use(cors());
    }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  }
}

export { App };


export const { app } = new App();