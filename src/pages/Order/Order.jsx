import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { tokenContext } from "../../contexts/authContext";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token } = useContext(tokenContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8000/order", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data.order);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch order data");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (orders?.length === 0) {
    return <div>No orders found</div>;
  }

  return (
    <div className="container h-100vh">
      <h2 className="my-5 text-center text-success">Orders</h2>
      <table className="table table-striped h-100vh">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.paymentMethod}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
