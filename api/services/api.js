import axios from 'axios'

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

  requestTo (path, queryString) {
    return this._api.get(`${path}/?api_token=${this._token}&${queryString}`)
  }
}

export default new Api('https://videocdn.tv/api/', 'kiyJlxCUQezkOuW8TOft1cHsyB9imwRi')
