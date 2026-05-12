import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/* Dark mode toggle */}
      <DarkModeToggle
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Category filter */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product list */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
      />

      {/* Cart */}
      <Cart items={cartItems} />
    </div>
  )
}

export default App