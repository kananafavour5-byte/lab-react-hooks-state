import React from 'react'

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {items.map((item, index) => (
          <li key={index}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
