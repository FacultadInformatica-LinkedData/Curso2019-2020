import axios from 'axios';
import { BACKEND_HOST } from './config/env';

const instance = axios.create({
    baseURL: BACKEND_HOST,
})

export default instance;