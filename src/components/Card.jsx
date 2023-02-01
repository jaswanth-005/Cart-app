import { useState } from "react";

export default function Card(props) {
  let [isAdded, setIsAdded] = useState(false);
  let [quantity, setQuantity] = useState(0);

  function onAdd() {
    if (isAdded) {
      setIsAdded(false);
      props.removeFromCart();
      props.changeTotal(-props.product.price);
    } else {
      setIsAdded(true);
      props.addToCart();
      props.changeTotal(props.product.price);
    }
    setQuantity(1);
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
    props.changeTotal(props.product.price);
  }
  function decreaseQuantity() {
    setQuantity(quantity - 1);
    props.changeTotal(-props.product.price);
  }

  return (
    <>
      <div className="card">
        <div className="image-wrapper">
          <img src={props.product.path} 
          alt="product-image" />
        </div>
        <div className="card-content">
          <div className="prod-name">
            {props.product.name}</div>
          <div className="price">
            {props.product.price}</div>
          {isAdded && (
            <div className="counter">
              <div onClick={increaseQuantity}>+</div>
              <div>{quantity}</div>
              <div onClick={decreaseQuantity}>-</div>
            </div>
          )}
          <button onClick={onAdd}>{isAdded ? "Remove" : "Add"}
          </button>
        </div>
      </div>
    </>
  );
}
