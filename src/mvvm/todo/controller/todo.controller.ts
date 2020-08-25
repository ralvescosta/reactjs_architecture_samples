import { TodoModel } from '../models/todo.model'
import { ITodoController } from './todo.controller.interface'

export class TodoController implements ITodoController {
  public createTodo (title: string, description: string): Error | TodoModel {
    if (!title || !description) {
      throw new Error('Todo Error')
    }

    const model = new TodoModel(Math.floor(Math.random() * 999), title, description)
    return model
  }
}
