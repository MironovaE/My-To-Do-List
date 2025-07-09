import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import type { IToDoEntity } from '~/components/TODO/ToDoItem'
import { todoListApi } from '~/services/aPiWithRedux/todoListApi'

type TodoState = {
  todoList: IToDoEntity[]
}

const initialState: TodoState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: state => {
      const newToDoItem: IToDoEntity = { id: nanoid() }
      state.todoList.push(newToDoItem) // Добавляем новое задание
    },
    changeItem: (state, action: PayloadAction<IToDoEntity>) => {
      state.todoList = state.todoList.map((item: IToDoEntity) =>
        item.id === action.payload.id ? action.payload : item,
      )
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(item => item.id !== action.payload)
    },
  },
  extraReducers(builder) {
    builder.addMatcher(todoListApi.endpoints.getTodoList.matchFulfilled, (state, action) => {
      state.todoList = action.payload
    })
  },
})

export const { addItem, changeItem, removeItem } = todoSlice.actions

export default todoSlice.reducer
