export default (state={boxColor: "blue"}, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {...state, boxColor: action.payload }
    default:
      return state
  }
}
