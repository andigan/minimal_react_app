import starWarsAdapter from '../adapters/star-wars-adapter';

export function setBoxColor(color) {
  return {
    payload: color,
    type: "CHANGE_COLOR"
  }
}

export function getLuke() {
  const responsePromise = starWarsAdapter.hitStartWarsAPI()
return {
  // because of redux-promise, this will wait
  // to send until the responsePromise is resolved to response.data
  // from the userAdapter, and then send it to the users-reducer
  // to add to the store.

  // this needs to be a promise in order for redux-promise to work
  // it can't be a property on the promise like responseObject.name
  payload: responsePromise,
  type: "SET_LUKE"
}

}
