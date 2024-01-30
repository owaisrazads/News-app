import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './config/redux-config/reducers/todoslice'

const App = () => {
  const todoRef = useRef()


  //dispetch
  const dispatch = useDispatch()

  //selector
  const selector = useSelector(state => state.todos);


  //addTodo

  const addTodoReducer = (event) => {
    event.preventDefault()
    console.log(todoRef.current.value);
    dispatch(addTodo({
      title: todoRef.current.value
    }))
    console.log('data form redux =>', selector);
    todoRef.current.value = ''
  }
//delete Todo

  const deleteTodo = (index) => {
    dispatch(removeTodo({
      index: index
    }))

    const editTodo = (index) => {

    }
  }

  return (
    <>
      <h2 className='text-center p-3 bg-slate-500 text-white text-2xl font-sans font-semibold'>Redux Todo</h2>
      <div className='flex justify-center mt-10'>
        <form onSubmit={addTodoReducer}>
          <input className=' border-stone-700 p-2 w-[20rem]   :' type="text" placeholder='Enter Todo' required ref={todoRef} />
          <button type='submit' className='bg-slate-500 p-2 ml-2 font-semibold text-white rounded'>Add Todo</button>
        </form>
      </div>
      <div>
        <ul className='flex justify-center mt-2'>
          <div className='w-[26rem] bg-gray-300'>
            {selector.map((item, index) => {
              return <li className='ml-2' key={item.id}>{item.title}
                <button onClick={(() => deleteTodo(index))} className='bg-slate-500 p-2  font-semibold text-white rounded mb-3 mt-3 ml-3' >Delete</button>
                <button onClick={(() => editTodo(index))} className='bg-slate-500 p-2 ml-2 font-semibold text-white rounded mb-3 mt-3' >Edit</button>
              </li>
            })}
          </div>
        </ul>
      </div>
    </>
  )
}

export default App
