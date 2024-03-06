import './index.css';
import './components/Employee';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Caleb',
      role: 'Intern',
      img: 'https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg',
    },
    {
      id: 2,
      name: 'Abby',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg',
    },
    {
      id: 3,
      name: 'John',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      id: 4,
      name: 'Thomas',
      role: 'Applications Engineer',
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      id: 5,
      name: 'Chris',
      role: 'Help Desk Technician',
      img: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg',
    },
    {
      id: 6,
      name: 'Steven',
      role: 'Valet',
      img: 'https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg',
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    // console.log('updateEmployee inside of App.js');
    const updatedEmployees = employees.map(employee => {
      if (id === employee.id) {
        // return new
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className='App'>
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={e => {
              // console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map(employee => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
