import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    resetAmount: (state) => {
        state.value = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, resetAmount } = counter.actions

export default counter.reducer