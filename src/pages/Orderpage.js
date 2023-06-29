import React, { useEffect, useState } from "react";
import "./Orderpage.css";

function Orderpage() {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    new: true,
    packed: true,
    inTransit: true,
    delivered: true
  });
  const [filteredCount, setFilteredCount] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    updateFilteredCount();
  }, );

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
      );
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({ prevFilters, [name]: checked }));
  };

  const filteredOrders = orders.filter((order) => {
    if (filters.new && order.orderStatus === "New") {
      return true;
    }
    if (filters.packed && order.orderStatus === "Packed") {
      return true;
    }
    if (filters.inTransit && order.orderStatus === "InTransit") {
      return true;
    }
    if (filters.delivered && order.orderStatus === "Delivered") {
      return true;
    }
    return false;
  });

  const updateFilteredCount = () => {
    const count = filteredOrders.length;
    setFilteredCount(count);
  };

  return (
    <div className="ordermain">
      <div className="left">
        <h1>Orders</h1>
        <div className="filter">
          <h2>Filters</h2>
          <p>Count: {filteredCount}</p>
          <div className="check-iteam">
            <label>
              <input
                type="checkbox"
                name="new"
                checked={filters.new}
                onChange={handleCheckboxChange}
              />
              New
            </label>
            <label>
              <input
                type="checkbox"
                name="packed"
                checked={filters.packed}
                onChange={handleCheckboxChange}
              />
              Packed
            </label>
            <label>
              <input
                type="checkbox"
                name="inTransit"
                checked={filters.inTransit}
                onChange={handleCheckboxChange}
              />
              In Transit
            </label>
            <label>
              <input
                type="checkbox"
                name="delivered"
                checked={filters.delivered}
                onChange={handleCheckboxChange}
              />
              Delivered
            </label>
          </div>
        </div>
      </div>
      <div className="heding-name">
        <div className="name-hed">
          <p>ID</p>
          <p>Customer</p>
          <p>Date</p>
          <p>Amount</p>
          <p>Status</p>
        </div>
        <div className="details" id="detailsContainer">
          {/* Display the filtered order list */}
          {filteredOrders.map((order) => (
            <div key={order.id}>
              <p className="id">{order.id}</p>
              <p className="cust">{order.customerName}</p>
              <p className="dta">{`${order.orderDate} ${order.orderTime}`}</p>
              <p className="amunt">{order.amount}</p>
              <p className="ordstatus">{order.orderStatus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orderpage;























// import React, { useState, useEffect } from 'react';
// import "./Orderpage.css"

// function Orderpage() {
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [filterOptions, setFilterOptions] = useState({
//     new: true,
//     packed: true,
//     inTransit: true,
//     delivered: true,
//   });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   });

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(
//         'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders'
//       );
//       const data = await response.json();
//       setOrders(data);
//       setFilteredOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const applyFilters = () => {
//     const filtered = orders.filter((order) => {
//       if (filterOptions.new && order.orderStatus === 'New') {
//         return true;
//       }
//       if (filterOptions.packed && order.orderStatus === 'Packed') {
//         return true;
//       }
//       if (filterOptions.inTransit && order.orderStatus === 'InTransit') {
//         return true;
//       }
//       if (filterOptions.delivered && order.orderStatus === 'Delivered') {
//         return true;
//       }
//       return false;
//     });
//     setFilteredOrders(filtered);
//   };

//   const handleFilterChange = (e) => {
//     const { name, checked } = e.target;
//     setFilterOptions((prevOptions) => {
//       const updatedOptions = {
//         ...prevOptions,
//         [name]: checked,
//       };

//       let newCount = 0;
//       // Calculate the new count based on the checkbox status
//       if (updatedOptions.new) newCount++;
//       if (updatedOptions.packed) newCount++;
//       if (updatedOptions.inTransit) newCount++;
//       if (updatedOptions.delivered) newCount++;

//       setCount(newCount);
//       return updatedOptions;
//     });
//   };

//   return (
//     <div className='main'>
//       <h1 className='heading'>Order Page</h1>
//       <div className='label-box'>
//         <h3 className='filter'>Filters {count}</h3>
//         <p className='count-name'>
//           Count:  {filterOptions.new && ` New (${filteredOrders.filter((order) => order.orderStatus === 'New').length})`}
//             {filterOptions.packed && ` Packed (${filteredOrders.filter((order) => order.orderStatus === 'Packed').length})`}
//             {filterOptions.inTransit && ` In Transit (${filteredOrders.filter((order) => order.orderStatus === 'InTransit').length})`}
//             {filterOptions.delivered && ` Delivered (${filteredOrders.filter((order) => order.orderStatus === 'Delivered').length})`}
//         </p>
//         <label>
//           <input className='inp-box'
//             type="checkbox"
//             name="new"
//             checked={filterOptions.new}
//             onChange={handleFilterChange}
//           />
//           New
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="packed"
//             checked={filterOptions.packed}
//             onChange={handleFilterChange}
//           />
//           Packed
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="inTransit"
//             checked={filterOptions.inTransit}
//             onChange={handleFilterChange}
//           />
//           In Transit
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="delivered"
//             checked={filterOptions.delivered}
//             onChange={handleFilterChange}
//           />
//           Delivered
//         </label>
//       </div>
//       <ul className='order-filter'>
//         {filteredOrders.map((order) => (
//           <li key={order.id}>{order.orderStatus}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Orderpage;
