import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'California',
      role: 'Intern',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/ca-logo.png',
    },
    {
      id: 2,
      name: 'Florida',
      role: 'Manager',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/fl-logo.png',
    },
    {
      id: 3,
      name: 'Georgia',
      role: 'Developer',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/ga-logo.png',
    },
    {
      id: 4,
      name: 'Indiana',
      role: 'Applications Engineer',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/in-logo.png',
    },
    {
      id: 5,
      name: 'Michigan',
      role: 'Help Desk Technician',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/mi-logo.png',
    },
    {
      id: 6,
      name: 'New Jersey',
      role: 'Valet',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/nj-logo.png',
    },
    {
      id: 7,
      name: 'New York',
      role: 'Valet',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/ny-logo.png',
    },
    {
      id: 8,
      name: 'North Carolina',
      role: 'Valet',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/nc-logo.png',
    },
    {
      id: 9,
      name: 'South Carolina',
      role: 'Valet',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/sc-logo.png',
    },
    {
      id: 10,
      name: 'Texas',
      role: 'Valet',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/tx-logo.png',
    },
    {
      id: 11,
      name: 'Washington',
      role: 'Valet',
      img: 'https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/wa-logo.png',
    },
  ]);

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

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
    <div className=''>
      {showEmployees ? (
        <>
          <div className='flex flex-wrap justify-center'>
            {employees.map(employee => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
