import {useState, useTransition} from "react";
import {removeTodoApi} from "../API";
import type {IToDoEntity} from "~/components/TODO/ToDoItem";
import type {IToDoEntityResult} from "~/services/mock/ToDoList";

export const useRemoveTodo = () => {
    const [error, setError] = useState<string | undefined>();

    const [isPending, startTransition] = useTransition();

    const removeTodo = (data: Partial<IToDoEntity>) => {
        startTransition(async () => {
            try {
                const result: IToDoEntityResult = await removeTodoApi(data);
                setError(result?.error);
            } catch (error) {
                setError((error as Error).message)
            }
        });
    };

    return {removeTodo, error, isLoading: isPending};
};