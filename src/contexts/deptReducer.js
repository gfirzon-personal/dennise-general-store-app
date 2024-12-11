export default function reducer(state, action) {
  if (action.type == 'RECEIVED') {
      return {
          ...state,
          departments: action.payload,
          isLoading: false
      }
  }
  else if (action.type == 'DATA-REQUESTED') {
      return {
          ...state,
          isLoading: true
      }
  }
  return {
      ...state
  }
}