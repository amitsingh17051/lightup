import { useState, useEffect } from 'react'
import IdeaCard from '../components/single-idea-card';


function IdeaManager() {
    const [userId, setUserId] = useState(false);
    const [ideas, setIdeas] = useState([]);

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
            fetch('http://localhost:8000/api/idea/user/'+data.id, requestOptions)
                .then(response => response.json())
                .then(data => setIdeas(data.userIdea));
    
            } 
        })

        
    }, [])
      
    

    return (
        <>
            <div className="container">
                <section className="manage-ideas">
                    <h1>Manage Your Idea’s here..</h1>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            {ideas.map((idea,index) => (
                               
                                <IdeaCard  id={idea._id} key={index} name={idea.name} description={idea.description}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default IdeaManager;