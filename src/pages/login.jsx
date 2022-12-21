import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
    const loginUserFormHandler = (event) => {
      event.preventDefault();
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'cors',
          body: JSON.stringify({ name, password })
      };
      fetch('http://localhost:8000/api/user/login', requestOptions)
          .then(response => response.json())
          .then(data => {

            if(data.status) {
                localStorage.setItem("token", data.token)
                window.history.pushState({}, '', '/')
                location.reload();
            } else {
                alert(data.msg)
            }
        });
    }  

    useEffect(() => {
        fetch('http://localhost:8000/api/user/username', {
            method: 'POST',
            headers: {
                "x-access-token": localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data =>  {
            if(data.isLoggedIn) {
                window.history.pushState({}, '', '/')
                location.reload();
            }
        })
    }, [])


    
    return (
        <div className="login container mt-5"> 
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <div className="px-4 py-5 my-5">
                        <form width="300px" onSubmit={loginUserFormHandler}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={event => setName(event.target.value)}  value={name} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={event => setPassword(event.target.value)} value={password} />
                            </div>
                           
                            <button type="submit" className="btn text-white btn-warning">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;