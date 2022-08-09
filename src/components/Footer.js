import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{ margin: '25px' }} className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Footer;
