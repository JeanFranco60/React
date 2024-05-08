import data from "../data/groceries";

function Groceries() {

    const addToCart = () => {
        setProducts([...products, ])
      };

  return (
    <div>
      <ul className="list-group">
        {data.map((product, index) => (
          <li
            onClick={() => addToCart(groceries)}
            className="list-group-item list-group-item-action"
            key={index}
          >
            <i class=" bi bi-cart-plus"> </i>
            {product.name} ({product.unitPrice} c/u)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Groceries;
