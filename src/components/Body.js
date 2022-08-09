import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCount, increment } from './redux/slices/sliceCount';

const Body = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: '25px' }} className="d-flex flex-wrap wrap justify-content-around">
      <Card>
        <Card.Body style={{ width: '18rem' }}>Heelo</Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
          <Button
            onClick={() => {
              dispatch(deleteCount());
            }}
            variant="primary">
            Удалить всё
          </Button>
          <Button
            onClick={() => {
              dispatch(increment());
            }}
            style={{ margin: '5px' }}
            variant="danger">
            {count}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Body;
