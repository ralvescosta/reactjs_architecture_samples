import React from 'react';
import './styles.css'
import { TodoController } from '../controller/todo.controller';

const ToDo: React.FC = () => {
  const controller = new TodoController()

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

export default ToDo;