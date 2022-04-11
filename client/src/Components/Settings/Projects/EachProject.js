import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function EachProject({ name, id, tableId }) {
  const [hideModal, setHideModal] = useState('modal')
  return (
    <div className='ech-project-container'>
      <Link to={`/projects/${tableId}`}><span>{name}</span></Link> 
      <span>{id}</span>
      <span onClick={() => setHideModal('modal-show')} className='open-snippet'>Open code snippet</span>
      <div id="myModal" class={hideModal}>
        <div class="modal-content" id="modal-div">
          <h2>{name} site code</h2>
          <span id='modal-text'>Add this code to your site's &lt;head&gt; tag to start tracking your analytics.</span>
          <form> 
            <label htmlFor='project'>Generated Project ID: </label>
            <input name='project' id='project-input' type='text' value={id} ></input><br/>
            <label>Embed code: </label>
            <p>&lt;script defer id='{id}' class="corvidaeta_script" src="https://cdn.jsdelivr.net/gh/DavidMSands/Corvidaeta-Script@new-final-script/var%20currentURL%20=%20window.location.href;.js"&gt;&lt;/script&gt;</p>
            <br/>
          </form>
          <button className='button' onClick={() => setHideModal('modal')}>Close</button>     
        </div>
        </div>
    </div>
  )
}

export default EachProject