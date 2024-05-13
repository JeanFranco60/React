import React from "react";

function Cart({ cartItems, removeFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.unitPrice,
      0
    );
  };

  return (
    <div>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li
            className="list-group-item list-group-item-action"
            key={item.id}
            onClick={() => removeFromCart(item.id)}
          >
            <i className="bi bi-cart-dash"> </i>
            {item.name} (Cant: {item.quantity}) (${item.unitPrice} c/u)
            <span> - Total: ${item.quantity * item.unitPrice}</span>
          </li>
        ))}
        <li className="border border-dark bg-info-subtle mt-3 list-group-item">
          <strong>Total: ${calculateTotal()}</strong>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
