import {
    resultFailureGetTodoList,
    resultSuccessGetTodoList,
    type IToDoEntityResult,
    resultFailureUpdateTodo,
    resultSuccessUpdateTodo, resultFailureRemoveTodo
} from "./mock/ToDoList";
import type {IToDoEntity} from "~/components/TODO/ToDoItem";


export const getTodoListApi = (): Promise<IToDoEntityResult> => new Promise((resolve, reject) => {
    const isError = Math.random() >= 0.5;

    setTimeout(() => {
        if (isError) {
            reject(new Error(resultFailureGetTodoList.error));
        } else {
            resolve(resultSuccessGetTodoList);
        }
    }, 1000);
});

export const updateTodoApi = (data: Partial<IToDoEntity>): Promise<IToDoEntityResult> => {
    console.log('REQUEST-UPDATE:', data)
    return new Promise((resolve, reject) => {
        const isError = Math.random() >= 0.5;

        setTimeout(() => {
            if (isError) {
                reject(new Error(resultFailureUpdateTodo.error));
            } else {
                resolve(resultSuccessUpdateTodo);
            }
        }, 1000);
    })
}

export const removeTodoApi = (data: Partial<IToDoEntity>): Promise<IToDoEntityResult> => {
    console.log('REQUEST-REMOVE:', data)
    return new Promise((resolve, reject) => {
        const isError = Math.random() >= 0.5;

        setTimeout(() => {
            if (isError) {
                reject(new Error(resultFailureRemoveTodo.error));
            } else {
                resolve(resultSuccessUpdateTodo);
            }
        }, 1000);
    })
}