import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function EditIdea() {
  
    const params = useParams();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [userId, setUserId] = useState(false);
   
    const updateIdeaFormHandler = (event) => {
        event.preventDefault();
    
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify({ name, description, userId })
        };
        fetch('http://localhost:8000/api/idea/'+params.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                window.history.pushState({}, '', '/idea-manager')
                location.reload();
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
                const requestOptions = {
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'cors'
                };
                fetch('http://localhost:8000/api/idea/'+params.id, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        setName(data.idea[0].name)
                        setDescription(data.idea[0].description)
                    });
    
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
                    <form width="300px" onSubmit={updateIdeaFormHandler}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' onChange={event => setName(event.target.value)}   value={name} />
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  value={description} onChange={event => setDescription(event.target.value)} ></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="formFileSm" className="form-label">Uploads</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>
                       

                        
                        
                        <button type="submit" className="btn text-white btn-warning">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default EditIdea
