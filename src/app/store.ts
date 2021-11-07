import { configureStore } from '@reduxjs/toolkit'
import { customersSlice } from '../features/customer-slice'
import { reservationsSlice } from '../features/reservation-slice'

export const store = configureStore({
  reducer: {
    reservations: reservationsSlice.reducer,
    customers: customersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
