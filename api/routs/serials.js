import { Router } from 'express'
import { ResponseStatus } from '../constants'
import api from '../services/api'

export default (app) => {
  const router = new Router()
  app.use('/serials', router)

  router.get('/', async (req, res) => {
    try {
      const { page, query } = req.query
      const films = await api.getMovies('tv-series', page, query)

      res
        .send(films.data)
        .status(ResponseStatus.SUCCESS)
    } catch (e) {
      res
        .send(e)
        .status(ResponseStatus.SERVER_ERROR)
    }
  })

  router.get('/search', async (req, res) => {
    try {
      const { page, query } = req.query
      const films = await api.searchMovies('tv-series', page, query)

      res
        .send(films.data)
        .status(ResponseStatus.SUCCESS)
    } catch (e) {
      res
        .send(e)
        .status(ResponseStatus.SERVER_ERROR)
    }
  })
}
