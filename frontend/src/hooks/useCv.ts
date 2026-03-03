import { useEffect, useState } from 'react';
import axios from 'axios';
import { CvProfile } from '../types/cv.types';

const API_URL = import.meta.env.DEV ? '/api/cv' : import.meta.env.BASE_URL + 'data/cv.json';

export const useCv = () => {
  const [cv, setCv] = useState<CvProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<CvProfile>(API_URL)
      .then(res => setCv(res.data))
      .catch(() => setError('Erro ao carregar dados'))
      .finally(() => setLoading(false));
  }, []);

  return { cv, loading, error };
};
