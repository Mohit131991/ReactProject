const ProductCard = (props) => {
  const { brand, quantity, img } = props.details;
  return (
    <div className="product-card">
      <img className="card-img" src={img}></img>
      <div>{brand}</div> <div>{quantity}</div>
    </div>
  );
};

export default ProductCard;
