export default (state={starWarsCharacter: "no one"}, action) => {
  switch (action.type) {
    case "SET_LUKE":
      return {...state, starWarsCharacter: action.payload.starWarsCharacter }
    default:
      return state
  }
}
