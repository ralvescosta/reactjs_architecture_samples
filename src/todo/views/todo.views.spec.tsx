import React from 'react'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
import { TodoView } from './todo.views'
import { TodoControllerSpy } from '../__test__/todo.controller.spy'
import '@testing-library/jest-dom'
import { TodoModel } from '../models/todo.model'

type SutType = {
  sut: RenderResult
  todoControllerSpy: TodoControllerSpy
}

function makeSut (model?: TodoModel): SutType {
  let todoControllerSpy: TodoControllerSpy

  const Warper: React.FC = () => {
    todoControllerSpy = new TodoControllerSpy()
    if (model) {
      todoControllerSpy.todoList = [model]
    }
    return <TodoView controller={todoControllerSpy} />
  }

  const sut = render(
    <Warper />
  )

  return {
    sut,
    todoControllerSpy
  }
}

describe('Todo View', () => {
  afterEach(() => {
    cleanup()
  })

  it('Should render TodoView Component', () => {
    const { sut } = makeSut()
    expect(sut.getByText('ToDo')).toBeInTheDocument()
  })

  it('submitForm()', () => {
    const { sut, todoControllerSpy } = makeSut()

    const addForm = sut.getByTestId('add-form')
    fireEvent.submit(addForm)

    expect(todoControllerSpy.result).toBeTruthy()
  })

  it('Should return alert on submitForm method return false', () => {
    const { sut, todoControllerSpy } = makeSut()
    todoControllerSpy.result = false
    window.alert = jest.fn()

    const addForm = sut.getByTestId('add-form')
    fireEvent.submit(addForm)

    expect(window.alert).toHaveBeenCalledTimes(1)
  })

  it('Should return ul if todoList has some Todo', () => {
    const { sut } = makeSut(new TodoModel(1, 'some_todo', 'some_des'))

    expect(sut.getByText('some_todo')).toBeInTheDocument()
  })
})
