import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {img,workName,_id} = props.service;
    return (
      <div>
        <Link to={`/service/${_id}`}>
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src={img} />
              <Card.Body className="bg-warning rounded-3">
                <Card.Title>{workName}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      </div>
    );
};

export default Service;