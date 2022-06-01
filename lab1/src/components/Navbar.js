import './Navbar.css'
import React from 'react'
import { useState } from 'react'



const Navbar = () => {  

const [isLoggedIn, setIsLoggedIn] = useState(false)
const toggleLogin = () => {
setIsLoggedIn(state => !state)
}

  return (
    
      <div className='navbar'>
       
        <h2>Natalya's Library</h2> 
        
        { isLoggedIn ? <p className='item'>Natalya</p> : <button className='btn btn-link' onClick={toggleLogin}>Login</button>}
        
        
        </div>
        
  
   
    
  )
}

export default Navbar