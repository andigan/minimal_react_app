import axios from 'axios'

export default {
  hitStartWarsAPI: function () {

  return axios.post(`https://swapi.co/api/people/1`)
    .then( (response) => {
      return { starWarsCharacter: response.data.name }
    })

  }
}
