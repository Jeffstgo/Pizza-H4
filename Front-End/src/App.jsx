import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import Cart from "./Cart";
import pizzas from "./assets/data/pizzas";
import Pizza from "./Pizza"; 
// App component 

function App() {
 
  const [cart, setCart] = useState(pizzas.map((pizza) => ({ ...pizza, cantidad: 1 })));


  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
      )
    );
  };


  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
      )
      .filter((pizza) => pizza.cantidad > 0); 

    setCart(newCart);
  };

  return (
    <div>
      <Navbar cart={cart} />
      <Home />
      <Pizza />
      {/* { <RegisterPage /> } */}
      {/* <LoginPage /> */}
      {/* {<Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />} */}
      <Footer />
    </div>
  );
}

export default App;