import React from "react";
import { useState } from "react";
import "./App.css";
import Groceries from "./components/Groceries";
function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="container m-3">
      <h1>Ejercicio 8</h1>
      <h4 className="mt-3 mb-3">Productos disponibles</h4>
      <div className="row">
        <div className="col-6">
          <Groceries
            key={products.id}
            products={products}
            price={products.unitPrice}
          />
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default App;
