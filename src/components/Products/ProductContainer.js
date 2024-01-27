import ProductCard from "./ProductCard";

const ProductContainer = (props) => {
  var { items } = props.product;
  return (
    <div className="product-container">
      {items.map((item, index) => {
        return <ProductCard key={index} details={item} />;
      })}
    </div>
  );
};

export default ProductContainer;
