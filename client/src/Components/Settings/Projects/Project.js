import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';


function Project() {
    const params = useParams().id
    const [project, setProject] = useState()
    const [isDelete, setIsDelete] = useState(false)
    const [confirmName, setConfirmName] = useState()
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`/projects/${params}`)
        .then(res => res.json())
        .then(proj => setProject(proj))
      }, [])

    const handleDelete = (e) => {
        e.preventDefault()
        if(confirmName === project.project_name) {
            fetch(`/projects/${project.id}`, {
                method: 'DELETE',
              })
        }
        navigate('/projects')
    }

  return (
      <div className='proj-container'><br/>
        <Link to={`/projects`}><BiArrowBack className='back-arrow'/></Link>
        <h2>{project?.project_name}</h2>
        <p className='proj-id'>Project ID: {project?.generated_proj_id}</p>
        <h3>Edit project</h3>
        <div id="delete-container">
            <p>Click EDIT to change your projects's name, add a description, or add a URL.</p>
            <button className='button'>EDIT</button>
        </div>
        <h3>Delete project</h3>
        <div id="delete-container">
        <p>Click the DELETE button to completely delete your project and all of it's data. This action is irreversible.</p>
            <button className='delete-btn' onClick={() => setIsDelete(!isDelete)}>DELETE</button>
        </div>
        <div className='delete-confirm'>
            { isDelete 
            ? <form onSubmit={e => (e.preventDefault())}> 
                <label htmlFor='confirm'>Please confirm project name to delete: </label>
                <input name='confirm' id='confirm' type='text' value={confirmName} onChange={(e) => setConfirmName(e.target.value)}></input><br/>
                { confirmName === project.project_name
                ?<button className='delete-btn' onClick={handleDelete}>DELETE</button>
                : null
                }  
            </form>
            : null
            }
        </div>
      </div>

  )
}

export default Project