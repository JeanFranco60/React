import React, { useState} from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import data from "./data/groceries";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Ejercicio 7</h1>
        <div className="col-6">
          <h4>Productos Disponibles</h4>
          <ProductList products={data} addToCart={addToCart} />
        </div>
        <div className="col-6">
          <h4>Carrito de Compras</h4>
          {cartItems.length > 0 ? (
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          ) : (
            <p>
              Por favor, seleccione uno o más productos para agregar al carrito
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;



///////////////////////////////////////////////////////////////////////////
// function Products({ cartProducts, setCartProducts }) {
//   const addProduct = (product) => {
//     if (!cartProducts.some((p) => p.id === product.id)) {
//       // Esto es lo que pasa cuando el producto no se encuentra en la lista.
//       setCartProducts([...cartProducts, { ...product, qty: 1 }]);
//     } else {
//       setCartProducts(
//         cartProducts.map((p) => {
//           if (p.id === product.id) {
//             return { ...p, qty: p.qty + 1 };
//           }
// return p;
//         })
//       );
//     }
//   }}


//   import {useSt}