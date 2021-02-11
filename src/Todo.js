import React, { useState } from 'react'
import SingleTodo from './todo/SingleTodo'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [inputItem, setInputItem] = useState()

  const handleSubmit = () => {
    setTodos([...todos, inputItem])
    
  }

  console.log('todos ===> ', todos)
  
  // not in use
  function handleInput(e) {
    console.log('while typing =>', e.target.value)

    setInputItem(e.target.value)

    console.log('in state => ', inputItem)
  }

  return (
    <>
      <form>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='new Todo'
            // onChange={e => handleInput(e)} // non sexy way
            onChange={e => {
              setInputItem(e.target.value)
              // console.log(e.target.value)
            }}
          />
          <button
            type='button'
            className='btn btn-secondary'
            onClick={handleSubmit} // this is the almost the same - getting event
            // onClick={(event) => handleSubmit(event)} // equivalent to top
          >
            add todo
          </button>
        </div>
      </form>

      {/* {todos.map((x, i) => {
        // console.log('item', x, '', i)

        return (
          <>
            <SingleTodo />
          </>
        )
      })} */}
    </>
  )
}

export default Todo
