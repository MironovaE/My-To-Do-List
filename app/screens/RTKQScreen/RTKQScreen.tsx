import React from 'react'

import { Alert } from '~/components/Alert/Alert'
import { CircularProgress } from '~/components/CircularProgress/CircularProgress'
import { FabButton } from '~/components/FabButton/FabButton'
import type { IToDoEntity } from '~/components/TODO/ToDoItem'
import { ToDoList } from '~/components/TODO/ToDoList/ToDoList'
import { useAppDispatch } from '~/services/aPiWithRedux/hooks/useAppDispatch'
import { useAppSelector } from '~/services/aPiWithRedux/hooks/useAppSelector'
import { useTodoListSelector } from '~/services/aPiWithRedux/selectors/usetodoListSelector'
import { useGetTodoListQuery, useRemoveTodoMutation, useUpdateTodoMutation } from '~/services/aPiWithRedux/todoListApi'
import { addItem, changeItem, removeItem } from '~/services/aPiWithRedux/todoSlice'

export const RTKQScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const { error: errorGetTodoList, isFetching } = useGetTodoListQuery()
  const [updateTodo, { error: errorUpdateTodo, isLoading }] = useUpdateTodoMutation()
  const [removeTodo, { error: errorRemoveTodo, isLoading: isRemoving }] = useRemoveTodoMutation()

  const todoList = useAppSelector(useTodoListSelector)

  const error = errorGetTodoList || errorUpdateTodo || errorRemoveTodo
  const isPending = isFetching || isLoading || isRemoving

  const handleAddItem = () => {
    dispatch(addItem())
  }
  const handleChangeItem = (newTodoItem: IToDoEntity) => {
    dispatch(changeItem(newTodoItem))
  }

  const handleSaveItem = (newTodoItem: IToDoEntity) => updateTodo(newTodoItem)

  const handleRemoveItem = (todoItemId: string) => {
    dispatch(removeItem(todoItemId))
    removeTodo({ id: todoItemId })
  }

  return (
    <>
      <CircularProgress
        isVisible={isPending}
        message={isLoading || isRemoving ? 'Сохраняю изменения' : 'Обновляю данные'}
      />
      <FabButton onClick={handleAddItem} />

      {!isPending && (
        <ToDoList
          todoList={todoList}
          onChangeItem={handleChangeItem}
          onSaveItem={handleSaveItem}
          onRemoveItem={handleRemoveItem}
        />
      )}

      <Alert isVisible={!!error} message={error as string} type="error" />
    </>
  )
}
