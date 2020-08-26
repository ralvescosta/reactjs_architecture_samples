import {TodoController} from './todo.controller'
import { TodoModel } from '../models/todo.model';

describe('Todo Controller', ()=> {
  const sut = new TodoController();

  beforeEach(()=> {
    jest.clearAllMocks()
  })

  it('Should return TodoModel with createTodo call correctly', ()=> {
    const model = sut.createTodo('some_title', 'some_desc')
    expect(model).toBeInstanceOf(TodoModel)
  })

  it('Should throw Error with createTodo with both empty arguments', ()=> {
    expect(()=> sut.createTodo('', '')).toThrow(Error)
  })

  it('Should throw Error with createTodo if title is empty', ()=> {
    expect(()=> sut.createTodo('', 'some_desc')).toThrow(Error)
  })

  it('Should throw Error with createTodo if description is empty', ()=> {
    expect(()=> sut.createTodo('some_title', '')).toThrow(Error)
  })
})