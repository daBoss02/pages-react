/*
  Using React Router library in our app allows us to nabigate between different pages or components
  in React, and actually makes these changes to the URL of each page or component

  React Router Isn't installed with 'create-react-app' by default
  so you will need to install it before you start using it
  'npm i react-router-dom'
*/

import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="container flex">
        <h1>Pages</h1>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <NavLink to="/tutorials"
                className={navData => (navData.isActive ? "active" : "")}
              >Tutorials</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;