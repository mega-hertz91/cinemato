import express from 'express'
import api from './services/api'
const app = express();

(() => {
  app.use('/movies', async (req, res) => {
    try {
      const response = await api.requestTo('movies', req.originalUrl.split('?').pop())
      res
        .send(response.data)
    } catch (e) {
      res
        .status(500)
        .send(e)
    }
  })

  app.use('/serials', async (req, res) => {
    try {
      const response = await api.requestTo('tv-series', req.originalUrl.split('?').pop())

      res
        .send(response.data)
    } catch (e) {
      res
        .status(500)
        .send(e)
    }
  })

  app.use('/short', async (req, res) => {
    try {
      const response = await api.requestTo('short', req.originalUrl.split('?').pop())

      res
        .send(response.data)
    } catch (e) {
      res
        .status(500)
        .send(e)
    }
  })
})()

export default app
