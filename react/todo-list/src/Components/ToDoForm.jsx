import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function ToDoForm({setTodoData,toDoData}) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

      event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
          const data = {
            title : event.currentTarget.title.value,
            description : event.currentTarget.description.value,
          }

          const finalData = [data,...toDoData];
          setTodoData(finalData);

        }

        setValidated(true);
    };

  return (
    <div className='text-left'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            placeholder="Enter Title"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          <Form.Control.Feedback type="invalid">
              Please enter the title.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            name='description'
            placeholder="Enter your Description"
            defaultValue=""
            style={{ height: '100px' }}
          />
          <Form.Control.Feedback type="invalid">
              Please enter the Description.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  )
}
