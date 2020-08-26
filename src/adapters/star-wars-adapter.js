import axios from 'axios'

export default {
  hitStartWarsAPI: function () {

    return axios.get(`http://swapi.dev/api/people/1/`)
    .then( (response) => {
      console.log('response');
      return { starWarsCharacter: response.data.name }
    }).catch((err) => console.log(err))

  }
}
