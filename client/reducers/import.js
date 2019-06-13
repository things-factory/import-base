import { IMPORT, UPDATE_EXTENSION } from '../actions/import'

const INITIAL_STATE = {
  //extensions object will be updated using UPDATE_EXTENSION when ui-<<type>> is bootstrapping
  extensions: {}
}

const importing = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMPORT:
      //checking the extension state, and carry out import function
      state.extensions[action.extension].import(action.params)

    case UPDATE_EXTENSION:
      return {
        ...state,
        extensions: {
          ...state.extensions,
          ...action.extensions
        }
      }

    default:
      return state
  }
}

export default importing
