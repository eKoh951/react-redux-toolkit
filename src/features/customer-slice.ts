import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Customer {
  name: string
  dishes: string[]
  id: string
}

interface CustomersState {
  value: Customer[]
}

interface AddDishPayload {
  dish: string
  id: string
}

const initialState: CustomersState = {
  value: [],
}

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addDishToTable: (
      state,
      { payload: { id, dish } }: PayloadAction<AddDishPayload>
    ) => {
      const customerTable = state.value.find((customer) => customer.id === id)
      if (!customerTable) return //TODO output err message

      customerTable.dishes.push(dish)
    },
  },
})

export const { addCustomer, addDishToTable } = customersSlice.actions
export default customersSlice.reducer
