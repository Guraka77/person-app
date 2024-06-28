import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';

const PersonDetail = () => {
  const [person, setPerson] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/person/${id}`)
      .then(response => {
        setPerson(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the person!", error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/person/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error("There was an error deleting the person!", error);
      });
  };
  const getImageFilename = (name) => {
    const nameMap = {
      'pranav Bethu': 'pranav.PNG',
      'Devi B': 'devi.JPG',
      'Kriyansh Raj Guraka': 'kriyanshraj.JPG',
      'Sasikala Guraka': 'sasikala.PNG',
      'Hari Babu Guraka': 'haribabu.PNG',
      'Geetha Koticulapudi': 'geetha.PNG',
      'Rohith Kotikalapudi': 'rohith.PNG',
      'Rahul Kotikalapudi' : 'rahul.JPG'
      // Add other mappings as necessary
    };
    return nameMap[name] || 'default.png'; // Use a default image if name is not found
  };
  return (
    <Container>
      <h2 className="my-4">Person Detail</h2>
      <Card>
        <Card.Body>
          <Card.Img
            variant="top"
            src={`/images/${getImageFilename(person.firstName + ' ' + person.lastName)}`}
            alt="Person Image"
            style={{ maxWidth: '200px', marginBottom: '20px' }}
          />
          <Card.Title>{person.firstName} {person.lastName}</Card.Title>
          <Card.Text>
            <strong>Date of Birth:</strong> {new Date(person.dob).toLocaleDateString()}<br />
            <strong>Email:</strong> {person.email}<br />
            <strong>Phone:</strong> {person.phone}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(`/edit/${person.id}`)}>Edit</Button>
          <Button variant="danger" onClick={handleDelete} className="ml-2">Delete</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PersonDetail;