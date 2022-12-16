import React from 'react'
function AddIdea() {
  

  return (
    <div className="add-idea  container mt-5"> 
        <div className="row">
            <div className="col-md-5 offset-md-3">
                <div className="px-4 py-5 my-5">
                    <form width="300px">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' />
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="formFileSm" className="form-label">Uploads</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file" />
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

export default AddIdea
