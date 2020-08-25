import { ITodoController } from '../controller/todo.controller.interface'
import { TodoModel } from '../models/todo.model'

export class TodoControllerSpy implements ITodoController {
  public titleInputRef: any
  public descriptionInputRef: any
  public todoList: TodoModel[]
  public setTodoList: any
  public result: boolean

  constructor () {
    this.titleInputRef = { current: { value: '' } }
    this.descriptionInputRef = { current: { value: '' } }
    this.todoList = []
    this.setTodoList = jest.fn()
    this.result = true
  }

  public formControl (): boolean {
    return this.result
  }
}
