
import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <ul className="list-group">
      {products.map((product) => (
        <li
          className="list-group-item list-group-item-action"
          key={product.id}
          onClick={() => addToCart(product)}
        >
          <i className="bi bi-cart-plus">  </i>
          {product.name} ${product.unitPrice} c/u
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
