import express, { Application } from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes'
import postRoutes from './routes/post.routes'
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
    this.app.use(express.urlencoded({extended:false}))
    this.app.use(express.json())
  }

  routes(){
    this.app.use(indexRoutes)
    this.app.use('/posts',postRoutes)
  }

  listen(){
    this.app.listen(3000,()=>console.log('listening on http://localhost:3000'))
  }
}