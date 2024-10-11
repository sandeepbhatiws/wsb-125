import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function ToDoTable({toDoData, setTodoData,input, setInput}) {
  
  const deleteRecord = (index) => {
    toDoData.splice(index,1);
    console.log(toDoData);

    const final = [...toDoData];
    setTodoData(final);
  }

  const editRecord = (index) => {
    var data = toDoData[index];

    var obj = {
      index : index,
      title : data.title,
      description : data.description
    }

    setInput(obj);
  }
  
  return (
    <div>
        <Table striped>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          (toDoData.length > 0)
          ?
          toDoData.map((v,i) => {
            return(
              <tr>
              <td>{i+1}</td>
              <td>{v.title}</td>
              <td>{v.description}</td>
              <td>
                <Button onClick={ () => deleteRecord(i) }> Delete</Button>
                <Button onClick={ () => editRecord(i) } className='ms-3'>Edit</Button>
                </td>
            </tr>
            )
          })
          :
          <tr>
              <td colSpan="4">No Record found !!</td>
          </tr>
        }

        
      </tbody>
    </Table>
    </div>
  )
}
