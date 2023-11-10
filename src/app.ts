import express, { Application } from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes'
// const app = express()

// app.listen(3000,()=>console.log('Server on http://localhost:3000'))

export class App {

  private app: Application;

  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(morgan('dev'))
  }

  routes(){
    this.app.use(indexRoutes)
  }

  listen(){
    this.app.listen(3000,()=>console.log('listening on http://localhost:3000'))
  }
}