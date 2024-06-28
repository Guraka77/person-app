import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import PersonDetail from './components/PersonDetail';
import { Button, Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Button variant="primary" className="my-4" onClick={() => setShowList(!showList)}>
          {showList ? 'Hide List' : 'List of Persons'}
        </Button>
        {showList && <PersonList />}
        <Routes>
          <Route path="/add" element={<PersonForm />} />
          <Route path="/edit/:id" element={<PersonForm />} />
          <Route path="/person/:id" element={<PersonDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
