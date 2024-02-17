import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'
import Goals from './Components/Goals/Goals'
import About from './Components/Info/About'

import Error from './Components/Error'
import Mission from './Components/Mission/Mission'
import { auth } from '../firebaseConfig'
import AuthContext from './Components/Auth/LoginContainer'
import { useEffect, useState } from 'react'
import Camera from './Components/Home/Camera'

function App() { 
  const [user,setUser] = useState(null);

  useEffect(() =>{
    const users = auth.currentUser;
    try{
      if(users){
        setUser(user)
      }
    }catch(err){
      console.log(err)
    }
  },[])

  return(
    <>
    <AuthContext.Provider value={user}>
    <Router>
      <Routes>
         <Route path='/' index element={<Layout/>}/>
         <Route path='blogs' element={<Blogs/>}/>
         <Route path='goals' element={<Goals/>}/>
         <Route path='contact' element={<Contact/>} />
         <Route path='about' element={<About />}/>
         <Route path='mission' element={<Mission/>}/>
         <Route path='/open/camera' element={<Camera/>}/>
         <Route path='auth/login' element={<Login/>}/>
         <Route path='auth/signup' element={<Signup/>}/>
         <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
    </AuthContext.Provider>
  </>
  )
}

export default App
