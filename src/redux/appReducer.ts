import { AnyAction } from "redux"
import { SET_LANGUAGE_DATA, SCROLL_TO_ELEMENT } from "./appActions"

const initialState = {
  language: null,
  scrollToElement: 'Khoroshevskyi Ivan'
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {

    case SET_LANGUAGE_DATA:
      return { ...state, language: action.payload }

    case SCROLL_TO_ELEMENT:
      return { ...state, scrollToElement: action.payload }

    default:
      return state
  }
}
