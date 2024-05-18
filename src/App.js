import { useState } from 'react';
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import HomePage from './components/HomePage/HomePage';
import PasswordProvider from './context/PasswordProvider';
import PasswordList from './components/PasswordForm/PasswordForm';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <PasswordProvider>
      {cartIsShown && <Backdrop onClose={hideCart}/>}
      <HomePage onShow={showCart}/>
      <PasswordList/>
    </PasswordProvider>
  );
}

export default App;
