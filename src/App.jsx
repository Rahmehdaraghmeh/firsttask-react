import React, { useState } from 'react'

export default function App() {
  const[counter,setCounter]=useState(0)
  let  increase=()=>{
setCounter(counter+1)
// console.log(counter);

  }
  const product={
    Name:'iphone 14',
    Price:'$2000',
    Description:"A premiun smartphone with advanced features"
  }
  const [show,setShow]=useState(false)
  const Toggleshow=()=>{
    setShow(!show)
  }
    
  
  return (
    <>
      <h1> counter is  {counter} </h1>
      <button className='btn btn-secondary'  onClick={increase}>increase</button><br></br>
      <br></br>
      <button  className='btn btn-secondary' onClick={Toggleshow}>{show?'Hide Product':'Show Product'}</button>
      <div style={{display:show? 'block':'none'}}> 
        <h1>  Product  Details</h1>
    <p><strong>Name :</strong>{product.Name}</p>
    <p><strong>Price:</strong>{product.Price}</p>
    <p><strong>Description:</strong>{product.Description}</p>
</div>
    </>
  )
}
