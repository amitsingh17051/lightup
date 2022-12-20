import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Index from '../pages';
import Login from '../pages/login';
import Register from '../pages/register';
import AddIdea from '../pages/add-idea';
import IdeaManager from '../pages/idea-manager';
import LoginNavItem from './loginNavItem';



function Navigation() {

    const [showLogin, setShowLogin] = useState(true);
    const [userName , setUserName] = useState();
    const [userId, setUserId] = useState();


    useEffect(() => {
      fetch('http://localhost:8000/api/user/username', {
          method: 'POST',
          headers: {
              "x-access-token": localStorage.getItem('token')
          }
      })
      .then(res => res.json())
      .then(data => {
        if(data.isLoggedIn){
          setShowLogin(false);
          setUserName(data.name)
          setUserId(data.id)
        } 
      })
    }, [])


    return (
      <div className="main">
        <nav className="navbar navbar-expand-lg bg-light container">
            <Link className="navbar-brand" to="/">Light Ups</Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  { showLogin ?   
                    <LoginNavItem />
                  : 
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/idea-manager">Manage Your Ideas</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">{userName}</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/add-idea">Add Your Ideas</Link>
                    </li>
                  </>
                  }   
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
        <Routes>
          <Route path="/idea-manager" element={<IdeaManager />} />
        </Routes>
      </div>
    )


    
  }

  export default Navigation;