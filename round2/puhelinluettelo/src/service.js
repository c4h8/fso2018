import axios from 'axios';

// const baseURL = 'http://localhost:3001/persons';

const service = {
  getPersons: () => axios.get('http://localhost:3001/persons'),
  postPerson: (person) => axios.post('http://localhost:3001/persons', person),
};

export default service;
