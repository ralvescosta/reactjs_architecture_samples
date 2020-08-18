import { TodoModel } from "../models/todo.model";
import {useRef, useState} from 'react';

export class TodoController {
  public titleInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  public descriptionInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  public todoList: any[]
  public setTodoList: any

  constructor() {
    [this.todoList, this.setTodoList] = useState([])
  }
  
  public formControl(): boolean {
    const title = this.titleInputRef.current.value 
    const description = this.descriptionInputRef.current.value
    
    if(!title || !description) {
      return false
    }

    const model = new TodoModel(this.todoList.length + 1, title, description);
    this.setTodoList([...this.todoList, model])

    return true

  }
}