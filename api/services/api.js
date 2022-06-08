import axios from 'axios'

const LIMIT = 24
class Api {
  constructor (baseURL, token) {
    this._token = token
    this._api = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        API_TOKEN: token
      }
    })
  }

  getMovies (path, page = 1) {
    return this._api.get(`${path}?api_token=${this._token}&page=${page}&limit=${LIMIT}`)
  }

  searchMovies (path, page, query) {
    return this._api.get(`${path}?api_token=${this._token}&page=${page}&query=${encodeURI(query)}&limit=${LIMIT}`)
  }

  lastAdded (path, page, query) {
    return this._api.get(`${path}?api_token=${this._token}&page=${page}&year=2021limit=${LIMIT}`)
  }
}

export default new Api('https://videocdn.tv/api/', 'kiyJlxCUQezkOuW8TOft1cHsyB9imwRi')
