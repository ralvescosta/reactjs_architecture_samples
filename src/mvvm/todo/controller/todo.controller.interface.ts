import { TodoModel } from '../models/todo.model'

export interface ITodoController {
  createTodo: (title: string, description: string) => Error | TodoModel
}
