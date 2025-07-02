import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getTodoListApi, removeTodoApi, updateTodoApi} from "~/services/API";
import type {IToDoEntity} from "~/components/TODO/ToDoItem";
import {ERROR_MESSAGE_UNKNOWN} from "~/services/mock/ToDoList";

// Включаем моки (для разработки)
const IS_MOCK = process.env.NODE_ENV === 'development';

const endpointMethods = {
    getTodoList: () => getTodoListApi(),
    updateTodo: (data: Partial<IToDoEntity>) => updateTodoApi(data),
    removeTodo: (data: Partial<IToDoEntity>) => removeTodoApi(data),
};


const baseQueryHandler = async (
    args: any,
    api: any,
    extraOptions: any,
) => {
    try {
        let result
        if (IS_MOCK) {
            result = await endpointMethods[api.endpoint as keyof typeof endpointMethods](args?.data);
        } else {
            result = await fetchBaseQuery({baseUrl: '/api/'})(args, api, extraOptions);

            // Проверка наличия ошибки
            if ('error' in result && result.error) {
                // @ts-ignore
                throw new Error(result.error?.message ?? ERROR_MESSAGE_UNKNOWN);
            }
        }
        return {data: result?.data}

    } catch (error) {
        return error instanceof Error ? {error: error.message} : {error: String(error)}
    }
};

export const coreApi = createApi({
    reducerPath: 'coreApi',
    baseQuery: baseQueryHandler,
    endpoints: () => ({}),
})