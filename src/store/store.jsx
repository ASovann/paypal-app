import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counter'
import CartList from '../features/cart/cartList'

export default configureStore({
  reducer: {
      counter: counter,
      cartList: CartList 
  },
})