import  express from 'express';
import cors from 'cors';

import router from './routes/index';
import errorHandler from './middlewares/ErrorMiddleware';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.cors();
    this.error();
  }

  private config():void {
    this.app.use(express.json());
    this.app.use(router);
    }

    private error():void {
      this.app.use(errorHandler);
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