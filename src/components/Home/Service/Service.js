import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {img,workName} = props.service;
    return (
      <div>
        <Col>
          <Card className="border-0" >
                    <Card.Img variant="top" src={img} />
            <Card.Body className="bg-warning rounded-3">
              <Card.Title>{workName}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Service;