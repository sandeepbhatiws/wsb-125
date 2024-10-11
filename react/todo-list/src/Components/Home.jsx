import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoTable from './ToDoTable'

export default function Home() {

  const [toDoData, setTodoData] = useState([]);

  const [input, setInput] = useState({
    index : '',
    title : '',
    description : ''
  });

  return (
    <>
      <div className='container-fluid text-center p-4 fs-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>To Do Form</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid text-center p-4 fs-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <ToDoForm setTodoData = {setTodoData} toDoData={toDoData} input = {input} setInput = {setInput}/>
            </div>
          </div>
        </div>
      </div>


      <div className='container-fluid text-center p-4 fs-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>To Do List Data</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid text-center p-4 fs-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <ToDoTable toDoData = {toDoData} setTodoData = {setTodoData}  input = {input} setInput = {setInput}/>
            </div>
          </div>
        </div>
      </div>
    </>
    
    
  )
}
