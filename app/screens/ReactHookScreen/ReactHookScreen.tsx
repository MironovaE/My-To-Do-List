import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Alert } from '~/components/Alert/Alert'
import { CircularProgress } from '~/components/CircularProgress/CircularProgress'
import { FabButton } from '~/components/FabButton/FabButton'
import type { IToDoEntity } from '~/components/TODO/ToDoItem'
import { ToDoList } from '~/components/TODO/ToDoList/ToDoList'
import { useGetTodoList } from '~/services/apiWithoutRedux/useGetTodoList'
import { useRemoveTodo } from '~/services/apiWithoutRedux/useRemoveTodo'
import { useUpdateTodo } from '~/services/apiWithoutRedux/useUpdateTodo'

import '../../components/CircularProgress/circularProgress.styles.css'

export const ReactHookScreen: React.FC = () => {
  const { getTodoList, todoList: result, error: errorGetTodoList, isFetching } = useGetTodoList()
  const { updateTodo, error: errorUpdateTodo, isLoading } = useUpdateTodo()
  const { removeTodo, error: errorRemoveTodo, isLoading: isRemoving } = useRemoveTodo()

  const [todoList, setTodoList] = React.useState<IToDoEntity[]>([])
  const [store, setStore] = React.useState<IToDoEntity[]>(result || [])

  useEffect(() => {
    getTodoList()
  }, [])

  useEffect(() => {
    setTodoList(result || [])
    setStore(result || [])
  }, [result])

  // Если update прошел неуспешно откатить изменения
  useEffect(() => {
    if (errorUpdateTodo || errorRemoveTodo) {
      setTodoList(store)
    } else {
      setStore(todoList)
    }
  }, [errorUpdateTodo, errorRemoveTodo])

  const error = errorGetTodoList || errorUpdateTodo || errorRemoveTodo
  const isPending = isFetching || isLoading || isRemoving

  const handleAddItem = () => {
    const newTotoItem = { id: uuidv4() }
    setTodoList([newTotoItem, ...todoList])
  }
  const handleChangeItem = (newTodoItem: IToDoEntity) => {
    const newTodoList = todoList.map(item => (item.id === newTodoItem.id ? { ...item, ...newTodoItem } : item))
    setTodoList(newTodoList)
  }

  const handleRemoveItem = (todoItemId: string) => {
    const newTodoList = todoList.filter(item => item.id !== todoItemId)
    setTodoList(newTodoList)
    removeTodo({ id: todoItemId })
  }

  const handleSaveItem = (newTodoItem: IToDoEntity) => updateTodo(newTodoItem)

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

      <Alert isVisible={!!error} message={error!} type="error" />
    </>
  )
}
