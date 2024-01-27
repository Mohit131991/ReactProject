import ProductContainer from "./Products/ProductContainer";
import { useState } from "react";
import PRODUCT from "../utils/mockData";

//Normal JS variable
let updatedProduct = PRODUCT;
updatedProduct.forEach((product) => {
  product.items.push(...product.items);
});

const Body = () => {
  // React state variable
  const [products, setProducts] = useState(updatedProduct);

  const addFilter = () => {
    let updatedProduct = products.filter((item) => item.name === "Atta");
    setProducts(updatedProduct);
  };

  const removeFilter = () => {
    //updatedProduct.pop();
    setProducts(updatedProduct);
  };
  return (
    <div className="products-container">
      <div>
        <button className="addFilter-btn" onClick={addFilter}>
          AddProducts
        </button>
        <button className="removeFilter-btn" onClick={removeFilter}>
          RemoveProducts
        </button>
      </div>
      {products.map((product, index) => (
        <div>
          <h2 className="product-title"> {product.name} </h2>
          <ProductContainer key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default Body;
