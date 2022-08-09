import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Project = () => {
  return (
    <Form className="project">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button style={{ margin: '10px' }} variant="primary">
          Отправить
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Project;
