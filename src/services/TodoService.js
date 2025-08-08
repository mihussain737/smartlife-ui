import axios from 'axios'

const BASE_REST_API_URL='http://localhost:8080/api/todos'

export const getAllTodos=()=> axios.get(BASE_REST_API_URL)
export const saveNewTodo=(todo)=> axios.post(BASE_REST_API_URL,todo)
export const getTodoById=(todoId)=> axios.get(BASE_REST_API_URL+'/'+todoId)
export const deleteTodoById=(todoId)=> axios.delete(BASE_REST_API_URL+'/'+todoId)
export const completeTodoById=(todoId)=>axios.patch(BASE_REST_API_URL+'/'+todoId+'/complete')
export const inCompleteTodoById=(todoId)=>axios.patch(BASE_REST_API_URL+'/'+todoId+'/in-complete')