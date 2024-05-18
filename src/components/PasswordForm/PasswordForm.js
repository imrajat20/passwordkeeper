import React, { useContext } from 'react';
import PasswordContext from '../../context/PasswordContext';
import './PasswordForm.css';

const PasswordList = () => {
  const { passwords, removeItem } = useContext(PasswordContext);

  return (
    <div className='list'>
      <h2>Passwords List</h2>
      <ul>
        {passwords.map((password, index) => (
          <li key={index}>
            {password.input1} - {password.input2}
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
