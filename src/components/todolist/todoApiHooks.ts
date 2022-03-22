import axios, { AxiosError } from "axios";
import { Todo } from "models/todo";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useTodosQuery = () => {
    return useQuery<Todo[], AxiosError>('todos', async () => {
        const res = await axios.get<Todo[]>('/todos');
        return res.data;
    })
}

export const useSaveTodoMutation = () => {
    const QueryClient = useQueryClient();

    return useMutation('todo', async (data: Todo) => {
        const res = await axios.request({
            method: data.id ? 'put' : 'post',
            url: `/todos/${data.id ? data.id : ''}`,
            data
        })
        return res.data;
    }, {
        onSuccess(data, vars) {
            QueryClient.setQueryData<Todo[]>('todos', todos => {
                const isNew = !data.id;
                if (isNew)
                    todos.push(data);
                else {
                    const index = todos.findIndex(t => t.id === vars.id);
                    todos[index] = data;
                }
                return [...todos]
            })
        }
    })
}

export const useDeleteTodoMutation = () => {
    const QueryClient = useQueryClient();

    return useMutation<Todo, AxiosError<Todo>, number>('todo', async (id: number) => {
        const res = await axios.delete(`/todos/${id}`);
        return res.data;
    }, {
        onSuccess(data, id) {
            QueryClient.setQueryData<Todo[]>('todos', todos => {
                    const index = todos.findIndex(t => t.id === id);
                    todos.splice(index, 1);
                return [...todos]
            })
        }
    })
}