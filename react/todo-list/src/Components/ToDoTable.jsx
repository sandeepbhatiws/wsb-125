import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function ToDoTable({toDoData}) {
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
                <Button> Delete</Button>
                <Button className='ms-3'>Edit</Button>
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
