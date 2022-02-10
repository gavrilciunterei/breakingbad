import api from './api';

const reportsServices = {
  getAll: (serie) => {
    return api.get(`/characters?category=${serie}`);
  },
  getByName: (name) => {
    return api.get(`/characters?name=${name}`);
  },
  getDeathByName: (name) => {
    return api.get(`/death?name=${name}`);
  },
  getRandomQuoteByAuthor: (name) => {
    return api.get(`/quote/random?author=${name}`);
  },
};

export default reportsServices;
