import React, { useContext } from 'react';
import PasswordContext from '../context/PasswordContext';
import PasswordItem from './PasswordItem';

const PasswordList = () => {
  const { passwords } = useContext(PasswordContext);

  return (
    <div>
      {passwords.length > 0 ? (
        passwords.map(password => <PasswordItem key={password.id} password={password} />)
      ) : (
        <p>No passwords saved.</p>
      )}
    </div>
  );
};

export default PasswordList;
