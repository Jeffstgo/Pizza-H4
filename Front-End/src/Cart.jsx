import React from "react";

const Cart = ({ cart, increaseQuantity, decreaseQuantity }) => {
  const totalPrice = cart.reduce(
    (acc, pizza) => acc + pizza.precio * (pizza.cantidad || 1),
    0
  );

  return (
    <div className="container">
      <h2 className="text-center my-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((pizza) => (
            <div
              key={pizza.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <img src={pizza.imagen} alt={pizza.nombre} width="50" />
              <span>{pizza.nombre}</span>
              <span>${pizza.precio}</span>
              <div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => decreaseQuantity(pizza.id)}
                >
                  -
                </button>
                <span className="mx-2">{pizza.cantidad || 1}</span>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => increaseQuantity(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h4 className="text-end my-3">Total: ${totalPrice.toLocaleString()}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;