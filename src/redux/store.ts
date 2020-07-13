import { createStore } from "redux"
import rootReducer from "./rootReducer"
import { setLanguageData } from "./appActions"

export const store = createStore(
  rootReducer
)

store.dispatch(setLanguageData('en'))

store.subscribe(() => {
  console.log(store.getState())
})
