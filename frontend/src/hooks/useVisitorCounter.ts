import { useEffect, useState } from 'react';

export const useVisitorCounter = () => {
  const [count, setCount] = useState<string>('...');

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/johnsantanna/visits/up')
      .then(res => res.json())
      .then(data => setCount(data.count?.toString() ?? '1'))
      .catch(() => setCount('1'));
  }, []);

  return { count };
};
