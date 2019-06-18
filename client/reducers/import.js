import { IMPORT, UPDATE_EXTENSION } from '../actions/import'

const INITIAL_STATE = {
  extensions: {}
}

const importing = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EXTENSION:
      return {
        ...state,
        extensions: {
          ...state.extensions,
          ...action.extensions
        }
      }

    case IMPORT:
      let extension = action.importable.extension
      const records = state.extensions[extension].import(action.data)
      action.importable.handler(records)

    default:
      return state
  }
}

export default importing
