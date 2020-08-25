// import React, { useState, useRef } from 'react'
// import { render, RenderResult, cleanup, fireEvent, waitFor } from '@testing-library/react'
// import { TodoView } from './todo.views'
// import { ITodoController } from '../controller/todo.controller.interface'
// import { TodoModel } from '../models/todo.model'

// type SutType = {
//   sut: RenderResult
//   todoControllerSpy: ITodoController
// }

// class TodoControllerSpy implements ITodoController {
//   public titleInputRef = useRef<HTMLInputElement>(null)
//   public descriptionInputRef = useRef<HTMLInputElement>(null)
//   public todoList: TodoModel[]
//   public setTodoList: React.Dispatch<React.SetStateAction<TodoModel[]>>

//   constructor () {
//     [this.todoList, this.setTodoList] = useState<TodoModel[]>([])
//   }

//   public formControl (): boolean {
//     // const title = this.titleInputRef.current.value
//     // const description = this.descriptionInputRef.current.value

//     // if (!title || !description) {
//     //   return false
//     // }

//     // const model = new TodoModel(this.todoList.length + 1, title, description)
//     // this.setTodoList([...this.todoList, model])

//     // this.titleInputRef.current.value = ''
//     // this.descriptionInputRef.current.value = ''

//     return true
//   }
// }

// function makeSut (): SutType {
//   const todoControllerSpy = new TodoControllerSpy()

//   const sut = render(
//     <TodoView controller={todoControllerSpy} />
//   )

//   return {
//     sut,
//     todoControllerSpy
//   }
// }

describe('Todo View', () => {
  // afterEach(() => {
  //   cleanup()
  // })

  it('', () => {})
})
