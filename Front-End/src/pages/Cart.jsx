import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart, total } =
    useCart();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5>{item.name}</h5>
                  <p>
                    Precio: ${item.price} x {item.quantity}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="btn btn-success btn-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end">
            <h4>Total: ${total.toFixed(2)}</h4>
            <button onClick={clearCart} className="btn btn-danger mt-3">
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
