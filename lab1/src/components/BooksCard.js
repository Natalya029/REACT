import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'



const BooksList = (book) => {
  const[isBorder, setIsBorder] = useState(false)
  const setBorder = () => {
    setIsBorder(state => !state)
  }
  


  return (

    
  <div className="col">
    <div className={`card shadow p-3 bg-body rounded card h-100 ${isBorder ? 'border border-secondary border-5' : ''}`}>
      
      <div className="card-body">
        <h5 className="card-title pb-2">{book.title}</h5>
        <img onClick={setBorder} src={book.img} class="card-img-top" alt=''></img>
        <p className="card-text mt-2" >{book.body}</p>
        <button  className="btn btn-light">More about..</button>
      </div>
    </div>
  </div>
 
 
  )
}
 
 

export default BooksList