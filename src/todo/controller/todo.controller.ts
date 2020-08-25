import { TodoModel } from '../models/todo.model'
import { useRef, useState, useEffect } from 'react'
import { ITodoController } from './todo.controller.interface'

export class TodoController implements ITodoController {
  public titleInputRef = useRef<HTMLInputElement>(null)
  public descriptionInputRef = useRef<HTMLInputElement>(null)
  public todoList: TodoModel[]
  public setTodoList: React.Dispatch<React.SetStateAction<TodoModel[]>>

  constructor () {
    [this.todoList, this.setTodoList] = useState<TodoModel[]>([])
    useEffect(() => {}, [])
  }

  public formControl (): boolean {
    const title = this.titleInputRef.current.value
    const description = this.descriptionInputRef.current.value

    if (!title || !description) {
      return false
    }

    const model = new TodoModel(this.todoList.length + 1, title, description)
    this.setTodoList([...this.todoList, model])

    this.titleInputRef.current.value = ''
    this.descriptionInputRef.current.value = ''

    return true
  }
}
