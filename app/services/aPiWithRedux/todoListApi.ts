import type { IToDoEntity } from '~/components/TODO/ToDoItem'
import { coreApi } from '~/services/aPiWithRedux/coreApi'
import type { IToDoEntityResult } from '~/services/mock/ToDoList'

export const todoListApi = coreApi.enhanceEndpoints({ addTagTypes: ['Todo'] }).injectEndpoints({
  endpoints: builder => ({
    getTodoList: builder.query<IToDoEntity[], void>({
      query: () => {
        return {
          url: '/todo/list',
          method: 'post',
        }
      },
      providesTags: ['Todo'],
    }),
    updateTodo: builder.mutation<IToDoEntityResult, Partial<IToDoEntity>>({
      query: (data: IToDoEntity) => {
        return {
          url: '/todo/list/update',
          method: 'post',
          data,
        }
      },
      invalidatesTags: ['Todo'],
    }),
    removeTodo: builder.mutation<IToDoEntityResult, Partial<IToDoEntity>>({
      query: (data: Partial<IToDoEntity>) => {
        return {
          url: '/todo/list/remove',
          method: 'post',
          data,
        }
      },
      invalidatesTags: ['Todo'],
    }),
  }),
})

export const { useGetTodoListQuery, useUpdateTodoMutation, useRemoveTodoMutation } = todoListApi
