import React, { useState } from 'react'
import Form from './Form'

function UserChat() {
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();

  return (
    <div>
        <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription}/>
    </div>
  )
}

export default UserChat