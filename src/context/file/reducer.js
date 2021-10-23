export const uploadFileReducer = (state, action) => {
  if (action.type) {
    return {
      ...state,
      observationFile: action.payload,
    }
  }
  return state
}
