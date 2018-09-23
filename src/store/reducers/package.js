import { ADD_PACKAGE } from '../actions'

export default function package (state = [], action) {
  switch (action.type) {
    case ADD_PACKAGE:
      return state
        .filter(item => item.id !== action.payload.id)
        .concat(action.payload)
    default:
      return state
  }
}
