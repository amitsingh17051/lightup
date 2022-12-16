import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Index from '../pages';
import Login from '../pages/login';
import Register from '../pages/register';
import AddIdea from '../pages/add-idea';
function Navigation() {

    return (
      <div className="main">
        <nav className="navbar navbar-expand-lg bg-light container">
            <Link className="navbar-brand" to="/">Light Ups</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>

        <Routes>
          <Route path="/add-idea" element={<AddIdea />} />
        </Routes>
      </div>
    )
  }
  
  export default Navigation;