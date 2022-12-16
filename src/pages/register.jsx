import React from 'react'

function Register() {
   
    return (
        <div className="register container mt-5"> 
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <div className="px-4 py-5 my-5">
                        <form width="300px">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' />
                                
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <button type="submit" className="btn text-white btn-warning">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Register;