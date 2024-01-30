import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoslice"

export const store = configureStore({
    reducer: todoReducer
})

//useSelector  state s value mangwana
//useDispatch state m value bhejna