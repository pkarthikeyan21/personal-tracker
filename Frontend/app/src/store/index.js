import { configureStore } from '@reduxjs/toolkit'
import reducers from "@store/reducers"
export default configureStore({ reducer: reducers});