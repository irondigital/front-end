import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Total price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">

      <h1 className="text-3xl font-bold text-center mb-6">
        E-Commerce 🛒
      </h1>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Products */}
        <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-gray-800 p-4 rounded shadow"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-40 mx-auto object-contain"
              />
              <h2 className="text-sm mt-2">{p.title}</h2>
              <p className="font-bold mt-1">${p.price}</p>

              <button
                onClick={() => addToCart(p)}
                className="mt-2 w-full bg-blue-500 py-1 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-gray-800 p-4 rounded shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">
            Cart 🛍️
          </h2>

          {cart.length === 0 && (
            <p className="text-gray-400">Cart is empty</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="mb-4 border-b border-gray-700 pb-2"
            >
              <p className="text-sm">{item.title}</p>

              <div className="flex justify-between items-center mt-1">
                <p>${item.price}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="px-2 bg-gray-700 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="px-2 bg-gray-700 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 text-sm mt-1"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          {cart.length > 0 && (
            <div className="mt-4">
              <h3 className="font-bold">
                Total: ${total.toFixed(2)}
              </h3>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}