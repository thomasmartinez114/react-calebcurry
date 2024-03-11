import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Dictionary() {
  const [word, setWord] = useState('');
  const navigate = useNavigate();

  return (
    <form
      className='flex justify-center space-x-2 max-w-[300px]'
      onSubmit={() => {
        navigate('/definition/' + word);
      }}
    >
      <input
        className='shrink min-w-0 px-2 py-1 rounded'
        placeholder='Dinosaur'
        type='text'
        onChange={e => {
          setWord(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}
