import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardShopItem = ({ id, name, description, price, img }) => {
  return (
    <Card className="shop_item" style={{ width: '13rem' }}>
      <Card.Img variant="top" src={img}></Card.Img>
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
  );
};

export default CardShopItem;
