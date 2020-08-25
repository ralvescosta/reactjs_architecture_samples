import 'react';
import {TodoController} from './todo.controller'
import { TodoModel } from '../models/todo.model';

jest.mock('react', ()=> ({
  useRef: jest.fn(()=> ({current: {value: "any_thing"}})),
  useState: jest.fn(()=>[[], jest.fn()]),
  useEffect: jest.fn(()=>{})
}))

describe('Todo Controller', ()=> {
  const sut = new TodoController();

  beforeEach(()=> {
    jest.clearAllMocks()
  })

  it('formControl()', ()=> {
    sut.formControl()
    expect(sut.setTodoList).toHaveBeenCalled()
  })

  it('Should return false if title or description value is null or undefined', ()=> {
    sut.titleInputRef.current.value = "";
    sut.descriptionInputRef.current.value = "";
    const result = sut.formControl()
    expect(result).toBe(false)
  })

  it('Should return true if has title or description value', ()=> {
    sut.titleInputRef.current.value = "any_thing";
    sut.descriptionInputRef.current.value = "any_thing";

    const result = sut.formControl()
    expect(result).toBe(true)
  })

  it('Should calls setTodoList with current value', ()=> {
    sut.titleInputRef.current.value = "any_thing";
    sut.descriptionInputRef.current.value = "any_thing";
    const model = new TodoModel(sut.todoList.length + 1, "any_thing", "any_thing");

    sut.formControl()
    
    expect(sut.setTodoList).toHaveBeenCalledWith([...sut.todoList, model])
  })
})