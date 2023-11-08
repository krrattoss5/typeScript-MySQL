import express, { Application } from 'express'

// const app = express()

// app.listen(3000,()=>console.log('Server on http://localhost:3000'))

export class App {

  private app: Application;

  constructor(){
    this.app = express()
  }

  listen(){
    this.app.listen(3000)
  }
}