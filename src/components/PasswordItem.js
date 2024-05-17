import React, { useContext } from 'react';
import PasswordContext from '../context/PasswordContext';

const PasswordItem = ({ password }) => {
  const { deletePassword, setCurrentPassword } = useContext(PasswordContext);

  return (
    <div className="password-item">
      <h3>{password.title}</h3>
      <p>{password.password}</p>
      <button onClick={() => setCurrentPassword(password)}>Edit</button>
      <button onClick={() => deletePassword(password.id)}>Delete</button>
    </div>
  );
};

export default PasswordItem;
