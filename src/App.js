import { useState } from 'react'
import Header from './components/layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [cartShow, setCartShow] = useState(false)

  const showCartHandler = () => {
    setCartShow(true)
  }

  const hideCartHandler = () => {
    setCartShow(false)
  }
  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
