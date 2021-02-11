import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState(['first todo', 'second todo', 'third todo'])

  return (
    <>
      <h1> todo List</h1>
      {todos.map((x, i) => {
        console.log('item', x, '', i)

        return (
          <>
            <h1 className='text-muted'> this is just HTML </h1>
            <h2 className='text-warning'>here is an item {x}</h2>
            <h2 className='text-danger'>this is just x {x}</h2>
          </>
        )
      })}
    </>
  )
}

export default Todo
