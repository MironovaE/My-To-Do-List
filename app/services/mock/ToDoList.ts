import { v4 as uuidv4 } from 'uuid'

import type { IToDoEntity } from '~/components/TODO/ToDoItem'

export interface IToDoEntityResult {
  data?: IToDoEntity[]
  error?: string
}

const ERROR_MESSAGE = 'Ошибка'
export const ERROR_MESSAGE_UNKNOWN = 'Неизвестная ошибка!'
export const mockToDoList: IToDoEntity[] = [
  {
    id: uuidv4(),
    label: 'Повторить JS',
    status: true,
  },
  {
    id: uuidv4(),
    label: 'Выучить React',
    status: false,
  },
  {
    id: uuidv4(),
    label: 'Выучить Redux',
    status: false,
  },
  {
    id: uuidv4(),
    label: 'Не сойти с ума',
    status: false,
  },
]

export const resultSuccessGetTodoList: IToDoEntityResult = {
  data: mockToDoList,
}

export const resultFailureGetTodoList: IToDoEntityResult = {
  error: `${ERROR_MESSAGE} получения данных`,
}

export const resultSuccessUpdateTodo: IToDoEntityResult = {}

export const resultFailureUpdateTodo: IToDoEntityResult = {
  error: `${ERROR_MESSAGE} обновления данных`,
}

export const resultFailureRemoveTodo: IToDoEntityResult = {
  error: `${ERROR_MESSAGE} удаления данных`,
}
