import './index.css';
import './components/Employee';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: 'Caleb',
      role: 'Intern',
      img: 'https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg',
    },
    {
      name: 'Abby',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg',
    },
    {
      name: 'John',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      name: 'Thomas',
      role: 'Applications Engineer',
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      name: 'Chris',
      role: 'Help Desk Technician',
      img: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg',
    },
    {
      name: 'Steven',
      role: 'Valet',
      img: 'https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg',
    },
  ]);
  const showEmployees = true;
  return (
    <div className='App'>
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={e => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map(employee => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
