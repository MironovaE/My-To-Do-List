import { configureStore } from '@reduxjs/toolkit'
import {todoListApi} from "~/services/aPiWithRedux/todoListApi";
import todoReducer from "~/services/aPiWithRedux/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        [todoListApi.reducerPath]: todoListApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoListApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch