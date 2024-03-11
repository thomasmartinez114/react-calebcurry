import { useState, useEffect } from 'react';

export default function Dictionary() {
  const [word, setWord] = useState('');

  return (
    <>
      <input
        type='text'
        onChange={e => {
          setWord(e.target.value);
        }}
      />
    </>
  );
}
