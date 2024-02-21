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
import Create from './Components/Blogs/Create'
import Bloglist from './Components/Blogs/BlogList'
import BlogView from './Components/Blogs/BlogView'
import BlogEdit from './Components/Blogs/BlogEdit'
import Points from './Components/Info/Points'
import Profile from './Components/Profile/Profile'
import Loading from './Components/Home/Loading'
import Tips from './Components/Info/Tips'

function App() { 
  const [user,setUser] = useState(null);

  // useEffect(() =>{
  //     try{
  //       const data =localStorage.getItem('user');
  //       if(data !== null){
  //            setUser(user => !user)
  //       }
  //     }catch(err){
  //       console.log(err)
  //     }
  // },[user])

  useEffect(() =>{
    // const users = auth.currentUser;
    // console.log(users)

    auth.onAuthStateChanged(users => {
        if(users){
          setUser(users)
        }else{
           console.log('error while loading user...')
        }
    })
  },[user])

  return(
    <>
    <AuthContext.Provider value={user}>
    <Router>
      <Routes>
         <Route path='/' index element={<Layout/>}/>
         <Route path='blogs' element={<Bloglist/>}/>
         <Route path='goals' element={<Goals/>}/>
         <Route path='contact' element={<Contact/>} />
         <Route path='about' element={<About />}/>
         <Route path='mission' element={<Mission/>}/>
         <Route path='create' element={<Create/>}/>
         <Route path='points' element={<Points/>}/>
         <Route path='profile' element={<Profile/>}/>
         <Route path='tips' element={<Tips/>}/>
         <Route path='/blog/:id' element={<BlogView/>}  />
         <Route path='/blog/edit/:id' element={<BlogEdit/>}  />
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
