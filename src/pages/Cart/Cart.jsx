import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

function Cart() {
  const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(tokenContext);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:8000/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCarts(response.data.getCart);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch cart data");
        setLoading(false);
      }
    };
    fetchCart();
  }, [token]);
  const postCartToOrder = async (cartId) => {
    try {
      // Make sure cartId is defined before sending the request
      if (!cartId) {
        console.error("cartId is undefined");
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/order",
        {
          cartId: cartId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error processing order:", error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!carts || carts.length === 0) {
    return <div>No items in carts</div>;
  }

  return (
    <div className="container w-75 h-100vh">
      <h2 className="my-5 text-center text-success ">Your Cart</h2>
      {carts.map((cart) => (
        <div key={cart._id}>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.products?.map((productData) => (
                <tr key={productData.product._id}>
                  <td>
                    <img
                      src={`http://localhost:8000/images/${
                        productData.product.image
                          ? encodeURI(
                              productData.product.image.split("/").pop()
                            )
                          : ""
                      }`}
                      alt={productData.product.productName}
                      style={{
                        height: "auto",
                        width: "100px",
                        borderRadius: "5px",
                      }}
                    />
                  </td>
                  <td className="align-middle">
                    {productData.product.productName}
                  </td>
                  <td className="align-middle">
                    ${productData.product.finalPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <h4>Total Price: ${calculateTotalPrice(cart)}</h4>
            {/* <h4>Total Price: ${cart.totalPrice}</h4> */}
            <Link to={"/auth/order"}>
              <button
                className="btn btn-primary my-3 mx-2"
                onClick={() => postCartToOrder(cart._id)}
              >
                order now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

const calculateTotalPrice = (cart) => {
  if (cart && cart.products) {
    return cart.products.reduce((acc, productData) => {
      return acc + productData.product.finalPrice;
    }, 0);
  }
  return 0;
};

export default Cart;
