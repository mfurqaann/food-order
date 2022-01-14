import React, { useState } from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './Components/Store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShowHandler = () => {
    setCartIsShown(true);
  }

  const cartHideHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartHideHandler} />}
      <Header onShow={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
