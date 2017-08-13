export default (state={pageColor: ""}, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {...state, pageColor: action.payload }
    default:
      return state
  }
}
