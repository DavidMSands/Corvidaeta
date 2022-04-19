import React, { useState, useEffect } from 'react'
import EachProject from './EachProject'


function Projects({ setShowNavBar }) {
  const [projects, setProjects] = useState([])
  const [projectName, setProjectName] = useState()
  const [modalObj, setModalObj] = useState()
  const [hideModal, setHideModal] = useState('modal')
  const [user, setUser] = useState(null)
  

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
        .then(setShowNavBar(true))
      } else {
        r.json()
      }
    }) 
  }, [])
  console.log(user)

  useEffect(() => {
    fetch(`/my_projects/${user?.id}`)
    .then(res => res.json())
    .then(projects => setProjects(projects))
  }, [hideModal, user])
  
  console.log(user)
  const handleNewProj = (e) => {
      e.preventDefault()
      let generatedProjId = 'C' + Math.floor(Math.random() * Date.now())
      const newObj = {
        project_name: projectName,
        generated_proj_id: generatedProjId,
        user_id: user.id
      }
      fetch('/projects', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(data => {
          setModalObj(data)
        })
        setProjects(projects => [...projects, newObj])
        setProjectName('')
        setHideModal('modal-show')
  }

  console.log(projects.error)

  return (
    <div id='projects-container'>
      <h2>My Projects</h2>
      <h3>Create a new project</h3>
      <p>Create a new project below! Once your project is created, you will receive an embed code that can be added to the &lt;head&gt; tag in your websites HTML file.</p>
      <form onSubmit={handleNewProj}> 
        <label htmlFor='project'>New Project: </label>
        <input name='project' id='project-input' type='text' placeholder='Red Throated Loon' value={projectName} onChange={e => setProjectName(e.target.value)}></input><br/>
        <input type='submit' className='new-proj-submit'></input>
      </form>
      <div id="myModal" class={hideModal}>
        <div class="modal-content" id="modal-div">
          <h2>{modalObj?.project_name} site code</h2>
          <span id='modal-text'>Add this code to your site's &lt;head&gt; tag to start tracking your analytics.</span>
          <form onSubmit={handleNewProj}> 
            <label htmlFor='project'>Generated Project ID: </label>
            <input name='project' id='project-input' type='text' value={modalObj?.generated_proj_id} ></input><br/>
            <label>Embed code: </label>
            <p>&lt;script defer id='{modalObj?.generated_proj_id}' class="corvidaeta_script" src="https://cdn.jsdelivr.net/gh/DavidMSands/Corvidaeta-Script@final/var%20currentURL%20=%20window.location.href;.js"&gt;&lt;/script&gt;</p>
            <br/>
          </form>
          <button className='button' onClick={() => setHideModal('modal')}>Close</button>     
        </div>
      </div>
      <div id="my-projects">
        <h3>Manage projects</h3>
        <div className='ech-project-container each-header'>
          <span>Project Name:</span>
          <span>Project ID:</span>
          <span>Project code snippet:</span>
        </div>
        {projects.error ? null : projects.map(project => (
          <EachProject
          name={project.project_name}
          tableId={project.id}
          id={project.generated_proj_id}
          hideModal={hideModal}
          setHideModal={setHideModal}
          modalObj={modalObj}
          handleNewProj={handleNewProj}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects