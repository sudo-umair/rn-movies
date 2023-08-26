import axios from 'axios';
import { IGetMoviesPayload } from '../interfaces/api';

const axiosClient = axios.create({
  baseURL:
    'https://eu-west-2.aws.data.mongodb-api.com/app/data-ogjld/endpoint/data/v1/action',
  headers: {
    'api-key':
      'jt4NkhIIhXpFGaBTQap9pbSaF1pa2c6GztGiFmEcC5hYNAnSmL3sPb16a12p7b12',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Request-Headers': '*',
  },
});

export const getMovies = async (payload: IGetMoviesPayload) => {
  return await axiosClient.post('/find', payload);
};
