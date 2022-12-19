import { useState } from 'react'


function AddIdea() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState(0);
  const [postData, setPostData] = useState('');

  const addIdeaFormHandler = (event) => {
    event.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({ name, description, userId })
    };
    fetch('http://localhost:8000/api/idea/', requestOptions)
        .then(response => response.json())
        .then(data => this.setPostData({ postId: data.id }));

    console.log(postData);
  }  

  return (
    <div className="add-idea  container mt-5"> 
        <div className="row">
            <div className="col-md-5 offset-md-3">
                <div className="px-4 py-5 my-5">
                    <form width="300px" onSubmit={addIdeaFormHandler}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' onChange={event => setName(event.target.value)}  value={name} />
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  onChange={event => setDescription(event.target.value)} >{description}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="formFileSm" className="form-label">Uploads</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">User id</label>
                            <input type="text" name="userId" className="form-control" onChange={event => setUserId(event.target.value)} value={userId} />
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
