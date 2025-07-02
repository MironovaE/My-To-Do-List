import {useEffect, useState, useTransition} from "react";
import {getTodoListApi} from "../API";
import type {IToDoEntity} from "~/components/TODO/ToDoItem";
import type {IToDoEntityResult} from "~/services/mock/ToDoList";

export const useGetTodoList = () => {
    const [todoList, setTodoList] = useState<IToDoEntity[] | undefined>();
    const [error, setError] = useState<string | undefined>();

    const [isPending, startTransition] = useTransition();

    const getTodoList = () => {
        startTransition(async () => {
            try {
                const result: IToDoEntityResult = await getTodoListApi();
                setTodoList(result?.data);
                setError(result?.error)
            } catch (error) {
                setError((error as Error).message)
                setTodoList(undefined);
            }
        });
    };

    return {getTodoList, todoList, error, isFetching: isPending};
};