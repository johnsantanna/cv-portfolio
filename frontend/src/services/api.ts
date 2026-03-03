import axios from 'axios';
import { CvProfile } from '../types/cv.types';

const api = axios.create({ baseURL: '/api' });

export const getCvProfile = (): Promise<CvProfile> =>
  api.get<CvProfile>('/cv').then(res => res.data);
