import {useState, useTransition} from "react";
import { updateTodoApi} from "../API";
import type {IToDoEntity} from "~/components/TODO/ToDoItem";
import type {IToDoEntityResult} from "~/services/mock/ToDoList";

export const useUpdateTodo = () => {
    const [error, setError] = useState<string | undefined>();

    const [isPending, startTransition] = useTransition();

    const updateTodo = (data: Partial<IToDoEntity>) => {
        startTransition(async () => {
            try {
                const result: IToDoEntityResult = await updateTodoApi(data);
                setError(result?.error);
            } catch (error) {
                setError((error as Error).message)
            }
        });
    };

    return {updateTodo, error, isLoading: isPending};
};