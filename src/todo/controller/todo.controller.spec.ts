import 'react';
import {TodoController} from './todo.controller'

jest.mock('react', ()=> ({
  useRef: () => {},
  useState: () => [],
  useEffect: () => {}
}))

describe('todo', ()=> {
  const sut = new TodoController();
  it('todo', ()=> {
    expect(true).toBe(true)
  })
})

