import React, { useEffect, useState } from "react";
import "./Productpage.css";

function Productpage() {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    Expired: true,
    LowStock: true,
  });

  const isExpired = (expiryDate) => {
    const currentDate = new Date();
    const orderDate = new Date(expiryDate);
    return orderDate < currentDate;
  };

  const isLowStock = (stock) => {
    return stock < 100;
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
      );
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  const filteredOrders = orders.filter((order) => {
    if (filters.Expired && isExpired(order.expiryDate)) {
      return true;
    }
    if (filters.LowStock && isLowStock(order.stock)) {
      return true;
    }
    return false;
  });

  return (
    <div className="productmain">
      <div className="pro-left">
        <h1>Products</h1>
        <div className="pro-filter">
          <h2>Filters</h2>
          <p>Count: {filteredOrders.length}</p>
          <div className="procheck-iteam">
            <label>
              <input
                type="checkbox"
                name="Expired"
                checked={filters.Expired}
                onChange={handleCheckboxChange}
              />
              Expired
            </label>
            <label>
              <input
                type="checkbox"
                name="LowStock"
                checked={filters.LowStock}
                onChange={handleCheckboxChange}
              />
              Low Stock
            </label>
          </div>
        </div>
      </div>
      <div className="proheding-name">
        <div className="productname-hed">
          <p>ID</p>
          <p>Product Name</p>
          <p>Product Brand</p>
          <p>Expiry Date</p>
          <p>Unit Price</p>
          <p className="stockname">Stock</p>
        </div>
        <div className="prodetails" id="product-detailsContainer">
          {/* Display the filtered order list */}
          {filteredOrders.map((order) => (
            <div key={order.id}>
              <p className="pro-id">{order.id}</p>
              <p className="pro-mediname">{order.medicineName}</p>
              <p className="pro-medibrand">{order.medicineBrand}</p>
              <p className="pro-date">{order.expiryDate}</p>
              <p className="pro-price">{order.unitPrice}</p>
              <p className="pro-script">{order.prescriptionRequired}</p>
              <p className="pro-stock">{order.stock}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productpage;
