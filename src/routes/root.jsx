import logo from "./logo.png"
import { Outlet,Link } from "react-router-dom"
export default function Root() {
    return (
      <>
        <div id="sidebar">
            <div className='sidebar_logo'>
                <img src={logo} alt="logo" />
            </div>
                <nav>
                    <ul>
                    <li>
                        <Link to={`/neworder/1`}>New order</Link>
                    </li>
                    <li>
                        <Link to={`/massorder/2`}>Mass order</Link>
                    </li>
                    <li>
                      <Link to={`/services/3`}>Services</Link>
                    </li>
                    <li>
                      <Link to={`/orders/4`}>Orders</Link>
                    </li>
                    </ul>
                </nav>
        </div>
        <div id="detail">
        <div className="header">
          <h2>This is the header</h2>
         </div>
        <Outlet />
        <div className="footer">
           <h2>Copyright 2022.All Rights Reserved by smmfollows</h2>
        </div>
            
        </div>
      </>
    );
  }