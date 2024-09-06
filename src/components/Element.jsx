import React from 'react'
import './Element.css'
export default function Element(props) {
  // const handleDelete = (data)=>{
  //   console.log("data recieved")
  // }
  return (
    <>
   <div className='elementWrapper'>
    <div>
    <div className="name">{props.name}</div>
    <hr />
    <p>{props.description}</p>
    </div>
    <button className='update-btn' onClick={()=>props.updateFun(props.arr , props.elemIndex)}>+</button>
    <button className='delete-btn' onClick={()=>props.deletefun(props.arr , props.elemIndex)}>X</button>
   </div>
    </>
  )
}
