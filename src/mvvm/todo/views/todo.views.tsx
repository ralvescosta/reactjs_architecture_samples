import React from 'react'
import './styles.css'
import { TodoController } from '../controller/todo.controller'
import { TodoModel } from '../models/todo.model'
import { ITodoViewModel } from '../viewmodel/todo.viewmodel.interface'
import { TodoViewModel } from '../viewmodel/todo.viewmodel'

type Props = {
  viewModel: ITodoViewModel
}

export const TodoView: React.FC<Props> = ({ viewModel }: Props) => {
  function submitForm (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    if (!viewModel.formControl()) {
      return alert('Batata')
    }
  }

  return (
    <div className="container">
      <form data-testid="add-form" className="form" onSubmit={submitForm}>
        <strong>ToDo</strong>
        <span>Title</span>
        <input ref={viewModel.titleInputRef}/>
        <span>Description</span>
        <input ref={viewModel.descriptionInputRef}/>
        <button>Add</button>
      </form>
      <ul className="list">
        {
          viewModel.todoList.map((item: TodoModel) => {
            return (
              <li key={item.id} className="listItem">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const TodoViewWarper: React.FC = () => {
  const todoController = new TodoController()
  const todoViewModel = new TodoViewModel(todoController)
  return (
    <TodoView viewModel={todoViewModel}/>
  )
}

export default TodoViewWarper
