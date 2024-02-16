import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'

function App() {
  return(
    <Router>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='blogs' element={<Blogs/>}/>
         <Route path='contact' element={<Contact/>} />
         <Route path='auth/login' element={<Login/>}/>
         <Route path='auth/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
