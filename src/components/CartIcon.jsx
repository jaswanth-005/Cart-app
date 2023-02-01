export default function CartIcon(props) {
  return (
    <>
      <div className="cart-icon">
        <i className="fa-solid fa-cart-shopping"></i>
        <div>{props.cartItems}</div>
      </div>
    </>
  );
}
