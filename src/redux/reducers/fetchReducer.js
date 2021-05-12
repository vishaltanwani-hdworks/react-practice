import { FETCH_DATA } from "../actions/types"

const initialState = {
    matchesData: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          matchesData: action.payload,
        }
      default:
        return state
    }
  }
  