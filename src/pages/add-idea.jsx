import { useState, useEffect } from 'react'

function AddIdea() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState(0);
  const [file, setFile] = useState(0);
  const [error, setError] = useState(null);


  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  
  const addIdeaFormHandler = (event) => {

    event.preventDefault();

    const formData = new FormData();
    
    formData.append('name', name);
    formData.append('description', description);
    formData.append('userId', userId);
    formData.append('asset', file);
   
    console.log(formData)
   
    for (var key of formData.entries()) {
			console.log(key[0] + ', ' + key[1])
		}
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        body:  formData
    };
    fetch('http://localhost:8000/api/idea/', requestOptions)
        .then(response => response.json())
        .then(data => {
            // window.history.pushState({}, '', '/idea-manager')
            // location.reload();
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
    .then(data => {
      if(data.isLoggedIn){
        setUserId(data.id)
      } else {
        window.history.pushState({}, '', '/')
        location.reload();
      }
    })
  }, [])

  return (
    <div className="add-idea  container mt-5"> 
        <div className="row">
            <div className="col-md-5 offset-md-3">
                <div className="px-4 py-5 my-5">
                    <form width="300px" onSubmit={addIdeaFormHandler} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' onChange={event => setName(event.target.value)}  value={name} />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  onChange={event => setDescription(event.target.value)} value={description}></textarea>
                        </div>
                       
                        <div className="mb-3">
                        <input type="file" onChange={fileSelected} className='asset form-control' name='asset' />
                        </div>
                        
                      <button type="submit" className="btn text-white btn-warning">Add</button>

                      
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default AddIdea
