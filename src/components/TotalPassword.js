import React, { useContext } from 'react';
import PasswordContext from '../context/PasswordContext';

const TotalPasswords = () => {
  const { passwords } = useContext(PasswordContext);
  return (
    <h2>Total Passwords: <span>{passwords.length}</span></h2>
  );
};

export default TotalPasswords;
