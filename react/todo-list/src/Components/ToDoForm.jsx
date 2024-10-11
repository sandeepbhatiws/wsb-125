import React, { useRef } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function ToDoForm({setTodoData,toDoData,input, setInput}) {
    const [validated, setValidated] = useState(false);

    var titleRef = useRef();
    var descriptionRef = useRef();

    const handleSubmit = (event) => {

      event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
          const data = {
            title : titleRef.current.value,
            description : event.currentTarget.description.value,
          }

          console.log(input);
          
          if(input.index !== ''){

            toDoData[input.index] = data;

            const finalData = [...toDoData];
            console.log(finalData);
            // 
            setTodoData(finalData);

          } else {
            const finalData = [data,...toDoData];
            setTodoData(finalData);
          }
          
          setInput({
            index : '',
            title : '',
            description : ''
          });

          // event.currentTarget.title.value = '';
          // event.currentTarget.description.value = '';

          // event.currentTarget.reset();

        }

        setValidated(true);
    };

    const changeInput = (e) => {
      var data = {...input};
      data[e.target.name] = e.target.value;
      setInput(data);
    }

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
            onChange={changeInput}
            ref={titleRef}
            value={input.title}
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
            onChange={changeInput}
            ref={descriptionRef}
            value={input.description}
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
