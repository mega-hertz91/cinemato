import express from 'express'
import moviesRouter from './routs/movies'
import serialsRouter from './routs/serials'
const app = express();

(() => {
  moviesRouter(app)
  serialsRouter(app)
})()

export default app
