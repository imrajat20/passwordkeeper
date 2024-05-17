import React, { useState } from 'react';
import PasswordContext from './PasswordContext';

const PasswordProvider = (props) => {
  const [passwords, setPasswords] = useState([]);
  const [currentPassword, setCurrentPassword] = useState(null);

  const addPassword = (title, password) => {
    const newPassword = { id: Date.now(), title, password };
    setPasswords((prevPasswords) => [...prevPasswords, newPassword]);
  };

  const deletePassword = (id) => {
    setPasswords((prevPasswords) => prevPasswords.filter(pwd => pwd.id !== id));
  };

  const editPassword = (id, updatedTitle, updatedPassword) => {
    setPasswords((prevPasswords) =>
      prevPasswords.map(pwd =>
        pwd.id === id ? { ...pwd, title: updatedTitle, password: updatedPassword } : pwd
      )
    );
  };

  const value = {
    passwords,
    addPassword,
    deletePassword,
    editPassword,
    currentPassword,
    setCurrentPassword
  };

  return (
    <PasswordContext.Provider value={value}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
