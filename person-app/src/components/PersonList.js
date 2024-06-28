import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getAll')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the persons!", error);
      });
  }, []);

  return (
    <Container>
      <h2 className="my-4">Person List</h2>
      <Row>
        {persons.map(person => (
          <Col md={4} key={person.id}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{person.firstName} {person.lastName}</Card.Title>
                <Card.Text>
                  <strong>Date of Birth:</strong> {new Date(person.dob).toLocaleDateString()}<br />
                  <strong>Email:</strong> {person.email}<br />
                  <strong>Phone:</strong> {person.phone}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/person/${person.id}`}>View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PersonList;
