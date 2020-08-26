import '@testing-library/jest-dom'
import React from 'react'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'

import TodoViewWarper, { TodoView } from './todo.views'
import { TodoModel } from '../models/todo.model'

import { TodoViewModelSpy } from '../__test__/todo.viewmodel.spy'

type SutType = {
  sut: RenderResult
  todoViewModelSpy: TodoViewModelSpy
}

function makeSut (model?: TodoModel): SutType {
  let todoViewModelSpy: TodoViewModelSpy

  const Warper: React.FC = () => {
    todoViewModelSpy = new TodoViewModelSpy()
    if (model) {
      todoViewModelSpy.todoList = [model]
    }
    return <TodoView viewModel={todoViewModelSpy} />
  }

  const sut = render(
    <Warper />
  )

  return {
    sut,
    todoViewModelSpy
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
    const { sut, todoViewModelSpy } = makeSut()

    const addForm = sut.getByTestId('add-form')
    fireEvent.submit(addForm)

    expect(todoViewModelSpy.result).toBeTruthy()
  })

  it('Should return alert on submitForm method return false', () => {
    const { sut, todoViewModelSpy } = makeSut()
    todoViewModelSpy.result = false
    window.alert = jest.fn()

    const addForm = sut.getByTestId('add-form')
    fireEvent.submit(addForm)

    expect(window.alert).toHaveBeenCalledTimes(1)
  })

  it('Should return ul if todoList has some Todo', () => {
    const { sut } = makeSut(new TodoModel(1, 'some_todo', 'some_des'))

    expect(sut.getByText('some_todo')).toBeInTheDocument()
  })

  it('Should render TodoViewWarper', () => {
    expect(render(<TodoViewWarper />).getByText('ToDo')).toBeInTheDocument()
  })
})
