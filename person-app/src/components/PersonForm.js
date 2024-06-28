import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const PersonForm = () => {
  const [person, setPerson] = useState({ firstName: '', lastName: '', dob: '', email: '', phone: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/person/${id}`)
        .then(response => {
          setPerson(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the person!", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id ? `http://localhost:8080/api/person/${id}` : 'http://localhost:8080/api/person';
    const method = id ? 'put' : 'post';

    axios[method](url, person)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error("There was an error saving the person!", error);
      });
  };

  return (
    <Container>
      <h2 className="my-4">{id ? 'Edit Person' : 'Add Person'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={person.firstName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={person.lastName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formDob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" name="dob" value={person.dob} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={person.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" value={person.phone} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default PersonForm;
