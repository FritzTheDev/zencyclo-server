import express, { Application } from "express";

export class App {
  public app: Application;
  public port: number;

  constructor(controllers, port: number) {
    this.app = express();
    this.port = port;
  }

  private initializeMiddleware() {

  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    })
  }
}