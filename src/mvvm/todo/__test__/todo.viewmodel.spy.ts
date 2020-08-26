import { TodoModel } from '../models/todo.model'
import { ITodoViewModel } from '../viewmodel/todo.viewmodel.interface'

export class TodoViewModelSpy implements ITodoViewModel {
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
