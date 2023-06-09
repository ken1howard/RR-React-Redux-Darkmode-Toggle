import { configureStore } from "@reduxjs/toolkit"
import styleReducer from './ducks/styleSlice'

export const store = configureStore({
    reducer:{
        style: styleReducer
    }
})