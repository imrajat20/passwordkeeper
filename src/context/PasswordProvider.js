import React from 'react';
import PasswordContext from './PasswordContext';

const PasswordProvider = (props) => {
  const [passwords, setPasswords] = React.useState([]);


  const addPassword = (password) => {
    setPasswords((prevPasswords) => [...prevPasswords, password]);
  };

  const deletePassword = (id) => {
    setPasswords((prevPasswords) => prevPasswords.filter((_, index) => index !== id));
  };
  
  const total = passwords.length;

  const value = {
    passwords,
    totalAmount: total,
    addItem: addPassword,
    removeItem: deletePassword
  };

  return (
    <PasswordContext.Provider value={value}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
