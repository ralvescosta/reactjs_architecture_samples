import { useRef, useState } from 'react'
import { ITodoViewModel } from './todo.viewmodel.interface'
import { TodoModel } from '../models/todo.model'
import { ITodoController } from '../controller/todo.controller.interface'

export class TodoViewModel implements ITodoViewModel {
  public titleInputRef = useRef<HTMLInputElement>(null)
  public descriptionInputRef = useRef<HTMLInputElement>(null)
  public todoList: TodoModel[]
  public setTodoList: React.Dispatch<React.SetStateAction<TodoModel[]>>

  constructor (
    private readonly controller: ITodoController
  ) {
    [this.todoList, this.setTodoList] = useState<TodoModel[]>([])
  }

  formControl (): boolean {
    try {
      const model = this.controller
        .createTodo(this.titleInputRef.current.value, this.descriptionInputRef.current.value) as TodoModel

      this.titleInputRef.current.value = ''
      this.descriptionInputRef.current.value = ''

      this.setTodoList([...this.todoList, model])
      return true
    } catch (err) {
      return false
    }
  }
}
