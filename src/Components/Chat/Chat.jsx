import React from 'react'
import {useNavigate} from 'react-router-dom';

function Chat() {
    const navigate = useNavigate()
  return (
    <div>
        <div className=' bg-gray-300 text-3xl font-Poppins flex gap-4 w-4/5 mx-auto p-3 justify-center items-center my-3 rounded-md'>
            <h1>Ask a Question?</h1>
            <button onClick={() => navigate('/community/create')} className=' bg-blue-500 p-2 text-white rounded'>Create</button>
        </div>
    </div>
  )
}

export default Chat