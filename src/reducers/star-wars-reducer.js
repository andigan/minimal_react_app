export default (state={starWarsCharacter: "not fetched yet"}, action) => {
  switch (action.type) {
    case "SET_LUKE":
      return {...state, starWarsCharacter: action.payload.starWarsCharacter }
    default:
      return state
  }
}
