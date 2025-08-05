import { Router, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar'
import Product from './component/Product'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './component/auth/Login'
import SignUp from './component/auth/SignUp'
import Forgot from './component/auth/Forgot'
import Otp from './component/auth/Otp'
import Password  from './component/auth/Password'
import PublicRoute from './PublicRoute'
import Cart from './Pages/Cart'
import Checkout from './Pages/checkout'
import ProtectedRoute from './ProtectedRoute'


function App() {
  

  return (
             <div>
             <Navbar />
             <Routes>
              <Route path="/home" element = {<Home/>}/>
              <Route path="/product" element = {<Product/>}/>
              <Route path="/about" element = {<About/>}/>
              <Route path="/contact" element = {<Contact/>}/>

              <Route element={<PublicRoute/>}>
              <Route path="/login" element={<Login/>}/>
              </Route>

              <Route element={<ProtectedRoute/>}>
                   
                 <Route path="/checkout" element={<Checkout/>}/>
                 <Route path="/cart" element={<Cart/>}/>
            
               </Route>

              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/forgot" element={<Forgot/>}/>
              <Route path="/otp" element={<Otp/>}/>
              <Route path="/password" element={<Password/>}/>
             
              <Route path="/checkout" element={<Checkout/>}/>
             
             </Routes> 
             </div>
          
  )
        

}

export default App

