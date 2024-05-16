import groceries from "../data/groceries";
import { useState, useEffect } from "react";

function Products({ cartProducts, setCartProducts }) {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const getGroceries = async () => {
      try {
        const response = await fetch("");
        const allGroceries = await response.json();
        setGroceries(allGroceries);
      } catch (err) {
        console.error(err);
      }
    };
    getGroceries();
  }, []);
f
  const addProduct = (product) => {
    if (!cartProducts.some((p) => p.id === product.id)) {
      // Esto es lo que pasa cuando el producto no se encuentra en la lista.
      setCartProducts([...cartProducts, { ...product, qty: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((p) => {
          if (p.id === product.id) {
            return { ...p, qty: p.qty + 1 };
          }
          return p;
        })
      );
    }
  };

  return (
    <div className="col-6">
      <h3>Productos disponibles</h3>
      <ul className="list-unstyled">
        {groceries.map((product) => (
          <li key={product.id}>
            <button className="btn" onClick={() => addProduct(product)}>
              <i className="bi bi-plus-circle me-2"></i>
              <span className="fw-bold me-1">{product.name}</span>
              <span>(${product.unitPrice} c/u)</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
