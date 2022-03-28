import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (

    <div>
<Link to="/">HOME</Link>
<Link to="/register">Register</Link>
<Link to="/login">Login</Link>
<Link to="/product">Products</Link>


    </div>
  )
}

export  {Navbar}