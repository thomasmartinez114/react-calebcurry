import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className='mx-auto block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
      >
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={e => {
              handleClose();
              e.preventDefault(); // prevent page refresh
              // console.log('hello from edit employee');
              // console.log(props.id, name, role);
              props.updateEmployee(props.id, name, role);
            }}
            id='editmodal'
            className='w-full max-w-sm'
          >
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='name'
                >
                  Full Name
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='name'
                  type='text'
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='role'
                >
                  Role
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='role'
                  type='text'
                  value={role}
                  onChange={e => {
                    setRole(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='bg-slate-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
            form='editmodal'
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
