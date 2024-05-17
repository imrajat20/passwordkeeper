import React, { useState } from 'react';
import PasswordProvider from './context/PasswordProvider';
import AddPasswordModal from './components/AddPasswordModal';
import PasswordList from './components/PasswordList';
import TotalPasswords from './components/TotalPassword';
import './App.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PasswordProvider>
      <div className="App">
        <h1>Password Keeper</h1>
        <TotalPasswords />
        <button onClick={() => setIsModalOpen(true)}>Add New Password</button>
        <AddPasswordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <PasswordList />
      </div>
    </PasswordProvider>
  );
};

export default App;
