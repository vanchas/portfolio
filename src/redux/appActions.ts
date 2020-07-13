import { languages } from "../data/Languages"

export const SET_LANGUAGE_DATA: string = "APP/SET_LANGUAGE_DATA"
export const SCROLL_TO_ELEMENT: string = "APP/SCROLL_TO_ELEMENT"

export const setLanguageData = (lang: string) => ({
  type: SET_LANGUAGE_DATA,
  payload: lang === "en"
    ? languages.en
    : languages.ru
})

export const scrollToElementFunc = (ref: string) => ({
  type: SCROLL_TO_ELEMENT,
  payload: ref
})
