import React from 'react';
import './styles.css'
import { TodoController } from '../controller/todo.controller';
import { ITodoController } from '../controller/todo.controller.interface';

type Props = {
  controller: ITodoController
}

export const TodoView: React.FC<Props> = ({ controller }: Props) => {
  
  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    
    if(!controller.formControl()) {
      return alert('Batata')
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={submitForm}>
        <strong>ToDo</strong>
        <span>Title</span>
        <input ref={controller.titleInputRef}/>
        <span>Description</span>
        <input ref={controller.descriptionInputRef}/>
        <button>Add</button>
      </form>
      <ul className="list">
        {
          controller.todoList.map((item: any)=> {
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

const TodoRoot:React.FC = () => {
  const todoController = new TodoController();
  return (
    <TodoView controller={todoController}/>
  )
}

export default TodoRoot;