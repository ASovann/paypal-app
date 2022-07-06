import { createSlice } from '@reduxjs/toolkit'

export const cartList = createSlice({
    name: 'cartList',
    initialState: {
      list: []
    },
    reducers:{
        addToList: (state, action) => {
            state.list= [...state.list, action.payload]
            console.log(state.list)
        },
        removeFromList: (state, action) => {
            state.list = [state.list.filter(item => item !== action.payload)]
        },
        emptyList: (state) => {
            state.list = []
        },
        updateAnItem: (state, action) => {
            state.list.map((item) => {
                if(item.id === action.payload.id){
                    
                }
            })
        }
    },
  })

export const { addToList, removeFromList, emptyList } = cartList.actions

export default cartList.reducer