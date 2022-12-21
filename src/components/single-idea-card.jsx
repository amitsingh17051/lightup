import React from 'react'

function IdeaCard({name,description,id}) {

    const deleteIdeaHandler = (event) => {
        const ideaId = event.target.getAttribute("data-id");
        const confirmDelete = confirm("Are you sure you want to delete this idea?");
        if(confirmDelete) {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:8000/api/idea/'+ideaId, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data.status) {
                        document.querySelector('#idea_'+ideaId).remove();
                    }
                    alert(data.msg)
                })
        }
    } 
    
   
    return (
        <div id={`idea_${id}`} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block ">
                <svg className="bd-placeholder-img" width="250" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#ffc107"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{name}</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">{description}</p>
                <div className="idea-manage-action d-flex gap-3">
                    <a href={`/edit-idea/${id}`} className="">Edit</a>
                    <a href={`/edit-idea/${id}`} className="">View</a>
                    <a href="#" className=""  data-id={`${id}`}  onClick={deleteIdeaHandler}>Delete</a>
                </div>
            </div>
        </div>
        
    )
}

export default IdeaCard;