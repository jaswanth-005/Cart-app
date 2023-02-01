import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Total from "./components/Total";

let products = [
  {
    name: "Redmi 4",
    path: "mobile-1.jpg",
    price: 9000,
  },
  {
    name: "Samsung M13",
    path: "mobile-2.jpg",
    price: 10000,
  },
  {
    name: "Redmi A1",
    path: "mobile-3.jpg",
    price: 13000,
  },
  {
    name: "Redmi 9A",
    path: "mobile-4.jpg",
    price: 20000,
  },
];

function App() {
  let [cartItems, setCartItems] = useState(0);
  let [total, setTotal] = useState(0);

  function addToCart() {
    setCartItems(cartItems + 1);
  }

  function removeFromCart() {
    setCartItems(cartItems - 1);
  }

  function changeTotal(t) {
    console.log(t);
    setTotal(total + t);
  }
  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        {products.map((e) => (
          <Card
            product={e}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            changeTotal={changeTotal}
          />
        ))}
      </main>
      <Total total={total} />
    </>
  );
}

export default App;
