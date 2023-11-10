import express, { Application } from 'express'
import morgan from 'morgan'
// const app = express()

// app.listen(3000,()=>console.log('Server on http://localhost:3000'))

export class App {

  private app: Application;

  constructor(){
    this.app = express();
    this.middlewares()
  }

  middlewares(){
    this.app.use(morgan('dev'))
  }

  listen(){
    this.app.listen(3000,()=>console.log('listening on http://localhost:3000'))
  }
}