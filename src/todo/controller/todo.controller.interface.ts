import { TodoModel } from '../models/todo.model'

export interface ITodoController {
  titleInputRef: React.MutableRefObject<HTMLInputElement>
  descriptionInputRef: React.MutableRefObject<HTMLInputElement>
  todoList: TodoModel[]
  setTodoList: React.Dispatch<React.SetStateAction<TodoModel[]>>
  formControl: () => boolean
}
