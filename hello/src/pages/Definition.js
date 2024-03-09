import { useEffect } from 'react';

export default function Defintion() {
  useEffect(() => {
    console.log('page loaded');
  }, []);
  return <p>Here is a definition.</p>;
}
