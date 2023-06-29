import React from 'react'
import { Link,useLocation} from 'react-router-dom';
import "./Topbar.css"



function Topbar() {
  const location = useLocation();
  const showLogoutButton = ['/order', '/product', '/user'].includes(location.pathname);
  
  return (
    <div className='main'>
         <div className="leftmenue">
        <div className="logo">
          <Link to="/">
            <img
              className="imglogo"
              src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
              alt="kafenelogo"
            />
          </Link>
        </div>
        </div>
        <h1>Kafene</h1>
        <div className="rightmenue">
          <div className="menue-iteam">
          <Link to="/order"className={`order ${location.pathname === '/order' ? 'active' : ''}`}>Order</Link>
          <Link to="/product" className={`product ${location.pathname === '/product' ? 'active' : ''}`}>Products</Link>
          <Link to="/user" className={`users ${location.pathname === '/user' ? 'active' : ''}`}>Users</Link>
         
          </div>
          {showLogoutButton && (
          <Link to="/" className='logoutbtn'>Logout</Link>
        )}
        </div>
    </div>
  )
}

export default Topbar