export default (state={boxColor: "#9147f3"}, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {...state, boxColor: action.payload }
    default:
      return state
  }
}
