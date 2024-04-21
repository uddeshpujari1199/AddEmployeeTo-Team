import React from 'react'
import './emplyeCart.css'

function EmployeCard({name, id, age, dispatch}) {
  return (
    <div className='EmpCart'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <div>
            <button  onClick={()=>{
              dispatch({type:'add_Member_toTeam', payload:id})
              
            }}>Add To Team</button>
        </div>
    </div>
  )
}

export default EmployeCard;