import { useEffect, useState } from 'react';
import axios from 'axios';
import { CvProfile } from '../types/cv.types';

export const useCv = () => {
  const [cv, setCv] = useState<CvProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<CvProfile>('/api/cv')
      .then(res => setCv(res.data))
      .catch(() => setError('Erro ao carregar dados'))
      .finally(() => setLoading(false));
  }, []);

  return { cv, loading, error };
};
