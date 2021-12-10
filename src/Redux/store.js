import { configureStore } from '@reduxjs/toolkit'
import reducerContacts  from './Counter/counter-reducer'

export const store = configureStore({
  reducer: {
    contacts: reducerContacts
  }
})