import type { IToDoEntity } from '~/components/TODO/ToDoItem'
import type { RootState } from '~/services/aPiWithRedux/store'

export const useTodoListSelector = (state: RootState): IToDoEntity[] => state.todo.todoList
