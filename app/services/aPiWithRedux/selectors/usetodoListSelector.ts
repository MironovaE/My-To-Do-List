import type {RootState} from "~/services/aPiWithRedux/store";
import type {IToDoEntity} from "~/components/TODO/ToDoItem";

export const useTodoListSelector =(state: RootState): IToDoEntity[] => state.todo.todoList