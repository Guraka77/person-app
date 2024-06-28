import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const getAllPersons = () => axios.get(`${API_URL}/getAll`);
const getPerson = (id) => axios.get(`${API_URL}/person/${id}`);
const savePerson = (person) => axios.post(`${API_URL}/person`, person);
const updatePerson = (id, person) => axios.put(`${API_URL}/person/${id}`, person);
const deletePerson = (id) => axios.delete(`${API_URL}/person/${id}`);

export default {
  getAllPersons,
  getPerson,
  savePerson,
  updatePerson,
  deletePerson,
};
